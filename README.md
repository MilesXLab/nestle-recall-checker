# 🍼 Nestlé Recall Checker (Global Edition v4.1.0)

> **High-Authority Bilingual Web Tool for 2026 Global Nestlé Infant Formula Recall Verification**

## 🚨 Critical Safety Information
**Cereulide Toxin (Bacillus cereus)** is **HEAT-RESISTANT**. Boiling water **CANNOT** deactivate it.
- All recall data is from **January 2026** official announcements
- Covers **365 officially verified batch codes** from 11 regions (100% government sources)

### ⚠️ Important Disclaimer
**Official sources have NOT published a complete global batch list.** This database consolidates publicly available information from:
- Official government health authority websites (FSA, CFS, FDA, RappelConso, FSANZ, SAMR)
- National regulatory agency announcements
- Nestlé official recall notices by region

**This tool is for reference and convenient search only.** For definitive verification:
1. **Always contact official hotlines** (listed in the app)
2. **Check your local health authority website**
3. **When in doubt, DO NOT USE the product**

## 🚀 Live Demo
Deploy to GitHub Pages to see it live!

## 🛡️ Key Features
- **🍼 Ultimate Bottle Design**: Highly realistic SVG visualization with contoured shape, scale lines, and dynamic milk fill status.
- **📊 Professional Dashboard**: Optimized two-column layout showing Search/Results and Authoritative Sources side-by-side (Desktop).
- **⚡ Daily Archival System**: Automated daily synchronization with official records, maintaining timestamped snapshots for maximum transparency.
- **🌐 Dual-Engine Verification**:
  - **🚨 Critical Alert**: Exact match with 365 officially recalled batch codes.
  - **✅ Safe Status**: Verified against the latest official announcements.
- **🌐 Full Bilingual Support**: Deep integration of English/Chinese (EN/中文) across all UI components.

## 📂 Project Structure
- `index.html`: Main application entry point (Responsive Dashboard)
- `css/style_v4_1.css`: Premium styling and emergency status animations
- `js/script_v4_1.js`: Core search engine and i18n logic
- `js/data_v4_1.js`: Synchronized database (v4.1.0 - 100% official)
- `recall_database_v3.csv`: Primary source of truth (365 batches)
- `archive_and_sync.py`: Daily archival and JS synchronization utility
- `archives/`: Historical snapshots of data for rollback and audit
- `csv_to_js.py`: Strict data conversion engine

## 🛠️ Performance & Maintenance
Run the `archive_and_sync.py` script daily to synchronize the latest CSV changes with the web interface. This ensures the tool always displays the latest verified state while preserving history in the `archives/` directory.

---
*Created for public safety and transparency. Data synchronized with official 2026 regulatory announcements.*
