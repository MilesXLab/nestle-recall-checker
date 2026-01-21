# 🍼 Global Nestlé Infant Formula Recall Database - v4.0.0 (2026 Authority)

## 📊 Database Statistics
- **Total Verified Records:** 950+
- **Regions Covered:** 15+ (Mainland China, HK, UK, EU, MENA, PH, AU, NZ)
- **Data Version:** 4.0.0 (High Authority)
- **Last Sync:** 2026-01-21 13:15 (SGT)
- **Recall Period:** January 2026 Official Announcements

## 🧪 Toxin Information
**Cereulide (Bacillus cereus metabolite)**
- **Heat Resistance:** Highly stable, NOT deactivated by boiling water
- **Symptoms:** Nausea, vomiting, abdominal cramps (rapid onset)
- **Source:** Individual raw material contamination

## 🤖 Data Automation
This project uses **Multi-Source Consolidation** via Python:
- **Source of Truth:** `recall_database_v3.csv`
- **Automation:** `process_data_v6.py` performs deep data enrichment, adding sub-brand, specification, country, reason, and source docs to the high-performance `js/data.js` database.

## ⚖️ Legal Standing
This search tool operates on a **Strict Official Matching** basis. No predictive or fuzzy logic is applied that could lead to consumer misinformation or corporate liability. Every entry is directly traceable to a specific government health authority announcement from **January 2026**.

## 🔍 Matching Logic (Security Architecture)
1. **Case A (Critical - 🚨):** Exact 10-digit Batch Code match. Indicates the product is definitively part of a specific recall list. **Emergency red flash animation**.
2. **Case B (Caution - ⚠️):** Production Series Prefix match (requires `isSeries: true` in database). Indicates the product was produced in a time/location covering the recall window. **Amber warning flash animation**.
3. **Case C (Safe - ✅):** No match after 4 digits of input. Official hotline guidance provided.

## 🌐 Official Verification Sources (January 2026)
| Region | Authority | Primary Record Link | Date |
| :--- | :--- | :--- | :--- |
| **China Mainland** | Nestlé CN / SAMR | [Official Press Release](https://www.nestle.com.cn/media/pressreleases/20260113) | 2026-01-13 |
| **UK & Ireland** | UK FSA | [FSA-PRIN-02-2026](https://www.food.gov.uk/news-alerts/alert/fsa-prin-02-2026) | 2026-01-05 |
| **Hong Kong** | CFS | [Press Release](https://www.cfs.gov.hk/english/press/20260110_12105.html) | 2026-01-10 |
| **France** | RappelConso | [Fiche 20947](https://rappel.conso.gouv.fr/fiche-rappel/20947/Interne) | 2026-01 |
| **Australia / NZ** | FSANZ | [Food Recalls Portal](https://www.foodstandards.gov.au/food-recalls) | 2026-01 |

## ☎️ Verified Support Hotlines
- **China (Mainland):** 400-616-5015
- **Hong Kong:** +852-2179-8888
- **UK:** 0800-081-8180
- **Australia:** 1800 464 472

---
*Created by MilesXLab. All data synchronized with official 2026 regulatory sources. Cereulide toxin information verified against UK FSA and HK CFS advisories.*
