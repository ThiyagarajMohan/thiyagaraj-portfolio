# Thiyagaraj M — Developer Portfolio

A responsive personal portfolio built with plain HTML, CSS and JavaScript. No React, build tools or package installation are required.

## 1. Run the website

1. Extract `thiyagaraj-portfolio.zip`.
2. Open the `thiyagaraj-portfolio` folder in VS Code.
3. Open `index.html` in your browser. You can also use the VS Code **Live Server** extension and choose **Open with Live Server**.
4. Edit the files, save, and refresh the browser.

## 2. Add your resume

Put your latest resume PDF inside the `assets` folder and name it exactly:

`resume.pdf`

The two Resume links in the website already point to `assets/resume.pdf`. The resume file is intentionally not included because you should add your latest, verified PDF.

## 3. Update your project links

Open `index.html` and search for `github.com/Thiyagaraj`. Replace each general GitHub profile link with the exact repository URL for that project when the repository is ready.

The 3D ThreeAxis card already links to:
`https://github.com/thiyagarajm39-boop/3Dthreeaxiss`

## 4. Update your details

Search in `index.html` for the email, LinkedIn URL, location, education and project descriptions. Update anything that has changed before publishing.

## 5. Publish with GitHub Pages

1. Create a GitHub repository, for example `thiyagaraj-portfolio`.
2. Upload the contents of this folder (make sure `index.html` is at the repository root).
3. Open the repository **Settings → Pages**.
4. Under Build and deployment, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish your website. Use the URL shown in the Pages settings.

## Folder structure

```text
thiyagaraj-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── resume.pdf  (add your own PDF)
└── README.md
```

## Notes

- The site uses Google Fonts when an internet connection is available. It falls back to generic sans-serif fonts if not.
- This is a static portfolio. The email button opens the visitor's email application; it does not submit a server-side contact form.
- Review all project descriptions and repository URLs so they accurately reflect what you have completed.
