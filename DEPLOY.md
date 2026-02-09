# 🚀 Quick Deployment Guide

Follow these steps to get your portfolio live on GitHub Pages in 10 minutes!

## Step 1: Prepare Your Files

✅ You have:
- `index.html`
- `css/styles.css`
- `js/script.js`
- `README.md`
- `.gitignore`

📌 TODO:
- Add your resume PDF to `assets/resume.pdf`

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `aparajitashri04.github.io` (must match your username!)
3. Make it **Public**
4. Don't initialize with README (we already have one)
5. Click **Create repository**

## Step 3: Upload to GitHub

### Method 1: Using GitHub Website (Easiest)

1. On the repository page, click "uploading an existing file"
2. Drag ALL folders and files from your portfolio-website folder
3. Make sure the structure looks like:
   ```
   index.html
   css/
   js/
   assets/
   README.md
   ```
4. Write commit message: "Initial commit: Portfolio website"
5. Click "Commit changes"

### Method 2: Using Git Commands

```bash
# Open terminal/command prompt
cd path/to/portfolio-website

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# Add remote (replace with YOUR repository URL)
git remote add origin https://github.com/aparajitashri04/aparajitashri04.github.io.git

# Push
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Source":
   - Branch: Select `main`
   - Folder: Select `/ (root)`
5. Click **Save**

## Step 5: Wait & Visit

🎉 Your site will be live in 1-3 minutes at:
**https://aparajitashri04.github.io**

## Next Steps

### Set Up Contact Form (Optional but Recommended)

1. Go to https://formspree.io/
2. Sign up with GitHub
3. Create a new form
4. Copy your form endpoint (looks like: `https://formspree.io/f/abc123xyz`)
5. Edit `js/script.js`:
   - Find the Formspree section (around line 52)
   - Uncomment the code
   - Replace `YOUR_FORM_ID` with your actual form ID (e.g., `abc123xyz`)
6. Commit and push changes

### Add Your Resume

1. Export your resume as PDF
2. Name it `resume.pdf`
3. Upload to `assets/` folder in GitHub
4. Test the download button on your live site

### Custom Domain (Optional)

Want `aparajita.dev` instead of `aparajitashri04.github.io`?

1. Buy a domain from Namecheap, GoDaddy, or Google Domains
2. In GitHub repo Settings → Pages → Custom domain
3. Follow GitHub's DNS configuration guide
4. Wait for SSL certificate (24-48 hours)

## Making Updates

Whenever you want to update your portfolio:

### Via GitHub Website:
1. Go to repository
2. Navigate to file
3. Click pencil icon (Edit)
4. Make changes
5. Commit changes
6. Wait 1 minute → Changes are live!

### Via Git:
```bash
# Make changes to files
git add .
git commit -m "Update: [what you changed]"
git push
```

## Customization Ideas

- ✨ Change color scheme (edit CSS variables)
- 📸 Add project screenshots/GIFs
- 🎨 Add your profile photo
- 📝 Write blog posts (add a blog section)
- 🏆 Add achievements/certifications section
- 📊 Add GitHub stats widget

## Common Issues

**Site shows 404?**
- Check repository name is exactly `your-username.github.io`
- Make sure GitHub Pages is enabled
- Wait 2-3 minutes

**Resume download not working?**
- Ensure `resume.pdf` is in `assets/` folder
- Check file path in HTML

**Contact form not working?**
- Set up Formspree as described above
- Check browser console for errors (F12)

## Resources

- 📚 [GitHub Pages Docs](https://docs.github.com/pages)
- 🎓 [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- 💬 [Formspree Docs](https://help.formspree.io/)
- 🎨 [CSS Color Picker](https://coolors.co/)

---

**Need help?** Open an issue on GitHub or email: aparajitashrivastava04@gmail.com

Good luck! 🚀
