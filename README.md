# TDL Home Land — React + Tailwind CSS Portfolio Website

A modern, production-grade property portfolio website for **TDL Home Land**,
Wadduwa, Sri Lanka. Built with React 18, Tailwind CSS v3, and Framer Motion.

---

## Tech Stack

| Layer       | Technology                        |
|-------------|-----------------------------------|
| Framework   | React 18 + Vite                   |
| Styling     | Tailwind CSS v3 (custom tokens)   |
| Routing     | React Router DOM v6               |
| Animations  | Framer Motion v11                 |
| Icons       | Lucide React                      |
| Fonts       | Playfair Display + DM Sans        |
| Deployment  | Netlify / Vercel / Hostinger      |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          Sticky nav, transparent → solid on scroll
│   ├── Footer.jsx          Dark green 3-col footer
│   ├── PropertyCard.jsx    Listing card with hover effects
│   ├── WhatsAppFAB.jsx     Floating WhatsApp button
│   └── Animate.jsx         Reusable Framer Motion wrappers
├── pages/
│   ├── Home.jsx            Hero + Services + Listings + Why Us + Testimonials + CTA
│   ├── Properties.jsx      Search + Type filter + Full grid
│   ├── About.jsx           Story + Values + Stats + Office
│   └── Contact.jsx         Form + Contact info + Google Map
├── data/
│   └── index.js            All properties, services, stats, testimonials
├── App.jsx                 Router + Layout wrapper
├── main.jsx                ReactDOM entry
└── index.css               Tailwind directives + custom components
```

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## Customisation Checklist

### Replace placeholder content
- [ ] `src/data/index.js` — Update property listings with real data
- [ ] Phone: replace `+94XXXXXXXXX` in `Navbar.jsx`, `Footer.jsx`, `WhatsAppFAB.jsx`, `Contact.jsx`
- [ ] Email: replace `info@tdlhomeland.lk` in `Footer.jsx`, `Contact.jsx`, `About.jsx`
- [ ] Address: update Galle Road address if needed
- [ ] Google Map: update embed URL in `Contact.jsx` with real coordinates

### Property images
Replace emoji thumbnails in `PropertyCard.jsx` with real `<img>` tags:
```jsx
// Replace the emoji span with:
<img src={property.imageUrl} alt={property.title}
     className="w-full h-full object-cover" />
```

### Contact form backend
Hook up the form in `Contact.jsx` to one of:
- **Formspree** (free): `action="https://formspree.io/f/YOUR_ID"`
- **EmailJS** (free tier): `emailjs.send(serviceId, templateId, form)`
- **Netlify Forms**: add `data-netlify="true"` to the form tag

### Stats
Update `src/data/index.js` → `stats` array with real numbers.

### Testimonials
Update `src/data/index.js` → `testimonials` array with real client quotes.

---

## Design Tokens (tailwind.config.js)

| Token         | Color          | Usage                        |
|---------------|----------------|------------------------------|
| forest-700    | #1a3d1c        | Primary dark green           |
| forest-800    | #152f17        | Hero background              |
| gold-500      | #b87333        | Accent / price / CTA         |
| sand-50       | #faf8f5        | Section backgrounds          |
| sand-200      | #e8ddd0        | Borders                      |

---

## Deployment

### Netlify (recommended — free)
```bash
npm run build
# Drag the /dist folder to netlify.com/drop
# Or connect GitHub repo for auto-deploy
```

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### Hostinger
```bash
npm run build
# Upload /dist contents via cPanel File Manager to public_html/
```

---

## Pages

| Route         | Page            | Sections                                           |
|---------------|-----------------|----------------------------------------------------|
| `/`           | Home            | Hero, Stats, Services, Featured, Why Us, Testimonials, CTA |
| `/properties` | Properties      | Search bar, Type filter, Full property grid        |
| `/about`      | About           | Story, Values, Stats, Office & contact details     |
| `/contact`    | Contact         | Form, Contact info cards, Google Maps embed        |

---

## WhatsApp Integration

The floating WhatsApp button (`WhatsAppFAB.jsx`) auto-opens a chat with a
pre-filled message. Update the number and message:

```jsx
href="https://wa.me/94771234567?text=Hi%20TDL%20Home%20Land%2C%20I%27m%20interested%20in%20a%20property."
```

---

Built for TDL Home Land — No. 396/3, Galle Road, Thalpitiya, Wadduwa, Sri Lanka.
