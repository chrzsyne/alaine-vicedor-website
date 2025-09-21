# Alaine Vicedor - Professional Website

A modern, responsive personal website showcasing Alaine Vicedor's professional experience, skills, and achievements as a Digital Transformation Specialist.

## Features

- **Modern Design**: Clean, professional design with dark/light mode toggle
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 15 and optimized for speed
- **SEO Ready**: Includes meta tags, sitemap, and robots.txt
- **Accessibility**: WCAG compliant with proper focus states and semantic HTML
- **Interactive**: Smooth scrolling navigation and scroll-to-top functionality

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd alaine-vicedor-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
public/
├── robots.txt               # SEO robots file
└── sitemap.xml             # SEO sitemap
```

## Sections

- **Home**: Hero section with professional headshot and call-to-action
- **About**: Professional summary and key achievements
- **Experience**: Detailed work history with accomplishments
- **Skills**: Technical and soft skills organized by category
- **Education**: Academic background and certifications
- **Contact**: Contact information and social links

## Customization

### Updating Content

Edit the content in `src/app/page.tsx` to update:
- Personal information
- Work experience
- Skills and certifications
- Contact details

### Styling

Modify `src/app/globals.css` for:
- Color schemes
- Typography
- Custom animations
- Print styles

### SEO

Update `src/app/layout.tsx` for:
- Meta descriptions
- Open Graph tags
- Twitter cards
- Keywords

## Performance

The website is optimized for performance with:
- Static generation for fast loading
- Image optimization with Next.js Image component
- CSS optimization with Tailwind CSS
- Minimal JavaScript bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Alaine Vicedor. All rights reserved.

## Contact

- Email: alainevicedor@gmail.com
- LinkedIn: [linkedin.com/in/advicedor](https://www.linkedin.com/in/advicedor/)
- GitHub: [github.com/chrzsyne](https://github.com/chrzsyne)