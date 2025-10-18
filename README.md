# A.T Commodities - Daily Cash Voucher System

A comprehensive web-based voucher management system for generating, tracking, and printing daily cash vouchers with automatic numbering and data persistence.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Configuration](#configuration)
- [Printing](#printing)
- [Data Management](#data-management)
- [Browser Compatibility](#browser-compatibility)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Core Functionality
- **Automatic Voucher Numbering** - Sequential numbering system starting from 1
- **Dual Voucher Types** - Support for Payment and Receipt vouchers
- **Date Management** - Auto-fills today's date, customizable for any date
- **Amount Conversion** - Automatic conversion of numeric amounts to words (PKR format)
- **Persistent Storage** - All data saved in browser's localStorage

### Data Management
- **JSON Export** - Export all vouchers to JSON file with timestamp
- **JSON Import** - Import vouchers from previously exported files
- **Bulk Operations** - Clear all vouchers with confirmation
- **Individual Delete** - Remove specific vouchers from the list

### Printing Features
- **Individual Print** - Print any single voucher
- **Bulk Print** - Print all vouchers at once
- **Selective Print** - Print vouchers starting from a specific number
- **Optimized Layout** - 4 vouchers per A4 page for efficient printing
- **Professional Format** - Clean, legible design with proper spacing

### User Interface
- **Modern Design** - Gradient backgrounds and smooth animations
- **Responsive Layout** - Works on desktop and tablet devices
- **Form Validation** - Ensures all required fields are filled
- **Interactive Table** - Browse all vouchers with action buttons
- **Real-time Updates** - Instant feedback on all operations

## 🚀 Demo

The system includes:
- Voucher creation form with all necessary fields
- Live voucher list with sorting and filtering
- Print preview functionality
- Data export/import capabilities

## 💻 Installation

### Option 1: Direct Use
1. Download the `cash-voucher.html` file
2. Open it in any modern web browser
3. Start creating vouchers immediately

### Option 2: Git Clone
```bash
# Clone the repository
git clone https://github.com/inamansari-92/Cash-Vouchers-Generator.git

# Navigate to the directory
cd Cash-Vouchers-Generator

# Open in browser
open cash-voucher.html
```

### Option 3: Deploy to Web Server
```bash
# Upload the HTML file to your web server
scp cash-voucher.html user@yourserver:/var/www/html/

# Access via browser
https://yourdomain.com/index.html
```

## 📖 Usage

### Creating a Voucher

1. **Fill in Voucher Details:**
   - Voucher number is auto-generated
   - Select date (defaults to today)
   - Choose type (Payment/Receipt)
   - Enter debit account name
   - Input amount in rupees
   - Add transaction details
   - Select payment mode (Cash/Bank/Cheque)
   - Specify credit account

2. **Click "Add Voucher"** to save

3. **View in List** - Voucher appears in the table below

### Printing Vouchers

**Print Single Voucher:**
- Click the "Print" button next to any voucher in the list

**Print All Vouchers:**
- Click the "Print All" button above the table

**Print from Specific Number:**
1. Enter the starting voucher number in the input field
2. Click "Print Selected"
3. All vouchers from that number onwards will print

**Print Layout:**
- 4 vouchers fit on one A4 page
- Automatic page breaks after every 4 vouchers
- Optimized for clarity and readability

### Managing Data

**Export Vouchers:**
- Click "Export JSON" to download all vouchers
- File includes vouchers and current counter
- Timestamped filename for easy tracking

**Import Vouchers:**
1. Click "Import JSON"
2. Select a previously exported JSON file
3. Confirm the replacement of existing data
4. All vouchers are restored

**Clear All:**
- Click "Clear All" to delete all vouchers
- Confirmation required to prevent accidents
- Resets voucher counter to 1

## 📁 File Structure

```
Cash-Vouchers-Generator/
├── index.html          # Main application file (complete standalone)
├── README.md           # This file
└── LICENSE            # MIT License file
```

## ⚙️ Configuration

### Customizing Company Information

Edit the HTML file to change company details:

```html
<!-- Company Name (Line ~350) -->
<h1>YOUR COMPANY NAME</h1>

<!-- Website (Line ~351) -->
<div class="website">www.yourwebsite.com</div>
```

### Customizing Signatories

Update the signature names (Line ~750):

```html
<!-- Paid By -->
<div class="signature-line">YOUR NAME HERE</div>

<!-- Approved By -->
<div class="signature-line">APPROVER NAME HERE</div>
```

### Customizing Default Values

```javascript
// Change default credit account (Line ~520)
document.getElementById('creditTo').value = 'YOUR DEFAULT VALUE';

// Modify amount to words currency (Line ~670)
words += 'YOUR CURRENCY';  // Replace 'RUPEES'
```

## 🖨️ Printing

### Print Settings Recommendation

For best results, configure your browser's print settings:

- **Paper Size:** A4
- **Orientation:** Portrait
- **Margins:** Default (10mm)
- **Scale:** 100%
- **Background Graphics:** Enabled (for borders)

### Browser-Specific Instructions

**Chrome/Edge:**
1. Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
2. Select destination printer or "Save as PDF"
3. Ensure "Background graphics" is checked
4. Click "Print"

**Firefox:**
1. Press `Ctrl+P` or `Cmd+P`
2. Select printer
3. Check "Print backgrounds"
4. Click "OK"

**Safari:**
1. Press `Cmd+P`
2. Select printer
3. Expand "Safari" dropdown
4. Check "Print backgrounds"
5. Click "Print"

## 💾 Data Management

### Data Storage

- All data is stored in browser's `localStorage`
- Storage key: `voucherData`
- Includes vouchers array and next voucher number
- Data persists across browser sessions
- Cleared only when you manually clear browser data or use "Clear All"

### Data Backup Recommendations

1. **Regular Exports:** Export JSON weekly or monthly
2. **Multiple Backups:** Keep exports in different locations
3. **Version Control:** Name files with dates for tracking
4. **Test Imports:** Verify backups work before needed

### Data Format

Export JSON structure:
```json
{
  "vouchers": [
    {
      "no": 1,
      "type": "payment",
      "date": "2025-10-18",
      "debitTo": "Account Name",
      "amount": 10000,
      "details": "Transaction details",
      "modeOfPayment": "CASH",
      "creditTo": "PATTY CASH"
    }
  ],
  "nextVoucherNo": 2,
  "exportDate": "2025-10-18T12:00:00.000Z"
}
```

## 🌐 Browser Compatibility

### Fully Supported Browsers

- ✅ Chrome 90+ (Recommended)
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

### Required Features

- HTML5
- CSS3 (Grid, Flexbox)
- JavaScript ES6+
- localStorage API
- Print API

### Not Supported

- ❌ Internet Explorer (any version)
- ❌ Opera Mini
- ❌ Legacy mobile browsers

## 🔧 Troubleshooting

### Common Issues

**Vouchers not saving:**
- Check if browser allows localStorage
- Clear browser cache and reload
- Ensure browser is not in private/incognito mode

**Print layout issues:**
- Verify browser print settings
- Check that "Background graphics" is enabled
- Try printing to PDF first to verify layout
- Ensure page scaling is set to 100%

**Import not working:**
- Verify JSON file is valid
- Check file wasn't corrupted during transfer
- Ensure file is from this system's export

**Numbers not converting to words:**
- Check amount is a valid number
- Verify no special characters in amount
- Ensure decimal places are properly formatted

### Browser Console

Open developer console to check for errors:
- **Chrome/Edge:** `F12` or `Ctrl+Shift+I`
- **Firefox:** `F12` or `Ctrl+Shift+K`
- **Safari:** `Cmd+Option+C` (Enable in Preferences first)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards

- Use consistent indentation (2 spaces)
- Comment complex logic
- Test printing on multiple browsers
- Ensure localStorage compatibility
- Validate JSON import/export

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 A.T Commodities

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 📧 Contact

**A.T Commodities**
- Website: www.atcommodities.pk
- Email: info@atcommodities.pk

## 🙏 Acknowledgments

- Built with vanilla HTML, CSS, and JavaScript
- No external dependencies required
- Designed for simplicity and reliability
- Optimized for Pakistani rupee formatting

## 📊 Roadmap

Future enhancements planned:

- [ ] Multi-user support with authentication
- [ ] Advanced search and filtering
- [ ] Voucher templates
- [ ] Email vouchers as PDF
- [ ] Multi-currency support
- [ ] Excel export functionality
- [ ] Voucher categories and tags
- [ ] Monthly/yearly reports
- [ ] Dashboard with analytics

---

**Version:** 1.0.0  
**Last Updated:** October 18, 2025  
**Maintained by:** A.T Commodities Development Team
