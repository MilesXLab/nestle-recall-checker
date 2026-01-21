# Global Nestlé Milk Formula Recall Tool - Database v3.0 (Strict)

## 📊 Database Statistics
- **Total Verified Batches:** 303
- **Regions Covered:** 8 (Mainland China, Hong Kong, UK, Germany, France, Belgium, Luxembourg, Philippines)
- **Data Version:** 3.0.0 (Global Strict)
- **Last Sync:** 2026-01-21 11:45 (SGT)

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
| **Hong Kong** | HK CFS | [Safety Notice](https://www.cfs.gov.hk/english/press/20260110_12105.html) |
| **Europe (Multi)** | RASFF / Nestlé EU | [European Safety Portal](https://ec.europa.eu/food/safety/rasff_en) |

## ☎️ Verified Support Hotlines
- **China (Mainland):** 400-616-5015
- **Hong Kong / Macau:** +852-2179-8888
- **UK:** 0800-081-8180
- **Philippines:** +63-2-8898-0061

---
*Created by MilesXLab. All data synchronized with official sources.*
