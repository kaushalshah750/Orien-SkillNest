# SkillNest

**SkillNest** is a modern, single-page educational website built for a coaching institute. It showcases courses, testimonials, batch timings, and contact options — all wrapped in a clean, responsive, SEO-ready design.

> “Guidance. Focus. Results.”

---

## 🌐 Live Preview

[🔗 View Live Site](https://skillnest.mrkaushalshah.com/)

---

## 🚀 Features

- ✅ **Single Page Application (SPA)**
- 🎓 Responsive, mobile-first design with TailwindCSS
- 🧠 Built using Angular 19 with standalone components
- ✨ Animated hamburger navigation
- 💬 Functional contact form powered by Supabase
- 🔍 SEO-optimized with metadata, Open Graph tags, and favicon
- 🖼️ Custom OG banner for link previews

---

## 🛠 Tech Stack

| Frontend                    | Backend        | Deployment     |
|-----------------------------|----------------|----------------|
| Angular 19, TailwindCSS 3.4 | Supabase DB    | AWS EC2, Nginx |

---

## 📦 Project Structure

```
src/
├── app/
│   ├── components/        # Navbar, footer, reusable components
│   ├── sections/          # Hero, Courses, Testimonials, etc.
│   ├── contact/           # Contact form with Supabase
├── assets/                # Images, logo, favicon
├── styles.scss            # Tailwind and global styles
├── index.html             # Meta tags, OG setup
```

---

## 📋 Getting Started

```bash
# Clone the repo
git clone https://github.com/kaushalshah750/Orien-SkillNest.git
cd Orien-SkillNest

# Install dependencies
npm install

# Run locally
ng serve --open
```

> Make sure Node.js and Angular CLI are installed globally.

---

## 🔧 Environment Variables (if using Supabase)

Create a `.env` file or use environment-specific injection:

```bash
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-anon-or-service-role-key
```

---

## 📮 Contact Form Setup

This project uses **Supabase** for handling contact form submissions.  
You’ll need a `skillnest` table with:

| Field   | Type     |
|---------|----------|
| name    | Text     |
| email   | Text     |
| message | Text     |

---

## 📈 SEO Setup

Includes:
- Dynamic `<title>` and `<meta description>` per section
- Open Graph + Twitter meta tags
- `favicon.ico` and OG image (`1200x630`)

---

## 🖼 Branding

- 🪪 Logo: `assets/images/logo-white.png`
- 🎨 Color Palette:
  - Primary: `#0A2647`
  - Secondary: `#2C74B3`
  - Accent: `#F6C90E`

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 💡 Future Enhancements

- [ ] Blog module with Supabase CMS
- [ ] Scroll animations (AOS or Angular Animations)
- [ ] Testimonials slider (Swiper.js)
- [ ] Admin panel for form entries

---

## 🙌 Acknowledgements

Crafted with ❤️ by [Kaushal Shah](https://www.mrkaushalshah.com)  
Helping businesses grow online — one website at a time.