# 🍼 Nestlé Recall Checker (Global Edition v4.0.0)

> **High-Authority Bilingual Web Tool for 2026 Global Nestlé Infant Formula Recall Verification**

## � Critical Safety Information
**Cereulide Toxin (Bacillus cereus)** is **HEAT-RESISTANT**. Boiling water **CANNOT** deactivate it.
- All recall data is from **January 2026** official announcements
- Covers **350 officially verified batch codes** from 9 regions (speculative series alerts removed)

## 🚀 Live Demo
Deploy to GitHub Pages to see it live!

## 🛡️ Key Features
- **🍼 Baby-Focused Design**: Premium UI with bottle icons and infant-centric aesthetics
- **⚡ Real-time Emergency Alerts**: Aggressive flashing animations for critical recalls
- **🌐 Bilingual Support**: Full English/Chinese (EN/中文) interface
- **📊 Accurate Logic**: 
  - **🚨 Critical Alert**: Exact match with 350 officially recalled batch codes (Red emergency flash)
  - **⚠️ Warning Alert**: Series prefix matching for production line recalls (Amber flash)
  - **✅ Safe Status**: No match found with official hotline guidance
- **🔬 Scientific Accuracy**: Precise Cereulide toxin information with heat-resistance warnings
- **📱 Mobile-First**: Responsive design using Tailwind CSS and Inter/Outfit typography

## 📂 Project Structure
- `index.html`: Main application entry point
- `css/style.css`: Premium styling with emergency flash animations
- `js/data.js`: Centralized database (350 verified entries, v4.1.0 - cleaned)
- `js/script.js`: Core bilingual logic and search engine
- `process_data_v6.py`: Data enrichment pipeline
- `resources/official_docs/`: Local PDF backups of FSA/RappelConso advisories

## 🛠️ Deploy to GitHub Pages
1. Create a new repository: `nestle-recall-checker`
2. Push these files to the `main` branch
3. Go to **Settings** > **Pages** and set source to `main` branch
4. Your site will be live at `https://<username>.github.io/nestle-recall-checker/`

---
*Created for public safety and transparency in infant nutrition. Data synchronized with official 2026 regulatory announcements.*
