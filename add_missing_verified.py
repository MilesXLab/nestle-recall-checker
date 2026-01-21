#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Add ALL missing verified batches from ChatGPT sources
"""

import csv

# All missing batches identified from verification
MISSING_BATCHES_TO_ADD = [
    # UK FSA - SMA Anti Reflux (missing 3)
    {"code": "51570742F3", "subBrand": "SMA", "product": "SMA Anti Reflux 800g", "specification": "800g",
     "country": "United Kingdom", "reason": "Precautionary recall: Possible presence of Cereulide toxin (Bacillus cereus)",
     "sourceDisplay": "UK Food Standards Agency (FSA)", "docUrl": "https://www.food.gov.uk/news-alerts/alert/fsa-prin-02-2026", "isSeries": "False"},
    
    {"code": "52099722BB", "subBrand": "SMA", "product": "SMA Anti Reflux 800g", "specification": "800g",
     "country": "United Kingdom", "reason": "Precautionary recall: Possible presence of Cereulide toxin (Bacillus cereus)",
     "sourceDisplay": "UK Food Standards Agency (FSA)", "docUrl": "https://www.food.gov.uk/news-alerts/alert/fsa-prin-02-2026", "isSeries": "False"},
    
    {"code": "52739722BA", "subBrand": "SMA", "product": "SMA Anti Reflux 800g", "specification": "800g",
     "country": "United Kingdom", "reason": "Precautionary recall: Possible presence of Cereulide toxin (Bacillus cereus)",
     "sourceDisplay": "UK Food Standards Agency (FSA)", "docUrl": "https://www.food.gov.uk/news-alerts/alert/fsa-prin-02-2026", "isSeries": "False"},
    
    # UK FSA - Alfamino (missing 1)
    {"code": "53140017Y2", "subBrand": "SMA", "product": "SMA Alfamino 400g", "specification": "400g",
     "country": "United Kingdom", "reason": "Precautionary recall: Possible presence of Cereulide toxin (Bacillus cereus)",
     "sourceDisplay": "UK Food Standards Agency (FSA)", "docUrl": "https://www.food.gov.uk/news-alerts/alert/fsa-prin-02-2026", "isSeries": "False"},
    
    # Egypt - NAN series (missing 5)
    {"code": "51510346AC", "subBrand": "NAN", "product": "NAN Comfort 1 400g", "specification": "400g",
     "country": "Egypt", "reason": "Precautionary recall: Cereulide toxin risk",
     "sourceDisplay": "Egypt National Food Safety Authority", "docUrl": "https://english.ahram.org.eg/News/560085.aspx", "isSeries": "False"},
    
    {"code": "51370346AA", "subBrand": "NAN", "product": "NAN OptiPro 1 400g", "specification": "400g",
     "country": "Egypt", "reason": "Precautionary recall: Cereulide toxin risk",
     "sourceDisplay": "Egypt National Food Safety Authority", "docUrl": "https://english.ahram.org.eg/News/560085.aspx", "isSeries": "False"},
    
    {"code": "52650346AA", "subBrand": "NAN", "product": "NAN OptiPro 1 400g", "specification": "400g",
     "country": "Egypt", "reason": "Precautionary recall: Cereulide toxin risk",
     "sourceDisplay": "Egypt National Food Safety Authority", "docUrl": "https://english.ahram.org.eg/News/560085.aspx", "isSeries": "False"},
    
    {"code": "51460346AB", "subBrand": "NAN", "product": "NAN OptiPro 1 400g", "specification": "400g",
     "country": "Egypt", "reason": "Precautionary recall: Cereulide toxin risk",
     "sourceDisplay": "Egypt National Food Safety Authority", "docUrl": "https://english.ahram.org.eg/News/560085.aspx", "isSeries": "False"},
    
    {"code": "51460346AA", "subBrand": "NAN", "product": "NAN OptiPro 1 400g", "specification": "400g",
     "country": "Egypt", "reason": "Precautionary recall: Cereulide toxin risk",
     "sourceDisplay": "Egypt National Food Safety Authority", "docUrl": "https://english.ahram.org.eg/News/560085.aspx", "isSeries": "False"},
    
    # Brunei - NAN HA SupremePro (missing 5)
    {"code": "53030017C1", "subBrand": "NAN", "product": "NAN HA 3 SupremePro 800g", "specification": "800g",
     "country": "Brunei", "reason": "Precautionary recall: Cereulide toxin risk",
     "sourceDisplay": "Brunei Food Safety Authority", "docUrl": "https://asianews.network/brunei-issues-advisory-on-recall-of-five-nestle-nan-infant-formula-products/", "isSeries": "False"},
    
    {"code": "51420017C4", "subBrand": "NAN", "product": "NAN HA 2 SupremePro 800g", "specification": "800g",
     "country": "Brunei", "reason": "Precautionary recall: Cereulide toxin risk",
     "sourceDisplay": "Brunei Food Safety Authority", "docUrl": "https://asianews.network/brunei-issues-advisory-on-recall-of-five-nestle-nan-infant-formula-products/", "isSeries": "False"},
    
    {"code": "51460017C2", "subBrand": "NAN", "product": "NAN HA 1 SupremePro 800g", "specification": "800g",
     "country": "Brunei", "reason": "Precautionary recall: Cereulide toxin risk",
     "sourceDisplay": "Brunei Food Safety Authority", "docUrl": "https://asianews.network/brunei-issues-advisory-on-recall-of-five-nestle-nan-infant-formula-products/", "isSeries": "False"},
    
    {"code": "51470017C1", "subBrand": "NAN", "product": "NAN HA 1 SupremePro 800g", "specification": "800g",
     "country": "Brunei", "reason": "Precautionary recall: Cereulide toxin risk",
     "sourceDisplay": "Brunei Food Safety Authority", "docUrl": "https://asianews.network/brunei-issues-advisory-on-recall-of-five-nestle-nan-infant-formula-products/", "isSeries": "False"},
    
    {"code": "53030017B1", "subBrand": "NAN", "product": "NAN HA 3 SupremePro 32g", "specification": "32g",
     "country": "Brunei", "reason": "Precautionary recall: Cereulide toxin risk",
     "sourceDisplay": "Brunei Food Safety Authority", "docUrl": "https://asianews.network/brunei-issues-advisory-on-recall-of-five-nestle-nan-infant-formula-products/", "isSeries": "False"},
    
    # Singapore (missing 1)
    {"code": "52340017C3", "subBrand": "NAN", "product": "NAN HA 1 SupremePro 800g", "specification": "800g",
     "country": "Singapore", "reason": "Precautionary recall: Cereulide toxin risk",
     "sourceDisplay": "Singapore Food Agency (SFA)", "docUrl": "https://e.vnexpress.net/news/news/singapore-recalls-nestle-dumex-infant-formula-over-suspected-toxin-contamination-5007342.html", "isSeries": "False"},
]

def main():
    input_file = 'recall_database_v4_final.csv'
    output_file = 'recall_database_v4_complete.csv'
    
    # Read existing data
    with open(input_file, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        existing_batches = list(reader)
    
    existing_codes = {row['code'] for row in existing_batches}
    
    # Add missing batches
    added = 0
    for batch in MISSING_BATCHES_TO_ADD:
        if batch['code'] not in existing_codes:
            existing_batches.append(batch)
            added += 1
            print(f"✅ Added: {batch['code']} - {batch['product']} ({batch['country']})")
        else:
            print(f"⏭️  Already exists: {batch['code']}")
    
    # Write complete data
    if existing_batches:
        fieldnames = list(existing_batches[0].keys())
        with open(output_file, 'w', encoding='utf-8', newline='') as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(existing_batches)
    
    print(f"\n{'='*60}")
    print(f"COMPLETION SUMMARY:")
    print(f"{'='*60}")
    print(f"Original batches: {len(existing_codes)}")
    print(f"Added batches: {added}")
    print(f"Total batches: {len(existing_batches)}")
    print(f"\nOutput file: {output_file}")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()
