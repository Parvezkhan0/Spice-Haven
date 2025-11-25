# Indian Restaurant Landing Page

A modern, elegant landing page for an Indian restaurant built with Next.js, React, and Tailwind CSS. This single-page application showcases authentic Indian cuisine with a contemporary design aesthetic.

## 🎨 Features

- **Responsive Design** - Mobile-first approach that works seamlessly across all devices
- **Modern UI** - Clean, elegant interface with warm earthy tones inspired by Indian hospitality
- **Multi-Section Layout** - Organized sections including hero, featured dishes, about, testimonials, and reservations
- **Featured Dishes** - Showcase signature Indian dishes with descriptions and pricing
- **Customer Testimonials** - Display authentic customer reviews and ratings
- **Reservation System** - Integrated booking form for restaurant reservations
- **Dark Mode Support** - Full dark mode theme support for better accessibility
- **Performance Optimized** - Built with Next.js for optimal performance and SEO

## 📋 Project Structure

\`\`\`
.
├── app/
│   ├── page.tsx                 # Main landing page
│   ├── layout.tsx               # Root layout with metadata
│   └── globals.css              # Global styles and design tokens
├── components/
│   ├── header.tsx               # Navigation header
│   ├── hero.tsx                 # Hero section with CTA
│   ├── featured-dishes.tsx       # Signature dishes showcase
│   ├── about.tsx                # Restaurant story and info
│   ├── testimonials.tsx          # Customer reviews
│   ├── reservation.tsx           # Booking form
│   └── footer.tsx               # Footer with links
└── README.md                    # This file
\`\`\`

## 🛠 Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **React** - UI library
- **Responsive Design** - Mobile-first approach with Tailwind breakpoints

## 🎯 Design System

### Color Palette

The design uses a warm, earthy color scheme inspired by traditional Indian aesthetics:

- **Primary Color** - Deep Brown (`oklch(0.35 0.08 20)`) - Main brand color
- **Accent Color** - Burnt Orange (`oklch(0.58 0.16 50)`) - Highlights and CTAs
- **Background** - Cream White (`oklch(0.98 0 0)`) - Main background
- **Secondary** - Warm Beige (`oklch(0.92 0.02 40)`) - Supporting elements

### Typography

- **Font Family** - Geist Sans for all text
- **Headings** - Large, bold weights for hierarchy
- **Body Text** - Readable sizes with comfortable line height

## 📱 Sections Breakdown

### 1. **Header**
Fixed navigation bar with logo and menu links. Includes mobile-responsive hamburger menu.

### 2. **Hero Section**
Eye-catching banner with restaurant headline, tagline, and primary call-to-action buttons (Reserve & Order Now).

### 3. **Featured Dishes**
Grid display of 4 signature Indian dishes with:
- Dish image/placeholder
- Name and description
- Price
- Quick action buttons

### 4. **About Section**
Restaurant story, mission, and key metrics showcasing:
- Years of experience
- Number of dishes
- Customer satisfaction rate

### 5. **Testimonials**
Customer reviews with:
- Star ratings
- Customer name and role
- Review text
- Carousel/scroll functionality

### 6. **Reservation Form**
Complete booking system with fields for:
- Name and contact information
- Date and time selection
- Party size
- Special requests

### 7. **Footer**
Multi-column footer containing:
- Quick links
- Contact information
- Hours of operation
- Social media links
- Newsletter signup

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download this project**
   \`\`\`bash
   git clone <repository-url>
   cd indian-restaurant-landing
   \`\`\`

2. **Install dependencies** (if needed)
   \`\`\`bash
   npm install
   \`\`\`

3. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization Guide

### Updating Restaurant Information

1. **Header & Navigation** - Edit `components/header.tsx`:
   - Change logo/restaurant name
   - Update navigation links
   - Modify colors and styling

2. **Hero Section** - Edit `components/hero.tsx`:
   - Update headline and tagline
   - Change CTA button text
   - Modify background image/color

3. **Featured Dishes** - Edit `components/featured-dishes.tsx`:
   - Add/remove dish items
   - Update dish names, descriptions, prices
   - Replace placeholder images

4. **About Section** - Edit `components/about.tsx`:
   - Update restaurant story/description
   - Change statistics and metrics
   - Add restaurant image

5. **Testimonials** - Edit `components/testimonials.tsx`:
   - Add customer reviews
   - Update ratings and names
   - Add/remove testimonial cards

6. **Reservation Form** - Edit `components/reservation.tsx`:
   - Update form fields
   - Change submission endpoint
   - Customize success message

7. **Colors** - Edit `app/globals.css`:
   - Modify CSS variables (--primary, --accent, etc.)
   - Update color theme tokens
   - Adjust light/dark mode colors

### Adding New Sections

1. Create a new component file in `components/` folder
2. Add the component to `app/page.tsx`
3. Style using Tailwind CSS classes
4. Ensure responsive design with breakpoints

## 📧 Contact Form Integration

To enable the reservation form functionality:

1. Create an API route in `app/api/reservations/route.ts`
2. Handle form submission and email notifications
3. Update the form submission handler in `components/reservation.tsx`

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Click Deploy

### Deploy Elsewhere

- **Build for production**: `npm run build`
- **Start production server**: `npm start`
- Deploy the `.next` folder output to your hosting

## ♿ Accessibility

- Semantic HTML elements used throughout
- ARIA labels for interactive elements
- Proper heading hierarchy
- Color contrast compliant
- Keyboard navigation supported
- Screen reader friendly

## 📊 SEO Optimization

The landing page includes:
- Optimized metadata in `app/layout.tsx`
- Semantic HTML structure
- Open Graph meta tags
- Mobile-friendly design
- Fast performance with Next.js

## 🔧 Development Tips

- Use `font-sans` class for body text
- Use Tailwind responsive prefixes: `md:`, `lg:`, `xl:`
- Colors reference design tokens from `globals.css`
- Follow component-based architecture
- Use the `cn()` utility for conditional classes

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For issues, questions, or suggestions:
- Check existing code for patterns
- Review Tailwind CSS documentation
- Consult Next.js documentation
- Test responsiveness across devices

---

**Built with ❤️ for authentic Indian cuisine**
