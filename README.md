# M. Manojkumar - Python Full Stack Developer Portfolio

A responsive, high-performance developer portfolio built with **React 19**, **Tailwind CSS v4**, and **Motion** (Framer Motion scroll animations).

---

## 🚀 Features

- **Interactive Hero Section**:
  - Code Terminal Simulator showcasing developer profile in Python.
  - Floating tech stack badges (`React 19`, `Python & Django`).
  - Quick action buttons (View Projects, Download CV, Copy Email).
  - Direct links to GitHub, LinkedIn, Email, and Phone.

- **Dynamic Scroll Animations**:
  - Top scroll progress bar driven by `useScroll` and `useSpring`.
  - Staggered scroll-triggered reveals (`whileInView`) for sections, cards, and skill bars.
  - Floating Back-to-Top button with quick resume shortcut.

- **Technical Skills Showcase**:
  - Filterable tabs (`All`, `Frontend`, `Backend`, `Database & Tools`).
  - Animated proficiency indicators for React.js, JavaScript (ES6+), Python, Django, SQL, Tailwind CSS, and Git.

- **Featured Projects**:
  - **Subscription Billing Management System**:
    - Complete resume project breakdown with bullet points.
    - **Interactive Live Simulator Modal**: Allows recruiters and visitors to select plans, toggle monthly/annual billing, subscribe, and witness real client-side state persistence via `localStorage`.
  - **Student & College Management System**: Django MVT, SQL ORM, and REST endpoints.
  - **Developer Portfolio**: React 19 and modern CSS architecture.

- **Certifications & Education**:
  - SLA Institute — Python Full Stack Development (2026).
  - IBM — Full Stack Development (2026).
  - Vertical timeline covering Bachelor of Business Administration (BBA - 2023), 12th GHSS (2020), and 10th GHSS (2018).

- **Resume Viewer & PDF Printer**:
  - One-click CV modal displaying the exact resume format with a print/save as PDF button.

- **Interactive Contact Form**:
  - Instant validation, direct email/phone copy buttons, and celebratory confetti upon message submission.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript (ES6+)
- **Styling**: Tailwind CSS v4, PostCSS
- **Animations**: Motion (`motion/react`), Canvas Confetti
- **Icons**: Lucide React + custom SVG icons
- **Build Tool**: Vite 8

---

## 💻 Getting Started

The project is ready in your folder:
```bash
cd D:\Frontend\PROJECT\portfolio_react
```

### Run the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
```
The optimized production files will be generated in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```

---

## 📝 Customization

All personal information, project highlights, skills, and links can be easily edited in:
```
src/data/portfolioData.js
```
