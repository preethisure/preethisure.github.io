# Portfolio Website

A clean, responsive portfolio website to showcase your projects, resume, and personal information.

## Setup for GitHub Pages

1. Create a new repository on GitHub named `your-username.github.io`
2. Upload these files to the repository
3. Go to Settings > Pages in your repository
4. Select "Deploy from a branch" and choose "main"
5. Your site will be available at `https://your-username.github.io`

## Customization

### Update Personal Information
- Replace "Your Name" in `index.html` with your actual name
- Update the hero section with your title/description
- Add your contact information in the contact section

### Add Your Content
- **About Section**: Replace placeholder text with your bio
- **Projects**: Add your project details, descriptions, and links
- **Resume**: Update with your actual experience, education, and skills
- **Contact**: Add your real email, LinkedIn, and GitHub links

### Add More Projects
Copy this structure in the projects section:
```html
<div class="project-card">
    <h3>Project Name</h3>
    <p>Project description goes here.</p>
    <a href="project-link" class="btn">View Project</a>
</div>
```

### Customize Colors
Edit the CSS variables in `style.css`:
- Primary color: `#3498db` (blue)
- Secondary color: `#2c3e50` (dark blue)
- Background gradient: Update the `#hero` section

## File Structure
```
portfolio/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
└── README.md          # This file
```
