#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Global Nestlé Infant Formula Recall Verification Tool
Final Pre-Deployment Verification

Author: TechDadShanghai
License: Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
Copyright (c) 2026 TechDadShanghai

This utility performs comprehensive checks before deployment to ensure data integrity.
Use for non-commercial purposes only. For commercial licensing, contact: miles.x.dev@outlook.com
"""

import csv
import json
import os
from collections import Counter

def verify_project():
    report = []
    report.append("# FINAL PRE-DEPLOYMENT REVIEW REPORT")
    report.append("## 1. Data Integrity Check")
    
    # 1.1 Load Data
    try:
        with open('recall_database.csv', 'r', encoding='utf-8-sig') as f:
            reader = csv.DictReader(f)
            rows = list(reader)
    except Exception as e:
        report.append(f"❌ CRITICAL ERROR: Could not read CSV database: {str(e)}")
        return "\n".join(report)

    # 1.2 Statistics
    total_batches = len(rows)
    countries = Counter(r['country'] for r in rows)
    speculative_entries = [r for r in rows if r.get('isSeries', 'False').lower() == 'true']
    
    report.append(f"- **Total Official Batches**: {total_batches}")
    report.append(f"- **Speculative/Series Rows**: {len(speculative_entries)} (Should be 0)")
    
    if len(speculative_entries) == 0:
        report.append("  - ✅ Speculative data check PASSED")
    else:
        report.append("  - ❌ Speculative data check FAILED")

    # 1.3 Region Naming Verification
    report.append("\n### Region Naming Validation")
    target_regions = {
        "China (Mainland)": 0, 
        "China (Cross-border)": 0
    }
    
    for r in rows:
        if r['country'] in target_regions:
            target_regions[r['country']] += 1
            
    for region, count in target_regions.items():
        if count > 0:
            report.append(f"- ✅ **{region}**: Found {count} records (Correct Naming)")
        else:
            # Check if they are named differently
            alt_search = [r['country'] for r in rows if "China" in r['country'] or "Hong Kong" in r['country']]
            alt_count = Counter(alt_search)
            report.append(f"- ⚠️ **{region}**: Not found. Found instead: {dict(alt_count)}")

    # 1.4 JSON Data Sync Check
    try:
        with open('js/data.js', 'r', encoding='utf-8') as f:
            js_content = f.read()
            if str(total_batches) in js_content and "100% Official" in js_content:
                report.append("\n## 2. Application Logic Check")
                report.append("- ✅ `js/data.js` appears synced with CSV (Total count matches)")
            else:
                 report.append("\n## 2. Application Logic Check")
                 report.append(f"- ⚠️ `js/data.js` might be out of sync. Check total count.")
    except:
        report.append("- ❌ Could not read js/data.js")

    # 1.5 File Structure
    report.append("\n## 3. Project Structure")
    required_files = ['index.html', 'css/style.css', 'js/script.js', 'js/data.js', 'README.md']
    missing_files = [f for f in required_files if not os.path.exists(f)]
    
    if not missing_files:
         report.append("- ✅ All core application files present")
    else:
         report.append(f"- ❌ Missing files: {missing_files}")

    return "\n".join(report)

if __name__ == "__main__":
    report_content = verify_project()
    print(report_content)
    with open('PRE_DEPLOYMENT_REPORT.md', 'w', encoding='utf-8') as f:
        f.write(report_content)
