import csv
import os

data = [
    ["19-11-2026", "Aptamil", "Aptamil Pronutra Pre 1.2kg", "1.2kg", "Austria", "Vorsorglicher Rückruf: Mögliches Vorhandensein des Toxins Cereulid", "AGES / Danone AT", "https://www.vol.at/", "False", "Danone"],
    ["10-11-2026", "Aptamil", "Aptamil Pronutra 1 DE 800g", "800g", "Austria", "Vorsorglicher Rückruf: Mögliches Vorhandensein des Toxins Cereulid", "AGES / Danone AT", "https://www.vol.at/", "False", "Danone"],
    ["20-04-2027", "Aptamil", "Aptamil Profutura Pre D 800g", "800g", "Austria", "Vorsorglicher Rückruf: Mögliches Vorhandensein des Toxins Cereulid", "AGES / Danone AT", "https://www.vol.at/", "False", "Danone"],
    ["30-04-2027", "Aptamil", "Aptamil Profutura Pre D 800g", "800g", "Austria", "Vorsorglicher Rückruf: Mögliches Vorhandensein des Toxins Cereulid", "AGES / Danone AT", "https://www.vol.at/", "False", "Danone"]
]

file_path = '/Users/miles/Projects/personal/nestle-recall-checker/recall_database.csv'

with open(file_path, 'a', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    for row in data:
        writer.writerow(row)

print("Added 4 more Danone batches.")
