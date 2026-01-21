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
1. **Always contact official hotlines** (see DATABASE_INFO.md)
2. **Check your local health authority website**
3. **When in doubt, DO NOT USE the product**

## 🚀 Live Demo
Deploy to GitHub Pages to see it live!

## 🛡️ Key Features
- **🍼 Baby-Focused Design**: Premium UI with **Grok-Optimized** bottle visualizations
- **⚡ Visual Emergency System**: 
  - **Color-Coded Milk Status**: White (Idle) → Green (Safe) → Yellow (Warning) → Red (Danger)
  - **Dynamic Animations**: Gentle breathing (Safe), Warning shake (Caution), Aggressive flash (Critical)
- **🌐 Bilingual Support**: Full English/Chinese (EN/中文) interface
- **📊 Accurate Logic**: 
  - **🚨 Critical Alert**: Exact match with 365 officially recalled batch codes
  - **⚠️ Warning Alert**: Series prefix matching for production line recalls
  - **✅ Safe Status**: No match found with official hotline guidance
- **🔬 Scientific Accuracy**: Precise Cereulide toxin information with heat-resistance warnings
- **📱 Mobile-First**: Responsive design using Tailwind CSS and Inter/Outfit typography

## 📂 Project Structure
- `index.html`: Main application entry point
- `css/style.css`: Premium styling with emergency animations
- `js/data.js`: Centralized database (365 verified entries, v4.1.0 - 100% official)
- `js/script.js`: Core bilingual logic and search engine
- `csv_to_js.py`: Strict data generation script (100% Official Sources)
- `resources/official_docs/`: Local PDF backups of FSA/RappelConso advisories

## 🛠️ Deploy to GitHub Pages
1. Create a new repository: `nestle-recall-checker`
2. Push these files to the `main` branch
3. Go to **Settings** > **Pages** and set source to `main` branch
4. Your site will be live at `https://<username>.github.io/nestle-recall-checker/`

---
*Created for public safety and transparency in infant nutrition. Data synchronized with official 2026 regulatory announcements.*
