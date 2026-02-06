import csv
import os

data = [
    ["53390346AB", "SMA", "SMA First Infant Milk 800g", "800g", "Ireland", "Precautionary recall: Possible presence of Cereulide toxin (Bacillus cereus)", "FSAI Ireland", "https://www.fsai.ie/news-alerts/food-alerts/recall-of-certain-batches-of-nestle-sma-infant-and", "False", "Nestlé"],
    ["31-10-2026", "Aptamil", "Aptamil First Infant Formula 800g", "800g", "UK", "Precautionary recall: Possible presence of Cereulide toxin (Bacillus cereus)", "UK FSA", "https://www.food.gov.uk/news-alerts/alert/fsa-prin-03-2026", "False", "Danone"],
    ["10.06.2026", "Milumil", "Milumil Pre 800g", "800g", "Austria", "Vorsorglicher Rückruf: Mögliches Vorhandensein des Toxins Cereulid", "AGES / Produktwarnung.at", "https://www.produktwarnung.eu/", "False", "Danone"],
    ["07.07.2026", "Milumil", "Milumil Pre 800g", "800g", "Austria", "Vorsorglicher Rückruf: Mögliches Vorhandensein des Toxins Cereulid", "AGES / Produktwarnung.at", "https://www.produktwarnung.eu/", "False", "Danone"],
    ["24.07.2026", "Milumil", "Milumil Pre 800g", "800g", "Austria", "Vorsorglicher Rückruf: Mögliches Vorhandensein des Toxins Cereulid", "AGES / Produktwarnung.at", "https://www.produktwarnung.eu/", "False", "Danone"],
    ["18.08.2026", "Milumil", "Milumil Pre 800g", "800g", "Austria", "Vorsorglicher Rückruf: Mögliches Vorhandensein des Toxins Cereulid", "AGES / Produktwarnung.at", "https://www.produktwarnung.eu/", "False", "Danone"],
    ["27.09.2026", "Milumil", "Milumil Pre 800g", "800g", "Austria", "Vorsorglicher Rückruf: Mögliches Vorhandensein des Toxins Cereulid", "AGES / Produktwarnung.at", "https://www.produktwarnung.eu/", "False", "Danone"],
    ["09.11.2026", "Milumil", "Milumil Pre 800g", "800g", "Austria", "Vorsorglicher Rückruf: Mögliches Vorhandensein des Toxins Cereulid", "AGES / Produktwarnung.at", "https://www.produktwarnung.eu/", "False", "Danone"],
    ["22.11.2026", "Milumil", "Milumil Pre 800g", "800g", "Austria", "Vorsorglicher Rückruf: Mögliches Vorhandensein des Toxins Cereulid", "AGES / Produktwarnung.at", "https://www.produktwarnung.eu/", "False", "Danone"],
    ["11.12.2026", "Milumil", "Milumil Pre 800g", "800g", "Austria", "Vorsorglicher Rückruf: Mögliches Vorhandensein des Toxins Cereulid", "AGES / Produktwarnung.at", "https://www.produktwarnung.eu/", "False", "Danone"],
    ["20.09.2026", "Milumil", "Milumil 1 800g", "800g", "Austria", "Vorsorglicher Rückruf: Mögliches Vorhandensein des Toxins Cereulid", "AGES / Produktwarnung.at", "https://www.produktwarnung.eu/", "False", "Danone"],
    ["29.10.2026", "Milumil", "Milumil 1 800g", "800g", "Austria", "Vorsorglicher Rückruf: Mögliches Vorhandensein des Toxins Cereulid", "AGES / Produktwarnung.at", "https://www.produktwarnung.eu/", "False", "Danone"],
    ["04.02.2027", "Milumil", "Milumil 1 800g", "800g", "Austria", "Vorsorglicher Rückruf: Mögliches Vorhandensein des Toxins Cereulid", "AGES / Produktwarnung.at", "https://www.produktwarnung.eu/", "False", "Danone"],
    ["05.07.2026", "Aptamil", "Aptamil Pronutra Pre 800g", "800g", "Austria", "Vorsorglicher Rückruf: Mögliches Vorhandensein des Toxins Cereulid", "AGES / Foodwatch.at", "https://www.foodwatch.org/de/oesterreich/", "False", "Danone"],
    ["09.07.2026", "Aptamil", "Aptamil Pronutra Pre 800g", "800g", "Austria", "Vorsorglicher Rückruf: Mögliches Vorhandensein des Toxins Cereulid", "AGES / Foodwatch.at", "https://www.foodwatch.org/de/oesterreich/", "False", "Danone"],
    ["13.07.2026", "Aptamil", "Aptamil Pronutra Pre 800g", "800g", "Austria", "Vorsorglicher Rückruf: Mögliches Vorhandensein des Toxins Cereulid", "AGES / Foodwatch.at", "https://www.foodwatch.org/de/oesterreich/", "False", "Danone"],
    ["04.12.2026", "Aptamil", "Aptamil Pronutra Pre 800g", "800g", "Austria", "Vorsorglicher Rückruf: Mögliches Vorhandensein des Toxins Cereulid", "AGES / Foodwatch.at", "https://www.foodwatch.org/de/oesterreich/", "False", "Danone"]
]

file_path = '/Users/miles/Projects/personal/nestle-recall-checker/recall_database.csv'

with open(file_path, 'a', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    for row in data:
        writer.writerow(row)

print("Successfully added 17 new batches.")
