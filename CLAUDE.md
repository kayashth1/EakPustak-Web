# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite, hot reload)
npm run build     # Production build → dist/
npm run preview   # Serve the production build locally
npm run lint      # Run ESLint across all .js/.jsx files
```

There is no test suite configured in this project.

## Architecture

This is a single-page marketing/landing site for the **EAK Pustak System** — an educational tablet product for Indian schools. The entire site renders on one page with no client-side routing.

**Component order in `App.jsx` (top → bottom of page):**
`Navbar` → `Header` (hero) → `WhySchoolsStruggle` → `WhyChooseUs` → `PlatformSection` → `StudentOSSection` → `ProductComparison` → `DemoRequestForm` → `Footer`

Several components are commented out in `App.jsx` (`NotJustTablet`, `About`, `Testimonails`, `Contact`) — these exist in `src/components/` but are inactive.

**Asset centralization:** All images and icons are imported once in `src/assets/assets.js` and exported as a single `assets` object. Static data (e.g. `testimonialsData`) also lives there. Components import from this file rather than importing assets directly.

**Styling:** Tailwind CSS v3 with the `Outfit` font (Google Fonts, loaded in `index.css`). Custom CSS animations (`animate-orbit`, `float-slow/medium/fast`) are defined in `index.css` and used for decorative effects. The dominant brand palette is indigo (`#1e1b4b` / `#312e81` / `#4338ca`).

**Form submission:** `DemoRequestForm` uses EmailJS (`@emailjs/browser`) with hardcoded service/template/public key credentials. The form collects school name, contact name, phone, and student count.

**Animations:** Framer Motion is installed but `react-icons` and CSS-based animations (`animate-float`, `animate-spinSlow`, `animate-pulse`) handle most motion. `EakEcosystem` is an interactive SVG-like diagram in the hero that updates its center hub on hover.

**Notifications:** `react-toastify` `<ToastContainer>` is mounted in `App.jsx`; toast calls can be triggered from any component.
