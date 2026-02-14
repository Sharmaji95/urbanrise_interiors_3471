# Urbanrise Interiors - Link-in-Bio Page

## Project Overview
This project is a premium, responsive "Link-in-Bio" style landing page designed for **Urbanrise Interiors**. It serves as a central hub for clients to browse services, connect via social media, and contact the business directly.

## Features
- **Premium Design**: Dark theme with gold accents (`#d4af37`), glassmorphism effects, and subtle background animations.
- **Responsive Layout**: Mobile-first design that adapts perfectly to desktops and tablets.
- **Service Grid**: 2-column grid layout displaying specialist services with icons.
- **Interactive Elements**:
    - **Header Actions**: Direct "Chat on WhatsApp", "Call Now", and "Save Contact" buttons.
    - **Social Media Dropdown**: Smoothly collapsible section with all social links.
    - **Contact Cards**: Prominent "Visit Website" and "Office Address" cards.
- **Brand Assets**: Custom generated Logo and Favicon.

## File Structure
- `index.html`: Main HTML file containing the structure and content.
- `styles.css`: CSS file containing all styles, animations, and variables.
- `script.js`: JavaScript for interactive features (Social dropdown, Save Contact vCard).
- `logoc.png`: The main logo file used in the header.
- `favicon.png`: The browser tab icon.

## Customization Guide

### 1. Changing Contact Details
Open `index.html` and search for these placeholders to update:
- **Phone**: Search for `919876543210` and replace with your actual number.
- **Email**: Search for `contact@urbanriseinteriors.com`.
- **Website**: Search for `urbanriseinteriors.com`.
- **Address**: Text inside the "Office Address" card.

### 2. Updating Services
In `index.html`, look for the `<main class="links-container grid-layout">` section. Each service is an `<a>` tag. You can duplicate one to add more or edit the text/icons of existing ones.

### 3. Changing Colors
Open `styles.css` and modify the `:root` variables at the top:
```css
:root {
    --accent-color: #d4af37; /* Change this for main brand color */
    --bg-color: #0d0d10;     /* Background color */
}
```

### 4. Updating Social Links
In `index.html`, inside the `social-grid`, update the `href="#"` attributes with your actual social media profile URLs.

## Deployment
You can deploy this page for free using **GitHub Pages** or **Netlify**:
1.  **Netlify**: Drag and drop the `Urbanrise interiors` folder onto the Netlify dashboard.
2.  **GitHub Pages**: Push the code to a repository and enable GitHub Pages in settings.

## Credits
- Icons: [Font Awesome](https://fontawesome.com)
- Fonts: [Google Fonts (Outfit)](https://fonts.google.com/specimen/Outfit)
