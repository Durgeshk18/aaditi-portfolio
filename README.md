# Aaditi Kulkarni — Portfolio Site

A static one-page portfolio (plain HTML/CSS/JS, no build step) summarizing Aaditi's experience
as a Financial Systems Analyst / SAP Commerce Cloud Developer, ready to deploy on Vercel via GitHub.

## Files
- `index.html` — page content
- `style.css` — styling
- `script.js` — nav, scroll reveal, resume dropdown
- `assets/` — both resume PDFs (linked from the "Resume" dropdown in the header)
- `vercel.json` — clean URLs config

## Deploy via GitHub + Vercel (recommended)

1. **Create a GitHub repo** (e.g. `aaditi-portfolio`) at github.com/new — keep it empty (no README).
2. **Push this folder to it.** From inside this `portfolio` folder, run:
   ```
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/aaditi-portfolio.git
   git push -u origin main
   ```
3. **Import to Vercel:**
   - Go to vercel.com/new
   - Select your GitHub repo
   - Framework Preset: **Other**
   - Build Command: leave blank
   - Output Directory: leave blank (root)
   - Click **Deploy**
4. Vercel gives you a live URL (e.g. `aaditi-portfolio.vercel.app`) in under a minute.
   Every future push to `main` auto-redeploys.

### Alternative: drag-and-drop (no GitHub needed)
Go to vercel.com/new, choose "Deploy without Git," and drag this `portfolio` folder in directly.

## Custom domain
Once deployed, add a custom domain (e.g. `aaditikulkarni.com`) under Project Settings → Domains.

## Updating content later
Edit the text directly in `index.html` (each section is clearly commented: HERO, ABOUT, EXPERIENCE,
SKILLS, PROJECTS, CERTIFICATIONS, EDUCATION, CONTACT). Push to `main` and Vercel redeploys automatically.
