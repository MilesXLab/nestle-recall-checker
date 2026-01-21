#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Add Missing Official Batches from ChatGPT/Grok Verification
Based on official government sources
"""

import csv

# Missing batches from ChatGPT's comprehensive list
MISSING_BATCHES = [
    # UK FSA - SMA Advanced First Infant Milk 800g
    {"code": "52819722AA", "subBrand": "SMA", "product": "SMA Advanced First 800g", "specification": "800g", 
     "country": "United Kingdom", "reason": "Precautionary recall: Possible presence of Cereulide toxin (Bacillus cereus)",
     "sourceDisplay": "UK Food Standards Agency (FSA)", "docUrl": "https://www.food.gov.uk/news-alerts/alert/fsa-prin-02-2026", "isSeries": "False"},
    
    # UK FSA - SMA Advanced Follow-On Milk 800g
    {"code": "52879722AA", "subBrand": "SMA", "product": "SMA Follow-on 800g", "specification": "800g",
     "country": "United Kingdom", "reason": "Precautionary recall: Possible presence of Cereulide toxin (Bacillus cereus)",
     "sourceDisplay": "UK Food Standards Agency (FSA)", "docUrl": "https://www.food.gov.uk/news-alerts/alert/fsa-prin-02-2026", "isSeries": "False"},
    
    # UK FSA - SMA Anti Reflux 800g
    {"code": "51570742F3", "subBrand": "SMA", "product": "SMA Anti Reflux 800g", "specification": "800g",
     "country": "United Kingdom", "reason": "Precautionary recall: Possible presence of Cereulide toxin (Bacillus cereus)",
     "sourceDisplay": "UK Food Standards Agency (FSA)", "docUrl": "https://www.food.gov.uk/news-alerts/alert/fsa-prin-02-2026", "isSeries": "False"},
    
    {"code": "52099722BB", "subBrand": "SMA", "product": "SMA Anti Reflux 800g", "specification": "800g",
     "country": "United Kingdom", "reason": "Precautionary recall: Possible presence of Cereulide toxin (Bacillus cereus)",
     "sourceDisplay": "UK Food Standards Agency (FSA)", "docUrl": "https://www.food.gov.uk/news-alerts/alert/fsa-prin-02-2026", "isSeries": "False"},
    
    {"code": "52739722BA", "subBrand": "SMA", "product": "SMA Anti Reflux 800g", "specification": "800g",
     "country": "United Kingdom", "reason": "Precautionary recall: Possible presence of Cereulide toxin (Bacillus cereus)",
     "sourceDisplay": "UK Food Standards Agency (FSA)", "docUrl": "https://www.food.gov.uk/news-alerts/alert/fsa-prin-02-2026", "isSeries": "False"},
    
    # UK FSA - Alfamino 400g (additional batches)
    {"code": "52760017Y5", "subBrand": "SMA", "product": "SMA Alfamino 400g", "specification": "400g",
     "country": "United Kingdom", "reason": "Precautionary recall: Possible presence of Cereulide toxin (Bacillus cereus)",
     "sourceDisplay": "UK Food Standards Agency (FSA)", "docUrl": "https://www.food.gov.uk/news-alerts/alert/fsa-prin-02-2026", "isSeries": "False"},
    
    {"code": "52790017Y1", "subBrand": "SMA", "product": "SMA Alfamino 400g", "specification": "400g",
     "country": "United Kingdom", "reason": "Precautionary recall: Possible presence of Cereulide toxin (Bacillus cereus)",
     "sourceDisplay": "UK Food Standards Agency (FSA)", "docUrl": "https://www.food.gov.uk/news-alerts/alert/fsa-prin-02-2026", "isSeries": "False"},
    
    {"code": "52860017Y1", "subBrand": "SMA", "product": "SMA Alfamino 400g", "specification": "400g",
     "country": "United Kingdom", "reason": "Precautionary recall: Possible presence of Cereulide toxin (Bacillus cereus)",
     "sourceDisplay": "UK Food Standards Agency (FSA)", "docUrl": "https://www.food.gov.uk/news-alerts/alert/fsa-prin-02-2026", "isSeries": "False"},
    
    {"code": "53100017Y3", "subBrand": "SMA", "product": "SMA Alfamino 400g", "specification": "400g",
     "country": "United Kingdom", "reason": "Precautionary recall: Possible presence of Cereulide toxin (Bacillus cereus)",
     "sourceDisplay": "UK Food Standards Agency (FSA)", "docUrl": "https://www.food.gov.uk/news-alerts/alert/fsa-prin-02-2026", "isSeries": "False"},
    
    {"code": "53110017Y1", "subBrand": "SMA", "product": "SMA Alfamino 400g", "specification": "400g",
     "country": "United Kingdom", "reason": "Precautionary recall: Possible presence of Cereulide toxin (Bacillus cereus)",
     "sourceDisplay": "UK Food Standards Agency (FSA)", "docUrl": "https://www.food.gov.uk/news-alerts/alert/fsa-prin-02-2026", "isSeries": "False"},
    
    {"code": "53140017Y1", "subBrand": "SMA", "product": "SMA Alfamino 400g", "specification": "400g",
     "country": "United Kingdom", "reason": "Precautionary recall: Possible presence of Cereulide toxin (Bacillus cereus)",
     "sourceDisplay": "UK Food Standards Agency (FSA)", "docUrl": "https://www.food.gov.uk/news-alerts/alert/fsa-prin-02-2026", "isSeries": "False"},
    
    {"code": "53140017Y2", "subBrand": "SMA", "product": "SMA Alfamino 400g", "specification": "400g",
     "country": "United Kingdom", "reason": "Precautionary recall: Possible presence of Cereulide toxin (Bacillus cereus)",
     "sourceDisplay": "UK Food Standards Agency (FSA)", "docUrl": "https://www.food.gov.uk/news-alerts/alert/fsa-prin-02-2026", "isSeries": "False"},
    
    {"code": "53150017Y1", "subBrand": "SMA", "product": "SMA Alfamino 400g", "specification": "400g",
     "country": "United Kingdom", "reason": "Precautionary recall: Possible presence of Cereulide toxin (Bacillus cereus)",
     "sourceDisplay": "UK Food Standards Agency (FSA)", "docUrl": "https://www.food.gov.uk/news-alerts/alert/fsa-prin-02-2026", "isSeries": "False"},
    
    # Egypt - NAN series
    {"code": "51510346AC", "subBrand": "NAN", "product": "NAN Comfort 1", "specification": "400g",
     "country": "Egypt", "reason": "Precautionary recall: Cereulide toxin risk",
     "sourceDisplay": "Egypt National Food Safety Authority", "docUrl": "https://english.ahram.org.eg/News/560085.aspx", "isSeries": "False"},
    
    {"code": "51370346AA", "subBrand": "NAN", "product": "NAN OptiPro 1", "specification": "400g",
     "country": "Egypt", "reason": "Precautionary recall: Cereulide toxin risk",
     "sourceDisplay": "Egypt National Food Safety Authority", "docUrl": "https://english.ahram.org.eg/News/560085.aspx", "isSeries": "False"},
    
    {"code": "52650346AA", "subBrand": "NAN", "product": "NAN OptiPro 1", "specification": "400g",
     "country": "Egypt", "reason": "Precautionary recall: Cereulide toxin risk",
     "sourceDisplay": "Egypt National Food Safety Authority", "docUrl": "https://english.ahram.org.eg/News/560085.aspx", "isSeries": "False"},
    
    {"code": "51460346AB", "subBrand": "NAN", "product": "NAN OptiPro 1", "specification": "400g",
     "country": "Egypt", "reason": "Precautionary recall: Cereulide toxin risk",
     "sourceDisplay": "Egypt National Food Safety Authority", "docUrl": "https://english.ahram.org.eg/News/560085.aspx", "isSeries": "False"},
    
    {"code": "51460346AA", "subBrand": "NAN", "product": "NAN OptiPro 1", "specification": "400g",
     "country": "Egypt", "reason": "Precautionary recall: Cereulide toxin risk",
     "sourceDisplay": "Egypt National Food Safety Authority", "docUrl": "https://english.ahram.org.eg/News/560085.aspx", "isSeries": "False"},
    
    # Brunei - NAN HA SupremePro
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
    
    # Singapore
    {"code": "52340017C3", "subBrand": "NAN", "product": "NAN HA 1 SupremePro 800g", "specification": "800g",
     "country": "Singapore", "reason": "Precautionary recall: Cereulide toxin risk",
     "sourceDisplay": "Singapore Food Agency (SFA)", "docUrl": "https://e.vnexpress.net/news/news/singapore-recalls-nestle-dumex-infant-formula-over-suspected-toxin-contamination-5007342.html", "isSeries": "False"},
    
    # Hong Kong - Key batches from official PDF
    {"code": "52970742F1", "subBrand": "NAN", "product": "NAN INFINIPRO1 7HMO 800g", "specification": "800g",
     "country": "Hong Kong", "reason": "Precautionary recall: Possible presence of Cereulide Produced by Bacillus Cereus",
     "sourceDisplay": "HK Centre for Food Safety (CFS)", "docUrl": "https://www.cfs.gov.hk/english/press/20260110_12105.html", "isSeries": "False"},
    
    {"code": "52970742C1", "subBrand": "NAN", "product": "NAN INFINIPRO1 7HMO 350g", "specification": "350g",
     "country": "Hong Kong", "reason": "Precautionary recall: Possible presence of Cereulide Produced by Bacillus Cereus",
     "sourceDisplay": "HK Centre for Food Safety (CFS)", "docUrl": "https://www.cfs.gov.hk/english/press/20260110_12105.html", "isSeries": "False"},
]

def main():
    input_file = 'recall_database_v4_verified.csv'
    output_file = 'recall_database_v4_verified.csv'
    
    # Read existing data
    existing_batches = []
    with open(input_file, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        existing_batches = list(reader)
    
    # Get existing batch codes
    existing_codes = {row['code'] for row in existing_batches}
    
    # Add missing batches
    added_count = 0
    for batch in MISSING_BATCHES:
        if batch['code'] not in existing_codes:
            existing_batches.append(batch)
            added_count += 1
            print(f"✅ Added: {batch['code']} - {batch['product']} ({batch['country']})")
        else:
            print(f"⏭️  Skipped (already exists): {batch['code']}")
    
    # Write updated data
    if existing_batches:
        fieldnames = list(existing_batches[0].keys())
        with open(output_file, 'w', encoding='utf-8', newline='') as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(existing_batches)
    
    print(f"\n📊 Summary:")
    print(f"   Original batches: {len(existing_codes)}")
    print(f"   Added batches: {added_count}")
    print(f"   Total batches: {len(existing_batches)}")
    print(f"\n✅ Updated file: {output_file}")

if __name__ == '__main__':
    main()
