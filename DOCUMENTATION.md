
# Urbanrise Interiors - Website Documentation & Maintenance Guide

## 1. Project Overview & File Structure

This folder contains two main parts: the **Link-in-Bio Page** (root directory) and the **Main Website** (inside `website/` folder).

### Root Directory (Link-in-Bio)
*   **`index.html`**: The main file for the Link-in-Bio page.
*   **`styles.css`**: Basic styling for the Link-in-Bio page.
*   **`script.js`**: Handles "Save Contact" button and basic interactions.
*   **`logo-profile.png`**: The circular profile logo.
*   **`favicon-circle.png`**: The browser tab icon.

### Website Folder (`website/`)
*   **`index.html`**: The complete multi-section website (Home, About, Services, Portfolio, Contact).
*   **`styles.css`**: Detailed styling for the main website (Dark & Gold theme).
*   **`script.js`**: Controls the mobile menu, sticky navbar, scrolling, and lightbox for images.
*   **`assets/`**: Contains images and videos (e.g., Reels).

### Social Assets (`social/`)
*   Contains all your logos, banners (YouTube, Facebook), and WhatsApp catalogue images.

---

## 2. Common Updates (How-To)

### A. Updating Contact Information (Phone, Address, WhatsApp)
You need to update this in **3 places**:
1.  **Link-in-Bio (`index.html`)**: Search for `9034795106` and replace it. Also check the `script.js` file for the "Save Contact" button details.
2.  **Main Website (`website/index.html`)**: Search for the phone number and address in the Top Bar, Contact Section, and Footer.
3.  **Floating Buttons (`website/script.js`)**: The floating WhatsApp and Call buttons are created here. Search for `floatingButtonsHTML` to update the numbers.

### B. Changing the Logo
1.  **Link-in-Bio**: Replace `logo-profile.png` with your new file (keep the same name to avoid code changes).
2.  **Main Website**: Replace `logoc.png` or update the `<img>` tag in `website/index.html`.

### C. Updating "Our Story" / Stats
Open `website/index.html` and search for **"Our Story"**. You will find the numbers for "100+ Projects", "5+ Years Experience". Just edit the text between the `<h3>` tags.

---

## 3. Managing Services

### Adding/Removing Services on Main Website
Open `website/index.html` and look for the **"My Services"** section (`id="services"`).
*   **To Add**: Copy an entire `<div class="service-card">...</div>` block and paste it below the last one. Change the title, icon (using FontAwesome classes), and description.
*   **To Remove**: Delete the entire `<div class="service-card">` block.

---

## 4. Managing Portfolio / Reels

### Changing Reel Videos
The videos are located in `website/assets/Reels/`.
1.  Name your new video files `reel-1.mp4`, `reel-2.mp4`, etc.
2.  Replace the existing files in that folder.
3.  The website will automatically show the new videos (you may need to clear your browser cache).

### Adding More Reels
1.  Add your new video file (e.g., `reel-6.mp4`) to the folder.
2.  Open `website/index.html`.
3.  Find the `reels-scroller` section.
4.  Copy one of the `<div class="reel-item">...</div>` blocks.
5.  Paste it and update the `src` to point to your new video file.

---

## 5. Visual Customization (Colors & Fonts)

### Colors
The website uses a **Golden & Black** theme defined in `website/styles.css`.
To change the main colors, look for the `:root` section at the top of the file:
*   `--primary-color`: `#d4af37` (The Gold color)
*   `--bg-dark`: `#0a0a0a` (Main dark background)

### Fonts
The standard font is **"Outfit"**. If you want to change it:
1.  Go to [Google Fonts](https://fonts.google.com).
2.  Select a font and get the `<link>` code.
3.  Replace the font link in the `<head>` section of your HTML files.
4.  Update `font-family` in `website/styles.css`.

---

## 6. Social Media Assets
All your professional assets are stored in the `social/` folder:
*   **YouTube Banners**: `banner-youtube-new-luxury.png` (and others).
*   **Facebook Cover**: `banner-facebook-luxury.png`.
*   **WhatsApp Catalogue**: Images like `catalogue-interior.png`.
*   **Logos**: `logo-whatsapp.png`, `logo-instagram.png`, etc.

---

## 7. Deployment
When you are ready to go live:
1.  Upload the **entire folder** to your hosting provider (like Hostinger, GoDaddy, or Netlify).
2.  Ensure `index.html` is in the main directory.
