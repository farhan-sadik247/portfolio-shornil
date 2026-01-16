# 🧬 Anika Jahan Shornil - Portfolio Website

A modern, animated portfolio website with a microbiology-inspired theme for Anika Jahan Shornil, a microbiology student at BRAC University.

## ✨ Features

- **Microbiology-Themed Design**: Unique color palette inspired by microscopic organisms, cells, and laboratory aesthetics
- **Modern Animations**: Smooth transitions, floating elements, DNA helix decorations, and glowing effects
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Interactive Sections**:
  - Hero section with animated background
  - About section with personal story
  - Education timeline
  - Skills showcase with progress bars
  - Research & Projects gallery
  - Contact form
- **Smooth Navigation**: Sticky header with active section highlighting
- **Custom Scrollbar**: Themed scrollbar matching the design

## 🚀 Tech Stack

- **Next.js 16.1** - React framework for production
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **CSS Animations** - Custom keyframe animations

## 🎨 Design Theme

The design draws inspiration from:
- Microscopic cellular structures
- DNA double helix patterns
- Laboratory glassware aesthetics
- Petri dish cultures
- Bioluminescent organisms

Color palette:
- Cyan (#00d4ff) - Representing microscopy illumination
- Purple (#a855f7) - DNA and cellular structures
- Pink (#ff006e) - Biological markers
- Green (#00ff88) - Bacterial cultures
- Dark backgrounds - Laboratory environment

## 📦 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
anika-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles and animations
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Main page with all sections
│   └── components/
│       ├── Navigation.tsx   # Sticky navigation bar
│       ├── Hero.tsx         # Hero section with animations
│       ├── About.tsx        # About section
│       ├── Education.tsx    # Education timeline
│       ├── Skills.tsx       # Skills with progress bars
│       ├── Projects.tsx     # Research projects
│       ├── Contact.tsx      # Contact form
│       └── Footer.tsx       # Footer section
├── public/                  # Static assets
└── package.json
```

## 🎯 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update name and tagline
   - Modify university name

2. **About Section** (`src/components/About.tsx`):
   - Edit personal story
   - Update passion statement

3. **Education** (`src/components/Education.tsx`):
   - Add more education entries
   - Update degree information

4. **Skills** (`src/components/Skills.tsx`):
   - Modify skill categories
   - Adjust skill levels

5. **Projects** (`src/components/Projects.tsx`):
   - Add research projects
   - Update project descriptions

6. **Contact** (`src/components/Contact.tsx`):
   - Update email address
   - Add social media links

### Modify Colors

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --primary-cyan: #00d4ff;
  --primary-green: #00ff88;
  --primary-purple: #a855f7;
  /* ... more colors */
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Other Platforms

Build the project:
```bash
npm run build
```

The output will be in the `.next` folder, ready for deployment to any Node.js hosting platform.

## 📝 License

This project is created for Anika Jahan Shornil's personal portfolio.

## 🙏 Acknowledgments

- Inspired by the beauty and complexity of microbiology
- Built with modern web technologies
- Designed with attention to scientific aesthetics

---

Built with 🧬 by focusing on the microscopic details
