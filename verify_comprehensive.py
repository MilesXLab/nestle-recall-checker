#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Comprehensive Data Verification Script
Cross-reference with ChatGPT and Grok sources
"""

import csv
from collections import defaultdict, Counter

# Official batch codes from ChatGPT's verified sources
CHATGPT_VERIFIED_BATCHES = {
    # UK FSA - SMA Advanced First Infant Milk 800g
    "51450742F1": {"source": "UK FSA", "product": "SMA Advanced First 800g", "country": "UK"},
    "52319722BA": {"source": "UK FSA", "product": "SMA Advanced First 800g", "country": "UK"},
    "52819722AA": {"source": "UK FSA", "product": "SMA Advanced First 800g", "country": "UK"},
    
    # UK FSA - SMA Advanced Follow-On Milk 800g
    "52879722AA": {"source": "UK FSA", "product": "SMA Follow-on 800g", "country": "UK"},
    "51240742F2": {"source": "UK FSA", "product": "SMA Follow-on 800g", "country": "UK"},
    "51890742F2": {"source": "UK FSA", "product": "SMA Follow-on 800g", "country": "UK"},
    
    # UK FSA - SMA Anti Reflux 800g
    "52099722BA": {"source": "UK FSA", "product": "SMA Anti Reflux 800g", "country": "UK"},
    "51570742F3": {"source": "UK FSA", "product": "SMA Anti Reflux 800g", "country": "UK"},
    "52099722BB": {"source": "UK FSA", "product": "SMA Anti Reflux 800g", "country": "UK"},
    "52739722BA": {"source": "UK FSA", "product": "SMA Anti Reflux 800g", "country": "UK"},
    
    # UK FSA - Alfamino 400g
    "51200017Y3": {"source": "UK FSA", "product": "SMA Alfamino 400g", "country": "UK"},
    "51210017Y1": {"source": "UK FSA", "product": "SMA Alfamino 400g", "country": "UK"},
    "51220017Y1": {"source": "UK FSA", "product": "SMA Alfamino 400g", "country": "UK"},
    "51250017Y1": {"source": "UK FSA", "product": "SMA Alfamino 400g", "country": "UK"},
    "51390017Y1": {"source": "UK FSA", "product": "SMA Alfamino 400g", "country": "UK"},
    "51420017Y2": {"source": "UK FSA", "product": "SMA Alfamino 400g", "country": "UK"},
    "51430017Y1": {"source": "UK FSA", "product": "SMA Alfamino 400g", "country": "UK"},
    "51460017Y1": {"source": "UK FSA", "product": "SMA Alfamino 400g", "country": "UK"},
    "51690017Y2": {"source": "UK FSA", "product": "SMA Alfamino 400g", "country": "UK"},
    "51690017Y3": {"source": "UK FSA", "product": "SMA Alfamino 400g", "country": "UK"},
    "51700017Y1": {"source": "UK FSA", "product": "SMA Alfamino 400g", "country": "UK"},
    "51710017Y1": {"source": "UK FSA", "product": "SMA Alfamino 400g", "country": "UK"},
    "51740017Y1": {"source": "UK FSA", "product": "SMA Alfamino 400g", "country": "UK"},
    "52760017Y5": {"source": "UK FSA", "product": "SMA Alfamino 400g", "country": "UK"},
    "52790017Y1": {"source": "UK FSA", "product": "SMA Alfamino 400g", "country": "UK"},
    "52860017Y1": {"source": "UK FSA", "product": "SMA Alfamino 400g", "country": "UK"},
    "53100017Y3": {"source": "UK FSA", "product": "SMA Alfamino 400g", "country": "UK"},
    "53110017Y1": {"source": "UK FSA", "product": "SMA Alfamino 400g", "country": "UK"},
    "53140017Y1": {"source": "UK FSA", "product": "SMA Alfamino 400g", "country": "UK"},
    "53140017Y2": {"source": "UK FSA", "product": "SMA Alfamino 400g", "country": "UK"},
    "53150017Y1": {"source": "UK FSA", "product": "SMA Alfamino 400g", "country": "UK"},
    
    # Egypt - NAN series
    "51510346AC": {"source": "Egypt NFSA", "product": "NAN Comfort 1", "country": "Egypt"},
    "51370346AA": {"source": "Egypt NFSA", "product": "NAN OptiPro 1", "country": "Egypt"},
    "52650346AA": {"source": "Egypt NFSA", "product": "NAN OptiPro 1", "country": "Egypt"},
    "51460346AB": {"source": "Egypt NFSA", "product": "NAN OptiPro 1", "country": "Egypt"},
    "51460346AA": {"source": "Egypt NFSA", "product": "NAN OptiPro 1", "country": "Egypt"},
    
    # Australia/NZ - Alfamino
    "51070017Y2": {"source": "FSANZ", "product": "Alfamino 400g", "country": "Australia/NZ"},
    "51080017Y1": {"source": "FSANZ", "product": "Alfamino 400g", "country": "Australia/NZ"},
    "51480017Y3": {"source": "FSANZ", "product": "Alfamino 400g", "country": "Australia/NZ"},
    "51490017Y1": {"source": "FSANZ", "product": "Alfamino 400g", "country": "Australia/NZ"},
    "52030017Y1": {"source": "FSANZ", "product": "Alfamino 400g", "country": "Australia/NZ"},
    
    # Brunei - NAN HA SupremePro
    "53030017C1": {"source": "Brunei FSA", "product": "NAN HA 3 SupremePro 800g", "country": "Brunei"},
    "51420017C4": {"source": "Brunei FSA", "product": "NAN HA 2 SupremePro 800g", "country": "Brunei"},
    "51460017C2": {"source": "Brunei FSA", "product": "NAN HA 1 SupremePro 800g", "country": "Brunei"},
    "51470017C1": {"source": "Brunei FSA", "product": "NAN HA 1 SupremePro 800g", "country": "Brunei"},
    "53030017B1": {"source": "Brunei FSA", "product": "NAN HA 3 SupremePro 32g", "country": "Brunei"},
    
    # Singapore
    "52340017C3": {"source": "Singapore SFA", "product": "NAN HA 1 SupremePro 800g", "country": "Singapore"},
    
    # Hong Kong (from official CFS PDF - key batches)
    "52070742F4": {"source": "HK CFS", "product": "NAN PRO3 BL 2 HMO 800g", "country": "Hong Kong"},
    "52970742F1": {"source": "HK CFS", "product": "NAN INFINIPRO1 7HMO 800g", "country": "Hong Kong"},
    "52970742C1": {"source": "HK CFS", "product": "NAN INFINIPRO1 7HMO 350g", "country": "Hong Kong"},
}

def main():
    # Read our database
    with open('recall_database_v4_final.csv', 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        our_batches = list(reader)
    
    our_codes = {row['code']: row for row in our_batches}
    
    print("=" * 80)
    print("COMPREHENSIVE DATA VERIFICATION")
    print("Cross-reference with ChatGPT + Grok Sources")
    print("=" * 80)
    
    # Statistics
    stats = defaultdict(int)
    country_counts = Counter(row['country'] for row in our_batches)
    
    print(f"\n📊 OUR DATABASE:")
    print(f"   Total batches: {len(our_batches)}")
    print(f"\n   By Country/Region:")
    for country, count in sorted(country_counts.items(), key=lambda x: -x[1]):
        print(f"      {country}: {count}")
    
    # Check ChatGPT verified batches
    print(f"\n🔍 CHATGPT VERIFICATION ({len(CHATGPT_VERIFIED_BATCHES)} key batches):")
    found = 0
    missing = []
    
    for code, info in CHATGPT_VERIFIED_BATCHES.items():
        if code in our_codes:
            found += 1
            stats['chatgpt_found'] += 1
        else:
            missing.append(f"{code} ({info['product']}, {info['country']})")
            stats['chatgpt_missing'] += 1
    
    print(f"   ✅ Found in our database: {found}/{len(CHATGPT_VERIFIED_BATCHES)}")
    
    if missing:
        print(f"   ❌ Missing from our database: {len(missing)}")
        print(f"\n   Missing batches (first 10):")
        for m in missing[:10]:
            print(f"      - {m}")
    
    # Check for speculative entries (isSeries=True)
    speculative = [row for row in our_batches if row.get('isSeries', 'False').strip() == 'True']
    print(f"\n⚠️  SPECULATIVE ENTRIES CHECK:")
    print(f"   Entries with isSeries=True: {len(speculative)}")
    if speculative:
        print(f"   WARNING: Found speculative entries that should be removed!")
        for s in speculative[:5]:
            print(f"      - {s['code']}: {s['product']}")
    else:
        print(f"   ✅ No speculative entries found")
    
    # Check Hong Kong / Cross-border
    hk_batches = [r for r in our_batches if 'Hong Kong' in r.get('country', '')]
    cb_batches = [r for r in our_batches if 'Cross-border' in r.get('country', '')]
    
    print(f"\n🇭🇰 HONG KONG / CROSS-BORDER CHECK:")
    print(f"   Hong Kong batches: {len(hk_batches)}")
    print(f"   China (Cross-border) batches: {len(cb_batches)}")
    print(f"   Total HK+CB: {len(hk_batches) + len(cb_batches)}")
    print(f"   Expected (from ChatGPT): ~21 HK batches + 41 Cross-border")
    
    # Sample batches
    if cb_batches:
        print(f"\n   Sample Cross-border batches:")
        for b in cb_batches[:5]:
            print(f"      - {b['code']}: {b['product']}")
    
    # Final recommendation
    print(f"\n{'=' * 80}")
    print(f"FINAL ASSESSMENT:")
    print(f"{'=' * 80}")
    
    coverage = (found / len(CHATGPT_VERIFIED_BATCHES)) * 100
    print(f"   Coverage of ChatGPT verified batches: {coverage:.1f}%")
    print(f"   Total database size: {len(our_batches)} batches")
    print(f"   Speculative entries: {len(speculative)}")
    
    if coverage >= 90 and len(speculative) == 0:
        print(f"\n   ✅ STATUS: READY FOR DEPLOYMENT")
        print(f"   Database quality is HIGH")
    elif coverage >= 70:
        print(f"\n   ⚠️  STATUS: ACCEPTABLE BUT NEEDS REVIEW")
        print(f"   Consider adding missing batches")
    else:
        print(f"\n   ❌ STATUS: NEEDS IMPROVEMENT")
        print(f"   Missing too many verified batches")
    
    print(f"{'=' * 80}")
    
    # Save detailed report
    with open('verification_report.txt', 'w', encoding='utf-8') as f:
        f.write(f"Total batches in database: {len(our_batches)}\n")
        f.write(f"ChatGPT verified batches found: {found}/{len(CHATGPT_VERIFIED_BATCHES)}\n")
        f.write(f"Coverage: {coverage:.1f}%\n")
        f.write(f"\nMissing batches:\n")
        for m in missing:
            f.write(f"  {m}\n")
    
    print(f"\n📄 Detailed report saved to: verification_report.txt")

if __name__ == '__main__':
    main()
