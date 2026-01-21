import csv
from collections import Counter

with open('recall_database_v4_final.csv', 'r', encoding='utf-8-sig') as f:
    reader = csv.DictReader(f)
    rows = list(reader)
    
    countries = Counter(row['country'] for row in rows)
    
    print("="*60)
    print("FINAL DATABASE STATISTICS")
    print("="*60)
    print(f"\nTotal batches: {len(rows)}")
    print(f"\nBy Country/Region:")
    for country, count in sorted(countries.items(), key=lambda x: -x[1]):
        print(f"  {country}: {count}")
    
    # Check Hong Kong specifically
    hk_batches = [r for r in rows if 'Hong Kong' in r['country']]
    cb_batches = [r for r in rows if 'Cross-border' in r['country']]
    
    print(f"\nHong Kong batches: {len(hk_batches)}")
    if hk_batches:
        for b in hk_batches[:5]:
            print(f"   - {b['code']}: {b['product']}")
    
    print(f"\nChina (Cross-border) batches: {len(cb_batches)}")
    if cb_batches:
        for b in cb_batches[:5]:
            print(f"   - {b['code']}: {b['product']}")
    
    print(f"\n{'='*60}")
    print(f"TOTAL VERIFIED BATCHES: {len(rows)}")
    print(f"{'='*60}")
