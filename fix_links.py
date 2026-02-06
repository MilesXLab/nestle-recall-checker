import csv
import os

file_path = '/Users/miles/Projects/personal/nestle-recall-checker/recall_database.csv'
temp_path = '/Users/miles/Projects/personal/nestle-recall-checker/fix_links_temp.csv'

UPDATES = {
    'Milumil': 'https://www.produktwarnung.eu/2026/02/05/rueckruf-cereulide-danone-ruft-milumil-babynahrung-zueruck.html',
    'Aptamil': 'https://www.produktwarnung.eu/2026/02/05/update-rueckruf-aptamil-babynahrung-danone-weitet-rueckruf-dramatisch-aus.html',
    'SMA': 'https://www.fsai.ie/news-and-alerts/food-alerts/recall-of-an-additional-batch-of-sma-first-infant-milk'
}

GENERIC_LINKS = [
    'https://www.produktwarnung.eu/',
    'https://www.vol.at/',
    'https://www.foodwatch.org/de/oesterreich/',
    'https://www.fsai.ie/news-alerts/food-alerts/recall-of-certain-batches-of-nestle-sma-infant-and'
]

rows = []
header = None
count = 0

with open(file_path, 'r', encoding='utf-8') as f:
    reader = csv.reader(f)
    header = next(reader)
    for row in reader:
        if row[1] in UPDATES:
            if any(generic == row[7] or generic == row[7] + '/' for generic in GENERIC_LINKS) or row[0] == '53390346AB':
                row[7] = UPDATES[row[1]]
                count += 1
        rows.append(row)

with open(temp_path, 'w', encoding='utf-8', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(header)
    writer.writerows(rows)

os.replace(temp_path, file_path)
print(f"Successfully updated {count} links.")
