# Ahmed Taha - Portfolio Website 🚀

Professional portfolio website for a BI & ETL Developer showcasing projects, certifications, and technical skills.

## ✨ Features

### 🎨 Design & UX
- ✅ Modern, clean, and responsive design
- ✅ Smooth scroll animations
- ✅ Dark mode toggle
- ✅ Loading screen
- ✅ Mobile-first approach

### 📱 Interactive Elements
- ✅ Mobile navigation menu
- ✅ Project filters (All, SQL, BI, Python, ETL)
- ✅ Animated statistics counter
- ✅ Back to top button
- ✅ Contact form with validation
- ✅ Smooth scrolling navigation

### 🎯 Sections
1. **Hero** - Introduction with social links
2. **Stats** - Animated counters (Projects, Certifications, etc.)
3. **Skills** - Technical skills organized by category
4. **Projects** - Filterable project showcase
5. **Experience** - Timeline of work and education
6. **Certifications** - Professional credentials
7. **Contact** - Contact form and information

## 📁 File Structure

```
portfolio/
├── index.html              # Main HTML file
├── portfolio_css_v2.css    # Stylesheet
├── portfolio_js.js         # JavaScript functionality
├── my-photo3.jpg          # Profile photo
├── favicon.ico            # Website icon
└── Ahmed_Taha_BI_ETLDeveloper_CV.pdf  # CV file
```

## 🚀 Quick Start

### 1. Download Files
Download all three main files:
- `index.html`
- `portfolio_css_v2.css`
- `portfolio_js.js`

### 2. Add Your Assets
Place these files in the same directory:
- **Profile photo**: `my-photo3.jpg`
- **Favicon**: `favicon.ico`
- **CV file**: `Ahmed_Taha_BI_ETLDeveloper_CV.pdf`

### 3. Customize Content

#### Update Personal Information (in `index.html`):
```html
<!-- Line 8: Page Title -->
<title>Your Name - Your Title</title>

<!-- Line 9-10: SEO Description -->
<meta name="description" content="Your description">

<!-- Line 42: Name in Navigation -->
<div class="logo">Your Name</div>

<!-- Line 58: Hero Section -->
<h1>Your Name</h1>
<div class="subtitle">Your Title</div>
<p class="description">Your description...</p>

<!-- Contact Section - Update email, phone, location -->
```

#### Update Projects & Certifications (in `portfolio_js.js`):
```javascript
// Lines 3-70: Certifications array
// Lines 72-120: Projects array
```

#### Customize Colors (in `portfolio_css_v2.css`):
```css
/* Lines 5-12: CSS Variables */
:root {
    --primary: #2563eb;        /* Main color */
    --secondary: #0ea5e9;      /* Accent color */
    --dark: #0f172a;          /* Text color */
    /* ... */
}
```

## 🎨 Customization Guide

### Change Primary Color
```css
:root {
    --primary: #YOUR_COLOR;
}
```

### Add New Project
```javascript
// In portfolio_js.js
projects.push({
    title: "Project Title",
    description: "Project description",
    tech: ["Tech1", "Tech2"],
    icon: "fa-icon-name",
    link: "https://github.com/...",
    category: ["sql", "python"]  // For filtering
});
```

### Add New Certification
```javascript
// In portfolio_js.js
certifications.push({
    name: "Certification Name",
    issuer: "Issuer Name",
    date: "Date",
    credentialId: "ID",
    icon: "fa-icon-name",
    verified: true,
    verifyLink: "verification-link",
    category: ["category"]
});
```

## 📧 Contact Form Setup

The contact form needs a backend service. Here are options:

### Option 1: Formspree (Easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the form in `portfolio_js.js`:

```javascript
// In initContactForm() function
const response = await fetch('YOUR_FORMSPREE_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

### Option 2: EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Follow their integration guide
3. Replace form submission code

### Option 3: Your Backend
Create your own API endpoint and update the fetch URL.

## 🌐 Deployment

### GitHub Pages (Free)
1. Create repository: `yourusername.github.io`
2. Upload all files
3. Go to Settings > Pages
4. Select branch: main
5. Your site: `https://yourusername.github.io`

### Netlify (Free)
1. Sign up at [netlify.com](https://netlify.com)
2. Drag & drop your folder
3. Done! Get custom URL

### Vercel (Free)
1. Sign up at [vercel.com](https://vercel.com)
2. Import from GitHub
3. Deploy automatically

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📱 Responsive Breakpoints

- **Desktop**: > 992px
- **Tablet**: 768px - 992px
- **Mobile**: < 768px

## 🎯 Performance Tips

1. **Optimize Images**
   - Compress profile photo (max 500KB)
   - Use WebP format for better compression

2. **Minify Files** (for production)
   - Use [cssminifier.com](https://cssminifier.com)
   - Use [javascript-minifier.com](https://javascript-minifier.com)

3. **Enable Caching**
   - Add `.htaccess` for Apache servers
   - Configure cache headers

## 🐛 Troubleshooting

### Mobile menu not working
- Check if `portfolio_js.js` is loaded
- Open browser console for errors

### Dark mode not saving
- Check browser allows localStorage
- Try in incognito mode to test

### Projects not loading
- Check browser console
- Verify `portfolio_js.js` file path

### Animations not working
- Check if IntersectionObserver is supported
- Update browser to latest version

## 📚 Dependencies

All dependencies are loaded via CDN (no installation needed):

- **Font Awesome 6.4.0** - Icons
- **Google Fonts (Inter)** - Typography

## 🤝 Contributing

Feel free to fork and customize this portfolio for your own use!

## 📄 License

Free to use for personal portfolios. Attribution appreciated but not required.

## 🆘 Support

For questions or issues:
- Open an issue on GitHub
- Check browser console for errors
- Verify all files are in correct location

## 🎉 Credits

Created by **Ahmed Taha**
- GitHub: [@ahmedtaha89](https://github.com/ahmedtaha89)
- LinkedIn: [Ahmed Taha](https://www.linkedin.com/in/ahmed-taha-QA)

---

Made with ❤️ by Ahmed Taha