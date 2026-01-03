# Portfolio Website

## Overview
A personal portfolio website for Mohamed Kaid showcasing skills, projects, and contact information. The site is built with static HTML, CSS, and JavaScript.

## Project Structure
- `index.html` - Home page with animated typing effect and CV download
- `about.html` - About page with skills and hobbies
- `projects.html` - Portfolio of programming projects
- `CSS/` - Stylesheets
  - `main2.css` - Main styles
  - `colorSets.css` - Color definitions
- `JS/` - JavaScript files
  - `my_script.js` - Floating animation objects
- `Images/` - Project images and logos
- `files/` - Downloadable files (resume PDF)

## Technologies
- HTML5
- CSS3
- JavaScript (vanilla)
- Typed.js (CDN) - Typing animation effect
- Font Awesome (CDN) - Icons

## Running Locally
The site is served as static files using Python's built-in HTTP server on port 5000:
```
python -m http.server 5000 --bind 0.0.0.0
```

## Deployment
Configured for static deployment. The entire root directory is served as the public directory.
