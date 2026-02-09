# Portfolio Website - Aparajita Shrivastava

A modern, minimal portfolio website with dark mode and subtle feminine aesthetics. Built with HTML, CSS, and vanilla JavaScript.

## 🌟 Features

- ✨ Dark mode with elegant purple accents
- 📱 Fully responsive design
- 🎨 Smooth scroll animations
- 💫 Interactive hover effects
- 🚀 Fast loading and lightweight
- 📧 Contact form (ready for integration)
- 📄 Resume download functionality

## 📁 Project Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling
├── js/
│   └── script.js       # Interactive functionality
├── assets/
│   └── resume.pdf      # Your resume (add this file)
└── README.md           # This file
```

## 🚀 Quick Start

### 1. Clone or Download

Download all files and maintain the folder structure shown above.

### 2. Add Your Resume

Place your resume PDF in the `assets/` folder and name it `resume.pdf`.

### 3. Test Locally

Simply open `index.html` in your browser to view the site locally.

## 📤 Hosting on GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Name it: `your-username.github.io` (e.g., `aparajitashri04.github.io`)
4. Make it Public
5. Click "Create repository"

### Step 2: Upload Files

#### Option A: Using GitHub Website (Easier)

1. In your new repository, click "uploading an existing file"
2. Drag and drop ALL files maintaining the folder structure:
   - `index.html`
   - `css/styles.css`
   - `js/script.js`
   - `assets/resume.pdf`
   - `README.md`
3. Click "Commit changes"

#### Option B: Using Git (Recommended)

```bash
# Navigate to your project folder
cd portfolio-website

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# Connect to GitHub (replace with your repository URL)
git remote add origin https://github.com/your-username/your-username.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository Settings
2. Scroll to "Pages" in the left sidebar
3. Under "Source", select `main` branch
4. Click "Save"
5. Your site will be live at: `https://your-username.github.io`

## 🎨 Customization Guide

### Changing Colors

Edit the CSS variables in `css/styles.css`:

```css
:root {
    --bg-primary: #0a0a0f;        /* Main background */
    --bg-secondary: #12121a;       /* Section backgrounds */
    --bg-card: #1a1a26;            /* Card backgrounds */
    --accent: #d4a5d4;             /* Primary accent color */
    --accent-soft: #b084b0;        /* Hover accent */
}
```

### Adding New Projects

In `index.html`, find the projects section and copy this template:

```html
<div class="project-card">
    <div class="project-header">
        <div>
            <h3>Project Name</h3>
            <div class="project-tech">Tech Stack</div>
        </div>
        <div class="project-icon">🔮</div>
    </div>
    <p class="project-problem"><strong>Problem:</strong> Describe the problem</p>
    <p><strong>Solution:</strong> Describe your solution</p>
    <p>Additional details about the project</p>
    <div class="project-links">
        <a href="GITHUB_URL" class="project-link" target="_blank">
            <span>→</span> View on GitHub
        </a>
    </div>
</div>
```

### Updating Your Information

Edit `index.html` and search for:
- Your name and bio in the hero section
- About section content
- Experience and education in the timeline
- Contact information
- Social media links

### Adding New Skills

Find the skills section in `index.html`:

```html
<span class="skill-item">New Skill</span>
```

## 📧 Setting Up Contact Form

### Option 1: Formspree (Recommended - Free)

1. Go to [Formspree](https://formspree.io/)
2. Sign up for a free account
3. Create a new form
4. Get your form endpoint
5. In `js/script.js`, uncomment the Formspree section and add your form ID:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
});
```

### Option 2: EmailJS

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up and follow their integration guide
3. Update `js/script.js` with EmailJS code

## 🔄 Updating Your Portfolio

### Using GitHub Website

1. Go to your repository
2. Navigate to the file you want to edit
3. Click the pencil icon (Edit)
4. Make changes
5. Scroll down and click "Commit changes"

### Using Git

```bash
# Make your changes to files

# Stage changes
git add .

# Commit
git commit -m "Update: Description of changes"

# Push to GitHub
git push origin main
```

Changes will be live in 1-2 minutes!

## 🎯 SEO Tips

1. Add a custom domain (optional but professional)
2. Update meta tags in `index.html`
3. Add more descriptive alt texts for future images
4. Create a `sitemap.xml`
5. Submit to Google Search Console

## 📱 Testing

Test your website on:
- Different browsers (Chrome, Firefox, Safari, Edge)
- Different devices (phone, tablet, desktop)
- Different screen sizes using browser dev tools

## 🐛 Troubleshooting

**Site not loading?**
- Check GitHub Pages is enabled in Settings
- Wait 2-3 minutes after pushing changes
- Ensure repository name is correct: `username.github.io`

**Images not showing?**
- Check file paths are correct
- Ensure files are in the right folders

**Form not working?**
- Configure Formspree or EmailJS as described above
- Check console for errors (F12 in browser)

## 📝 License

This is your personal portfolio - feel free to use and modify as needed!

## 🤝 Need Help?

- [GitHub Pages Documentation](https://docs.github.com/pages)
- [HTML/CSS Resources](https://developer.mozilla.org/en-US/docs/Web)
- [Git Tutorial](https://git-scm.com/docs/gittutorial)

---

Built with care by Aparajita Shrivastava
