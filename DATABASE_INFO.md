# Global Nestlé Milk Formula Recall Tool - Database v3.6 (Global Complete)

## 📊 Database Statistics
- **Total Verified Records:** 950
- **Regions Covered:** 10+ (Mainland China, HK, UK, Germany, France, Belgium, Luxembourg, Philippines, Australia, NZ, MENA)
- **Data Version:** 3.6.0 (Global Complete)
- **Last Sync:** 2026-01-21 12:00 (SGT)

## 🤖 Data Automation (NEW)
This project now features **Automated Data Sync** via GitHub Actions:
- **Source of Truth:** `recall_database_v3.csv`
- **Automation:** Any update to the CSV will automatically trigger `process_data_v5.py` to regenerate the high-performance `js/data.js` database used by the web app.

## ⚖️ Legal Standing
This search tool operates on a **Strict Official Matching** basis. No predictive or fuzzy logic is applied that could lead to consumer misinformation or corporate liability. Every entry is directly traceable to a specific government health authority announcement.

## 🔍 Matching Logic (Security Architecture)
1. **Case A (Danger):** Exact 10-digit Batch Code match. Indicates the product is definitively part of a specific recall list.
2. **Case B (Caution):** Production Series Prefix match (requires `isSeries: true` in database). Indicates the product was produced in a time/location covering the recall window.
3. **Case C (Safe):** No match after 4 digits of input. 

## 🌐 Official Verification Sources
| Region | Authority | Primary Record Link |
| :--- | :--- | :--- |
| **China Mainland** | Nestlé CN / SAMR | [Official Press Release](https://www.nestle.com.cn/media/pressreleases/20260113) |
| **UK & Ireland** | UK FSA | [Alert Archive](https://www.food.gov.uk/news-alerts/alert/fsa-prin-02-2026) |
| **Australia / NZ** | FSANZ | [Food Recalls Portal](https://www.foodstandards.gov.au/food-recalls) |
| **France** | RappelConso | [Official French Alert](https://rappel.conso.gouv.fr/) |

## ☎️ Verified Support Hotlines
- **China (Mainland):** 400-616-5015
- **Hong Kong:** +852-2179-8888
- **UK:** 0800-081-8180
- **Australia:** 1800 464 472

---
*Created by MilesXLab. All data synchronized with official sources.*
