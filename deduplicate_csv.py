
import csv
from collections import OrderedDict

def deduplicate():
    batches = OrderedDict()
    removed_count = 0
    
    with open('recall_database.csv', 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        header = next(reader)
        for row in reader:
            if not row: continue
            code = row[0]
            if code in batches:
                # Merge logic or Keep better one
                existing = batches[code]
                
                # Check if one has more info in docUrl or sourceDisplay
                # Or just keep the one that has a deeper link
                # For this specific task, we'll merge regions if they are different
                # and pick the more detailed description.
                
                # Merge region
                if row[4] != existing[4]:
                    if row[4] not in existing[4]:
                        existing[4] = f"{existing[4]}/{row[4]}"
                
                # Update link if new is deeper
                if len(row[7]) > len(existing[7]) and 'http' in row[7]:
                    existing[7] = row[7]
                
                # Update source if new is more specific
                if len(row[6]) > len(existing[6]):
                    existing[6] = row[6]
                
                removed_count += 1
            else:
                batches[code] = row

    with open('recall_database.csv', 'w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(header)
        for row in batches.values():
            writer.writerow(row)
    
    print(f"Deduplication complete. Removed {removed_count} duplicate entries.")

if __name__ == "__main__":
    deduplicate()
