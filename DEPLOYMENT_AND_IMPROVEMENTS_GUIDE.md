# 🚀 Build With Us — Website Improvements & Deployment Guide

This document contains a complete roadmap of **website improvement recommendations** (UX, lead capture, SEO, performance) and a **step-by-step production deployment guide** for the **Build With Us** platform.

---

## 📑 Table of Contents
1. [🔍 Website Audit & Improvements](#1--website-audit--improvements)
   - [A. Lead Capture & WhatsApp Integration (Critical)](#a-lead-capture--whatsapp-integration-critical)
   - [B. Connecting Inquiry Form to Email / Google Sheets](#b-connecting-inquiry-form-to-email--google-sheets)
   - [C. SEO, Social Cards & Metadata](#c-seo-social-cards--metadata)
   - [D. Performance & Asset Optimization](#d-performance--asset-optimization)
   - [E. UI/UX & Conversion Enhancements](#e-uiux--conversion-enhancements)
2. [📋 Pre-Deployment Quality Checklist](#2--pre-deployment-quality-checklist)
3. [🌐 Step-by-Step Deployment Guides](#3--step-by-step-deployment-guides)
   - [Option 1: Vercel (Recommended)](#option-1-vercel-recommended)
   - [Option 2: Netlify (Drag & Drop or Git)](#option-2-netlify-drag--drop-or-git)
   - [Option 3: Cloudflare Pages (Global High Performance)](#option-3-cloudflare-pages)
   - [Option 4: GitHub Pages](#option-4-github-pages)
4. [🏷️ Custom Domain & DNS Setup](#4--custom-domain--dns-setup)
5. [🔧 Maintenance & Useful Commands](#5--maintenance--useful-commands)

---

## 1. 🔍 Website Audit & Improvements

### A. Lead Capture & WhatsApp Integration (Critical)

#### 1. Add WhatsApp Phone Number
Currently, the WhatsApp triggers use generic URLs without a recipient phone number.

* **In `src/components/sections/ContactSection.tsx` (Line 76):**
  ```diff
  - window.open(`https://wa.me/?text=${text}`, '_blank');
  + const supportPhone = "919876543210"; // Replace with your country code + phone number
  + window.open(`https://wa.me/${supportPhone}?text=${text}`, '_blank');
  ```

* **In `src/components/layout/Footer.tsx` (Lines 53 & 106):**
  ```diff
  - href="https://wa.me"
  + href="https://wa.me/919876543210"
  ```

#### 2. Update Social Media Links & Support Emails
Replace default placeholder URLs in `src/components/layout/Footer.tsx` and `src/components/sections/ContactSection.tsx`:
* Change `https://instagram.com` to `https://instagram.com/your_handle`
* Change `mailto:hello@buildwithus.com` to your verified email address.

---

### B. Connecting Inquiry Form to Email / Google Sheets

Currently, submitting the form only displays the `InquirySuccessModal` locally without persisting data. Here are two free ways to receive inquiry notifications:

#### Method 1: Web3Forms (Fastest Email Delivery, No Server Needed)
1. Get a free access key at [web3forms.com](https://web3forms.com).
2. In `src/components/sections/ContactSection.tsx`, update `handleSubmit`:
   ```typescript
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     if (!validateForm()) return;

     try {
       const response = await fetch("https://api.web3forms.com/v1/submit", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           Accept: "application/json",
         },
         body: JSON.stringify({
           access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
           subject: `New Project Inquiry from ${formData.name} (${formData.service})`,
           ...formData,
         }),
       });

       if (response.ok) {
         setSubmittedInquiry(formData);
       }
     } catch (err) {
       console.error("Failed to submit inquiry", err);
     }
   };
   ```

#### Method 2: Google Sheets Webhook
1. Create a Google Sheet with columns: `Date`, `Name`, `Email`, `Phone`, `Service`, `Budget`, `Deadline`, `Description`, `Reference`.
2. Go to **Extensions ➔ Apps Script** and deploy a web app with `doPost(e)` to append rows automatically.

---

### C. SEO, Social Cards & Metadata

#### 1. Update `index.html` Meta Tags
Add full OpenGraph, Twitter Cards, and search theme colors inside `<head>` in `index.html`:
```html
<!-- Primary Meta Tags -->
<title>Build With Us | Websites, Portfolios, Resumes & Design Services</title>
<meta name="title" content="Build With Us | Websites, Portfolios, Resumes & Design Services" />
<meta name="description" content="Custom modern websites, professional portfolios, ATS-friendly resumes, and promotional design services for students, creators, and businesses." />
<meta name="theme-color" content="#05050A" />

<!-- Open Graph / Facebook / WhatsApp Preview -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://yourdomain.com/" />
<meta property="og:title" content="Build With Us | Websites, Portfolios, Resumes & Design Services" />
<meta property="og:description" content="Your Idea. Our Skills. Let's Build It. Premium digital services built around you." />
<meta property="og:image" content="https://yourdomain.com/logo.png" />

<!-- Twitter Cards -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://yourdomain.com/" />
<meta property="twitter:title" content="Build With Us | Websites, Portfolios, Resumes & Design Services" />
<meta property="twitter:description" content="Custom modern websites, professional portfolios, ATS-friendly resumes, and promotional design services." />
<meta property="twitter:image" content="https://yourdomain.com/logo.png" />
```

#### 2. Create `public/robots.txt`
```txt
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

#### 3. Create `public/sitemap.xml`
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2026-08-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

### D. Performance & Asset Optimization

1. **Lazy Loading Images:** Add `loading="lazy"` on all showcase and portfolio images to improve Core Web Vitals (FCP & LCP).
2. **Local Modern Image Formats:** Convert key static images to `.webp` or `.avif` inside `public/` or `src/assets/`.
3. **Font Preconnect:** Ensure Google Fonts connections in `index.html` are preconnected (already included).

---

### E. UI/UX & Conversion Enhancements

1. **Floating WhatsApp / Quick Contact Action Button:**
   Add a sticky bottom-right button for mobile visitors so they can reach you with 1-click anywhere on the landing page.
2. **Interactive Live Demos in Portfolio:**
   Add a `demoUrl` or `viewUrl` field in `src/data/portfolioData.ts` so users can explore live versions of websites you have built.
3. **Interactive Add-On Calculator:**
   Provide toggleable checkboxes in the pricing section for common add-ons (Domain registration, 24-hour fast delivery, extra revisions).

---

## 2. 📋 Pre-Deployment Quality Checklist

Before pushing to production, verify the following:

- [ ] **Typecheck and Build Test:** Run `npm run build` locally. Ensure the `dist/` directory generates without errors.
- [ ] **Contact Info Updated:** Real WhatsApp number and email configured.
- [ ] **Working Inquiry Endpoint:** Connected to Web3Forms, Formspree, or EmailJS.
- [ ] **Favicon & Logo Verified:** Check `/public/logo.png` and `/public/favicon.svg`.
- [ ] **Mobile Responsiveness:** Tested on mobile viewport sizes (375px to 768px).

---

## 3. 🌐 Step-by-Step Deployment Guides

---

### Option 1: Vercel (Recommended)
*Fastest deployment, zero configuration for Vite + React, automated GitHub CI/CD, and free SSL.*

#### Step 1: Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit for production"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/build-with-us.git
git push -u origin main
```

#### Step 2: Connect with Vercel
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **Add New...** ➔ **Project**.
3. Select your `build-with-us` repository and click **Import**.
4. Confirm build settings:
   - **Framework Preset:** `Vite`
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.
6. Your website will be live at `https://build-with-us.vercel.app`!

---

### Option 2: Netlify (Drag & Drop or Git)

#### Method A: Direct Drag & Drop (No Git Required)
1. Run local build:
   ```bash
   npm run build
   ```
2. Go to [app.netlify.com](https://app.netlify.com) and log in.
3. Go to **Sites** and drag the generated **`dist`** folder into the upload box.
4. Your website is deployed instantly.

#### Method B: Automated Git Integration
1. In Netlify, click **Add new site** ➔ **Import an existing project**.
2. Connect your GitHub repository.
3. Set **Build command** to `npm run build` and **Publish directory** to `dist`.
4. Click **Deploy build-with-us**.

> **Note for Netlify SPA Redirects:**
> Create a file at `public/_redirects` with:
> ```
> /*    /index.html   200
> ```

---

### Option 3: Cloudflare Pages
*Global high-speed edge delivery with free custom domains and DDoS protection.*

1. Log in to [dash.cloudflare.com](https://dash.cloudflare.com).
2. Navigate to **Workers & Pages** ➔ **Create application** ➔ **Pages** ➔ **Connect to Git**.
3. Choose your repository.
4. Set:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**.

---

### Option 4: GitHub Pages

1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. In `vite.config.ts`, add the base repository path:
   ```typescript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import tailwindcss from '@tailwindcss/vite';

   export default defineConfig({
     plugins: [react(), tailwindcss()],
     base: '/build-with-us/' // Your repository name
   });
   ```
3. In `package.json`, add deploy scripts:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "tsc && vite build",
     "preview": "vite preview",
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run:
   ```bash
   npm run deploy
   ```
5. In your GitHub repository **Settings ➔ Pages**, select `gh-pages` branch as the source.

---

## 4. 🏷️ Custom Domain & DNS Setup

To attach your own domain (e.g., `buildwithus.com` or `buildwithus.in`):

### 1. In Vercel / Netlify / Cloudflare:
- Go to **Project Settings** ➔ **Domains**.
- Enter your domain (e.g., `buildwithus.in`).

### 2. In your Domain Registrar (GoDaddy, Namecheap, Hostinger, Cloudflare):
Go to DNS Management and add these two records:

| Type | Name / Host | Value / Target | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` *(for Vercel)* | Automatic / 300 |
| **CNAME** | `www` | `cname.vercel-dns.com` *(for Vercel)* | Automatic / 300 |

*(If using Netlify or Cloudflare Pages, use the DNS target provided in their dashboard settings).*

SSL certificate is automatically issued within 10–15 minutes.

---

## 5. 🔧 Maintenance & Useful Commands

| Task | Command | Description |
| :--- | :--- | :--- |
| **Start Local Dev Server** | `npm run dev` | Runs local hot-reloading development server on `http://localhost:5173` |
| **Production Build** | `npm run build` | Validates TypeScript and creates optimized bundles in `/dist` |
| **Preview Build Locally** | `npm run preview` | Runs a local server serving the compiled `/dist` output |

---

*Document created for the **Build With Us** web application.*
