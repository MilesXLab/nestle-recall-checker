# Contributing to Global Nestlé Infant Formula Recall Verification Tool

**Thank you for your interest in contributing!** 🙏

This document explains how to contribute code, data, translations, and ideas to the project.

---

## Code of Conduct

We are committed to providing a welcoming and inclusive environment. All contributors must follow our Code of Conduct:

- **Be Respectful:** Treat all community members with respect
- **Be Inclusive:** Welcome people of all backgrounds and experience levels
- **Be Safe:** Prioritize public health and safety in all discussions
- **Be Honest:** Be truthful about data and sourcing
- **Be Professional:** Keep discussions on-topic and constructive

---

## Before You Start

### Sign the Contributor License Agreement (CLA)
By contributing to this project, you agree that:
- Your contributions are original work
- You have the right to license your contributions
- Your contributions will be under the CC BY-NC 4.0 license
- You understand the non-commercial restrictions

### Check Existing Issues
Before starting work, please:
1. Search for existing issues matching your idea
2. Check if a similar PR is already open
3. Create a new issue for your proposed change
4. Wait for maintainer feedback before coding

---

## Types of Contributions

### 🐛 Bug Reports

**How to Report:**
1. Go to [GitHub Issues](https://github.com/[owner]/nestle-recall-checker/issues)
2. Click "New Issue" and select "Bug Report"
3. Fill in the template with:
   - What you did
   - What you expected
   - What actually happened
   - Your browser/environment
   - Screenshots if applicable

**Good Bug Report Example:**
```
Title: Search crashes with special characters in batch code

Description:
When I search for batch code "123@ABC", the search freezes.

Steps to Reproduce:
1. Go to https://example.com/recall-checker
2. Enter "123@ABC" in search box
3. Click Search
4. App freezes, need to refresh page

Expected: Should show "No results found" or error message
Actual: App becomes unresponsive

Browser: Chrome 120 on Windows 11
```

### 📝 Data Corrections

**Reporting Inaccurate Data:**
1. Verify the issue against official sources
2. Create GitHub issue with:
   - Batch code(s) affected
   - Official source showing correct info
   - Link to official government announcement
   - Proposed correction

**Example:**
```
Title: Batch code 123456 status incorrect

The tool shows batch 123456 as "Recalled" but the latest FDA update 
shows it as "Safe to use - False alarm resolved"

Official Source: https://www.fda.gov/news-events/...
Date: January 2026

Correction: Change status to "Safe - Resolved"
```

### 🌐 Translations

**Adding a New Language:**
1. Create an issue: "Add [Language] Translation"
2. Provide:
   - Language name and code (e.g., "Spanish - es")
   - Whether you can provide full translation
3. Wait for maintainer approval
4. Submit PR with translations

**Translation Guidelines:**
- Use professional terminology (not colloquial)
- Preserve HTML/CSS structure
- Test in local environment
- Ensure all strings are translated

### 💻 Code Improvements

**Good Code Contributions:**
- Bug fixes for reported issues
- Performance improvements
- Accessibility enhancements
- UI/UX improvements
- Code refactoring
- Test coverage

**Before Coding:**
1. Create or comment on GitHub issue
2. Get approval from maintainers
3. Follow the coding guidelines below
4. Create feature branch from `main`

### 📚 Documentation

**Documentation Contributions:**
- Improving README clarity
- Adding usage examples
- Explaining API contracts
- Creating how-to guides
- Fixing typos/grammar

---

## Development Setup

### Prerequisites
- Node.js 16+ (or Python 3.8+ for backend scripts)
- Git
- VS Code or your preferred editor

### Local Development

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR-USERNAME/nestle-recall-checker.git
cd nestle-recall-checker

# 3. Add upstream remote
git remote add upstream https://github.com/[original]/nestle-recall-checker.git

# 4. Create feature branch
git checkout -b fix/your-issue-name

# 5. Open in browser
# Simply open index.html in your browser or run:
python -m http.server 8000
# Then visit http://localhost:8000

# 6. Make your changes
# Edit files, test in browser, verify in console

# 7. Run validation
python final_deployment_check.py

# 8. Commit your changes
git add .
git commit -m "fix: brief description of change"

# 9. Push to your fork
git push origin fix/your-issue-name

# 10. Create Pull Request on GitHub
```

---

## Coding Guidelines

### JavaScript/HTML/CSS Standards

**Code Style:**
```javascript
// ✅ Good
function searchBatchCode(code) {
  const trimmedCode = code.trim().toUpperCase();
  const results = batches.filter(b => b.code === trimmedCode);
  return results;
}

// ❌ Avoid
function search(c) {
  return batches.filter(b => b.code == c.trim())
}
```

**Comments:**
```javascript
// Explain WHY, not WHAT
// ✅ Good
// Filter out expired batches to show only current recalls
const activeRecalls = batches.filter(b => !b.isResolved);

// ❌ Bad
// Filter batches
const activeRecalls = batches.filter(b => !b.isResolved);
```

**Variable Names:**
```javascript
// ✅ Clear and descriptive
const batchCode = "123ABC456";
const isRecalled = true;
const officialSourceUrl = "https://...";

// ❌ Unclear
const bc = "123ABC456";
const ir = true;
const url = "https://...";
```

### CSS Guidelines

```css
/* Use semantic class names */
.batch-search-input { /* ✅ Good */ }
.input1 { /* ❌ Bad */ }

/* Group related properties */
.result-card {
  /* Layout */
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  /* Styling */
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  
  /* Spacing */
  padding: 1.5rem;
  margin-bottom: 1rem;
}
```

### Python Guidelines

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Module docstring explaining purpose."""

import csv
from datetime import datetime

def process_batch(batch_code):
    """
    Process a single batch code.
    
    Args:
        batch_code (str): The batch code to process
        
    Returns:
        dict: Processed batch data
    """
    trimmed = batch_code.strip().upper()
    return {"code": trimmed, "timestamp": datetime.now()}
```

---

## Testing Your Changes

### Before Submitting PR

```bash
# 1. Test in Browser
# Open index.html and test your changes manually

# 2. Check Console
# Press F12, check for any JavaScript errors

# 3. Verify Data
python final_deployment_check.py
# Should show no errors

# 4. Test on Mobile
# Use Chrome DevTools Device Emulation
# Or test on actual mobile device if possible

# 5. Cross-Browser
# Test in Chrome, Firefox, Safari
# Test on Windows, Mac, or Linux
```

### Example Test Cases

For a search feature:
- [ ] Empty search returns no results
- [ ] Exact batch code returns match
- [ ] Case-insensitive search works
- [ ] Special characters handled gracefully
- [ ] No results message is clear
- [ ] Response time < 1 second

---

## Pull Request Process

### Creating a PR

1. **Push to Your Fork**
```bash
git push origin feature/my-improvement
```

2. **Create PR on GitHub**
   - Title: Brief description (e.g., "Add Spanish translation")
   - Description: Fill in template:

```markdown
## Description
Briefly describe what you changed and why.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation
- [ ] Translation
- [ ] Performance improvement

## Related Issue
Closes #123 (reference the GitHub issue)

## How to Test
1. Step one
2. Step two
3. Verify result

## Checklist
- [ ] I have tested my changes
- [ ] I have updated documentation
- [ ] My code follows the style guidelines
- [ ] I have not introduced new warnings
```

3. **Address Feedback**
   - Maintainers may request changes
   - Make changes in same branch
   - Push updates (PR updates automatically)
   - Request re-review when ready

4. **PR Merged** 🎉
   - Your code is now part of the project
   - You're credited in release notes
   - Thank you!

---

## Recognition & Credits

### How Contributors Are Recognized

- **GitHub:** Listed as contributor (automatic)
- **Release Notes:** Named in version release
- **README:** Major contributors listed
- **Website:** Community heroes section (future)
- **Swag:** Recognition swag for major contributions (future)

### Example Recognition

```
## v4.2.0 Release Notes

### New Contributors ✨
Thank you @username for:
- Adding Spanish translation
- Fixing search performance issue
- Improving mobile UI

### Contributors
[Full list of all contributors]
```

---

## Getting Help

### Questions?

- **GitHub Discussions:** Ask general questions
- **GitHub Issues:** Report specific bugs
- **Email:** miles.x.dev@outlook.com

### Common Questions

**Q: Will my code be credited?**  
A: Yes! You'll be listed in release notes and as a GitHub contributor.

**Q: Can I work on multiple features?**  
A: Yes, but open issues first so we avoid duplicate work.

**Q: What if my PR is rejected?**  
A: That's okay! We'll explain why and suggest improvements.

**Q: Can I make significant changes?**  
A: Please discuss major changes in an issue first before coding.

---

## License Reminder

By contributing, you agree that your contributions are licensed under the Creative Commons Attribution-NonCommercial 4.0 International License. This means:

✅ Your contributions are used for non-commercial purposes  
✅ Original authors and contributors are credited  
✅ The tool remains free for public safety  
✅ Project can be commercially licensed (separate agreement)  

---

## Thank You! 🙏

Your contribution helps keep families safe. Every improvement—whether code, data, translation, or ideas—makes a real difference.

**Together, we're building something special.** ❤️

---

**Last Updated:** January 22, 2026  
**Version:** 1.0  

**Copyright © 2026 TechDadShanghai**
