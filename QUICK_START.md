# Quick Start Guide

**Global Nestlé Infant Formula Recall Verification Tool**  
**Powered by TechDadShanghai**

---

## 🚀 5-Minute Quick Start

### Option 1: Use Online (Easiest)
Simply visit: `[Your GitHub Pages URL when published]`
- No installation needed
- No setup required
- Instant access

### Option 2: Deploy to Your Own Server

```bash
# 1. Clone the repository
git clone https://github.com/[owner]/nestle-recall-checker.git
cd nestle-recall-checker

# 2. Start local server
python -m http.server 8000

# 3. Open in browser
# Visit: http://localhost:8000
```

### Option 3: Deploy to GitHub Pages

1. Fork the repository
2. Go to Settings → Pages
3. Select "Deploy from branch"
4. Choose `main` branch
5. Save
6. Your site is now live at: `https://username.github.io/nestle-recall-checker`

---

## 📱 How to Use the Tool

### Search for a Batch Code

1. **Open the tool** in your browser
2. **Find batch code** on product packaging
   - Usually on bottom/back of can or box
   - Format: Numbers/letters (e.g., "123ABC456")
3. **Enter in search box** and press Enter
4. **Check result**:
   - 🚨 **RED** = Product recalled (DO NOT USE)
   - ✅ **GREEN** = Product safe (okay to use)
   - ❓ **GRAY** = Unknown (verify with official source)

### Understanding the Results

**When Product is RECALLED:**
- Shows recall reason
- Lists affected regions
- Provides official hotline number
- Links to government announcement
- Shows when recall was issued

**When Product is SAFE:**
- Confirmed not in recall list
- Shows verification date
- Links official sources
- Safe to use

---

## ⚙️ Maintenance (For System Administrators)

### Daily Update

Keep data synchronized with official sources:

```bash
# Run daily synchronization
python archive_and_sync.py

# This will:
# - Check for new official recalls
# - Update recall_database.csv
# - Generate new js/data.js
# - Archive old data
```

### Verify Data Integrity

Before any deployment:

```bash
# Run verification checks
python final_deployment_check.py

# This checks:
# - CSV format correctness
# - Data consistency
# - Duplicate removal
# - JavaScript generation
```

### Manual Data Update

If you need to add/update recall data:

1. **Edit `recall_database.csv`**
   - Open with Excel, Google Sheets, or text editor
   - Add/update rows with batch codes
   - Save as CSV format

2. **Regenerate JavaScript**
   ```bash
   python csv_to_js.py
   ```

3. **Test changes**
   - Open `index.html` in browser
   - Search for updated batch codes
   - Verify results are correct

4. **Archive changes**
   ```bash
   python archive_and_sync.py
   ```

---

## 📊 Database Format

### CSV Structure

```csv
code,productName,region,recallReason,isSeries,effectiveDate,hotline,officialSource,isResolved
123ABC,NestlePure Infant,USA,Cereulide Toxin,True,2026-01-15,1-800-555-0123,https://fda.gov/...,False
```

**Columns:**
- `code` - Batch code (unique)
- `productName` - Product name
- `region` - Region affected (USA, UK, CN, etc.)
- `recallReason` - Why recalled
- `isSeries` - True if entire series affected
- `effectiveDate` - When recall started
- `hotline` - Official contact number
- `officialSource` - Link to official announcement
- `isResolved` - True if recall is resolved

---

## 🔒 Security & Privacy

### What We Collect
- ✅ Search queries (anonymous)
- ✅ Tool usage statistics (aggregate)
- ✅ Error logs (for debugging)

### What We DON'T Collect
- ❌ Personal information
- ❌ Cookies or tracking codes
- ❌ IP addresses
- ❌ User identity

### Data Retention
- Search logs: Deleted after 30 days
- Error logs: Deleted after 7 days
- No user data stored permanently

---

## 🌐 Browser Compatibility

**Recommended:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Mobile:**
- iOS Safari 12+
- Chrome Android 90+
- Samsung Internet 14+

**Notes:**
- Works on Windows, Mac, Linux
- Mobile-responsive design
- Works offline for searches
- Best with JavaScript enabled

---

## 📞 Support & Help

### Reporting Issues

Found a bug or data error?

1. **Check existing issues** on GitHub
2. **Create new issue** with:
   - What you were doing
   - What went wrong
   - Batch codes affected
   - Your browser/device
3. **Include screenshots** if helpful

### General Questions

Email: `miles.x.dev@outlook.com`

### Data Verification

All sources are official government announcements:
- 🇺🇸 **USA:** FDA, CDC
- 🇬🇧 **UK:** FSA
- 🇪🇺 **EU:** National authorities
- 🇨🇳 **China:** SAMR
- 🇦🇺 **Australia/NZ:** FSANZ

---

## 📖 Additional Resources

### Documentation
- **[README.md](./README.md)** - Project overview
- **[OPEN_SOURCE_STRATEGY.md](./OPEN_SOURCE_STRATEGY.md)** - Long-term vision
- **[COMMERCIAL_USAGE_POLICY.md](./COMMERCIAL_USAGE_POLICY.md)** - Usage terms
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - How to contribute

### Official Safety Resources
- [FDA Recalls](https://www.fda.gov/safety/recalls)
- [FSA UK Recalls](https://www.food.gov.uk/news-alerts)
- [WHO Safety](https://www.who.int/)
- [CDC Food Safety](https://www.cdc.gov/foodsafety/)

---

## 🎯 Common Tasks

### "I want to contribute translations"
→ See [CONTRIBUTING.md](./CONTRIBUTING.md)

### "I found incorrect data"
→ Create GitHub issue with official source link

### "Can I use this commercially?"
→ See [COMMERCIAL_USAGE_POLICY.md](./COMMERCIAL_USAGE_POLICY.md)

### "How do I host this myself?"
→ Deploy to GitHub Pages (see above) or your own server

### "The tool doesn't work on my device"
→ Check browser compatibility above or report issue

---

## ✅ Checklist for First-Time Users

- [ ] Try searching for a batch code
- [ ] Review the official sources links
- [ ] Check your browser shows the tool properly
- [ ] If you found issues, report them
- [ ] Share with your parenting community
- [ ] Bookmark the site for future use

---

## 🚨 Important Reminders

⚠️ **This tool is for reference only**
- Always verify with official sources
- Contact hotlines for definitive answers
- When in doubt, DO NOT use the product
- This is not a substitute for official guidance

✅ **All data from official sources**
- Every batch code verified
- Every source publicly cited
- Updated daily with new recalls
- No guesswork or assumptions

---

**Need help?** Check the full [README.md](./README.md) or create a GitHub issue.

**Want to contribute?** See [CONTRIBUTING.md](./CONTRIBUTING.md)

**Questions about commercial use?** See [COMMERCIAL_USAGE_POLICY.md](./COMMERCIAL_USAGE_POLICY.md)

---

**Last Updated:** January 22, 2026  
**Version:** 1.0  

**Copyright © 2026 TechDadShanghai**  
**License:** CC BY-NC 4.0
