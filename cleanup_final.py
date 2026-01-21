#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Final Data Cleanup - ONLY remove isSeries=True entries
Keep ALL specific batch codes including China Cross-border and Hong Kong
"""

import csv
from collections import defaultdict

def main():
    input_file = 'recall_database_v3.csv'
    output_file = 'recall_database_v4_final.csv'
    
    real_batches = []
    removed_batches = []
    stats = defaultdict(int)
    
    with open(input_file, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        
        for row in reader:
            is_series = row.get('isSeries', 'False').strip()
            
            # ONLY remove if explicitly marked as series
            if is_series == 'True':
                removed_batches.append(row)
                stats['removed'] += 1
                product = row.get('product', 'unknown')
                stats[f'removed_{product}'] += 1
            else:
                real_batches.append(row)
                stats['kept'] += 1
                country = row.get('country', 'Unknown')
                stats[f'country_{country}'] += 1
    
    # Write cleaned data
    if real_batches:
        fieldnames = list(real_batches[0].keys())
        with open(output_file, 'w', encoding='utf-8', newline='') as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(real_batches)
    
    # Report
    print("=" * 80)
    print("FINAL DATA CLEANUP - isSeries=True ONLY")
    print("=" * 80)
    print(f"\n📊 Summary:")
    print(f"   Original entries: {stats['kept'] + stats['removed']}")
    print(f"   ✅ Kept (all specific batches): {stats['kept']}")
    print(f"   ❌ Removed (isSeries=True only): {stats['removed']}")
    
    print(f"\n🗑️  Removed:")
    print(f"   - Global Series Alert: {stats.get('removed_Global Series Alert', 0)}")
    print(f"   - Production Series: {stats.get('removed_Production Series', 0)}")
    
    print(f"\n✅ Verified batches by country:")
    for key, value in sorted(stats.items()):
        if key.startswith('country_') and value > 0:
            country = key.replace('country_', '')
            print(f"   - {country}: {value}")
    
    print(f"\n📁 Output: {output_file}")
    print(f"🎯 Total verified batches: {stats['kept']}")
    print("=" * 80)

if __name__ == '__main__':
    main()
