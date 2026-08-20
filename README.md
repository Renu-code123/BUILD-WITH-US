# 🚀 BUILD WITH US — Premium Freelance Digital Services Studio Website

> **Your Idea. Our Skills. Let's Build It.**  
> *One Place. Multiple Solutions.*

---

## 🌟 Overview

**BUILD WITH US** is a production-grade, state-of-the-art web application built for a digital services studio. Inspired by top-tier modern creative tech studios (such as Razorpay, Linear, Framer, Vercel, and Stripe), the platform is designed to convert visitors into clients within seconds through strong typographic hierarchy, vibrant gradient lighting, sleek glassmorphism, and smooth micro-interactions.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Animations**: Custom CSS Keyframe Animations & [Framer Motion](https://www.framer.com/motion/)
- **Design Tokens**:
  - Primary Background: `#05050A`
  - Secondary Background: `#0A0A12`
  - Surface Card: `#10101C` with `border-white/10`
  - Accent Gradient: `#FF3CAC` (Pink) → `#784BA0` (Purple) → `#2B86C5` (Blue/Cyan)
  - Typography: *Plus Jakarta Sans* & *Playfair Display*

---

## ✨ Key Features & Sections

### 1. 🧭 Sticky Glassmorphic Navigation Bar
- Scroll-responsive backdrop blur (`backdrop-blur-xl bg-[#05050A]/85`)
- Features official **BUILD WITH US** logo badge
- Direct jump links to all major sections
- Mobile slide-down menu overlay

### 2. ⚡ Immersive Razorpay-Inspired Hero Section
- Sparkle announcement badge: `✦ DIGITAL SERVICES, BUILT AROUND YOU`
- Main heading with vibrant gradient highlights: **We Build Your Ideas Into Digital Reality.**
- Interactive composition featuring 3D floating mockup cards (Laptop Website, Phone Portfolio, ATS Resume, Event Poster) connected with animated SVG rays and pulsing glow spots.

### 3. 🛡️ Trust & Value Strip
- Minimalist indicators highlighting: *Modern Design*, *Mobile Responsive*, *Affordable Pricing*, *Fast Delivery*, and *Personal Support*.

### 4. 💼 Core Services & Interactive Detail Modals
Five tailored services:
1. **Website Development** (Starting at ₹1,499+)
2. **Portfolio Creation** (Starting at ₹999+)
3. **Resume & CV Design** (Starting at ₹299+)
4. **Poster & Advertisement Design** (Starting at ₹499+)
5. **Document & Academic Support** (Starting at ₹199+) *(Includes clear disclaimer for legitimate formatting/editing support)*

*Clicking any service card opens a rich Modal detailing inclusions, turnaround time, starting prices, and direct inquiry triggers.*

### 5. 🎨 Filterable Portfolio Grid
- Categories: `All`, `Websites`, `Portfolios`, `Resumes`, `Posters`
- Card hover effects: 1.03x image zoom, card lift, border glow, top-right arrow translation
- Expanded project detail modal with key highlights and tech specs

### 6. 📱 Live Device Frame Showcase
- Interactive laptop container demonstrating responsive web design live
- Viewport mode toggle buttons: **Desktop**, **Tablet**, **Mobile**

### 7. 🔄 4-Step Process Timeline
- 01 Tell Us → 02 Plan → 03 Build → 04 Deliver
- Visual progress line linking all steps together

### 8. 💎 Why Build With Us
- 6 value cards explaining Modern Design, Responsiveness, Fast Delivery, Affordable Pricing, Personal Support, and Privacy.

### 9. 💰 Transparent Pricing Tiers
- Feature checkmarks for Website Starter (₹1,499+), Portfolio (₹999+), and Resume/CV (₹299+)
- Custom quote CTA button

### 10. 👥 Founders & Philosophy
- Two-founder card layout (Rohan Sharma & Ananya Verma) with bios, roles, and skills
- Core philosophy: *"Professional digital work should be accessible, transparent and personal."*

### 11. ⭐ Authentic Testimonials Placeholder
- Clean empty-state design with message: *“Client testimonials will appear here as we complete projects.”* ready for genuine client reviews.

### 12. ❓ Animated FAQ Accordion
- 8 detailed Q&As covering pricing, timelines, revisions, custom bundles, offline delivery, and file handoffs.

### 13. 📩 Project Inquiry Form & WhatsApp Generator
- Validated form fields (Name, Email, WhatsApp, Service, Budget dropdown, Deadline, Description, Reference link)
- Instant WhatsApp prefilled message button generator
- Submission confirmation modal with generated Reference ID (e.g. `BWU-784920`) and timeline breakdown.

---

## 📁 Project Directory Structure

```
c:\Users\RENU\BUILD WITH US\
├── public/
│   ├── logo.png                # Official brand logo
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky Navigation Bar
│   │   │   └── Footer.tsx      # 3-column Footer & Copyright
│   │   ├── modals/
│   │   │   ├── ServiceModal.tsx       # Service Detail Modal
│   │   │   └── InquirySuccessModal.tsx # Post-Inquiry Confirmation
│   │   └── sections/
│   │       ├── Hero.tsx               # 90vh Immersive Hero
│   │       ├── SocialProof.tsx        # Value prop strip
│   │       ├── Services.tsx           # 5 Core Service Cards
│   │       ├── Portfolio.tsx          # Filterable Grid
│   │       ├── DeviceShowcase.tsx     # Device Frame Tester
│   │       ├── Process.tsx            # 4-Step Workflow
│   │       ├── WhyUs.tsx              # 6 Value Cards
│   │       ├── Pricing.tsx            # Pricing Cards
│   │       ├── About.tsx              # Founders & Bio
│   │       ├── Testimonials.tsx       # Reviews Placeholder
│   │       ├── FAQ.tsx                # Accordion Q&As
│   │       └── ContactSection.tsx     # Inquiry Form & WhatsApp
│   ├── data/
│   │   ├── servicesData.ts     # Content for 5 core services
│   │   ├── portfolioData.ts    # Sample showcase projects
│   │   ├── faqData.ts          # 8 core FAQs
│   │   └── pricingData.ts      # Pricing tiers
│   ├── types/
│   │   └── index.ts            # TypeScript definitions
│   ├── App.tsx                 # Main layout & section assembler
│   ├── index.css               # Dark theme variables, glassmorphism & gradients
│   └── main.tsx                # Application entry point
├── index.html                  # HTML5 entry with Google Fonts & Meta SEO
├── package.json                # Project dependencies
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite + Tailwind CSS v4 setup
└── README.md                   # Project documentation
```

---

## ⚡ Local Setup & Development

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation Commands

1. **Clone or navigate to project folder**:
   ```bash
   cd "c:\Users\RENU\BUILD WITH US"
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Local Development Server**:
   ```bash
   npm run dev
   ```
   *Open [http://localhost:5173/](http://localhost:5173/) or [http://127.0.0.1:5173/](http://127.0.0.1:5173/) in your browser.*

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 📄 License & Copyright

© 2026 **Build With Us**. All rights reserved.  
*Your Idea. Our Skills. Let's Build It.*
