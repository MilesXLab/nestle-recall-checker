import csv
from collections import Counter

with open('recall_database_v3.csv', 'r', encoding='utf-8-sig') as f:
    reader = csv.DictReader(f)
    rows = list(reader)
    
    countries = Counter(row['country'] for row in rows)
    
    print("="*70)
    print("FINAL VERIFIED DATABASE - v4.1.0")
    print("="*70)
    print(f"\nTotal batches: {len(rows)}")
    print(f"\nBy Country/Region:")
    for country, count in sorted(countries.items(), key=lambda x: -x[1]):
        print(f"  {country}: {count}")
    
    # Check for speculative entries
    speculative = [r for r in rows if r.get('isSeries', 'False').strip() == 'True']
    print(f"\nSpeculative entries (isSeries=True): {len(speculative)}")
    
    # Key batches check
    key_batches = [
        "51570742F3", "52099722BB", "52739722BA",  # UK missing
        "51510346AC", "51370346AA",  # Egypt
        "53030017C1", "51420017C4",  # Brunei
        "52340017C3",  # Singapore
        "52070742F4", "52970742F1"  # Hong Kong
    ]
    
    found_keys = [code for code in key_batches if any(r['code'] == code for r in rows)]
    print(f"\nKey ChatGPT batches found: {len(found_keys)}/{len(key_batches)}")
    
    print(f"\n{'='*70}")
    print(f"STATUS: {'READY FOR DEPLOYMENT' if len(speculative) == 0 and len(found_keys) >= 8 else 'NEEDS REVIEW'}")
    print(f"{'='*70}")
