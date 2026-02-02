
import csv
from collections import defaultdict

batches = defaultdict(list)
with open('recall_database.csv', 'r', encoding='utf-8') as f:
    reader = csv.reader(f)
    header = next(reader)
    for i, row in enumerate(reader, start=2):
        if row:
            batches[row[0]].append((i, row))

for code, entries in batches.items():
    if len(entries) > 1:
        print(f"=== Batch {code} ({len(entries)} entries) ===")
        for line, row in entries:
            print(f"Line {line}: {','.join(row)}")
