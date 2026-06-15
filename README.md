# Cert Mastery

A mobile-friendly PWA for studying for certification exams — practice questions with explanations, comprehensive study notes, and timed tests.

## Certifications covered

- **AWS Certified Cloud Practitioner (CLF-C02)** — 300 questions, 7 note sections
- **CompTIA Security+ (SY0-701)** — 300 questions, 8 note sections
- **CISSP** — 300 questions, 9 note sections
- **PMP** — 300 questions, 8 note sections
- **NCE (National Counselor Examination, NBCC)** — 300 questions, 15 note sections
- **NCMHCE (National Clinical Mental Health Counseling Examination, NBCC)** — 300 questions, 10 note sections

**Total: 1,800 questions + comprehensive study notes**

## Features

- 🏠 **Pick a cert** from the home screen
- 📚 **Study Notes** — comprehensive reference for each cert
- ✏️ **Practice Mode** — all questions, instant feedback
- ⏱️ **Test Mode** — pick N questions (5-100), optional 1-min/question timer, scored
- 📊 **Progress Tracking** — saved locally with per-cert accuracy
- 📱 **Installable PWA** — add to home screen, works offline

## Project structure

```
cert-study-pwa/
├── index.html              # App entry point
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker (offline cache)
├── css/style.css           # Styles
├── js/app.js               # App logic
├── data/                   # Question + note data
│   ├── questions*.js       # Question data files
│   ├── notes*.js           # Study notes
│   └── ...
└── icons/                  # PWA icons
```

Each cert's questions are split into `questions*.js` files (e.g., `questions_aws_p1.js`, `questions_aws_p2.js`). To add more questions, just append to the array in the relevant file.

## Local development

```bash
# Serve locally
python3 -m http.server 8000
# Open http://localhost:8000
```

No build step. No dependencies. Just static files.

## Deployment

This is a static site — deploy anywhere:

- **Netlify**: drag-and-drop the folder, or connect the GitHub repo
- **Vercel**: `vercel deploy`
- **GitHub Pages**: push to a repo, enable Pages in settings
- **AWS S3 + CloudFront**: upload to S3, enable static hosting

## License

Personal study aid. Questions and notes are original content.
