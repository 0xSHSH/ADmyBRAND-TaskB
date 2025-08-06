# ADmyBRAND AI Suite - Landing Page

A modern, responsive SaaS landing page for ADmyBRAND AI Suite built with React, TypeScript, and Tailwind CSS. Features dark/light mode toggle, smooth scroll animations, parallax effects, and 3D transforms.

![ADmyBRAND AI Suite Landing Page](https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop)

## ✨ Features

- **🎨 Modern Design**: Clean, professional UI with dark/light mode support
- **📱 Responsive**: Mobile-first design that works on all devices
- **🎭 Animations**: Smooth scroll animations and micro-interactions
- **🌊 Parallax Effects**: CSS 3D transforms and parallax scrolling
- **⚡ Performance**: Built with Vite for lightning-fast development
- **🎯 Accessibility**: WCAG compliant with semantic HTML
- **🔧 TypeScript**: Full type safety and better developer experience

## 🚀 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Routing**: React Router DOM

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm, yarn, or bun

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/0xSHSH/ADmyBRAND-TaskB
   cd admybrand-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── sections/           # Landing page sections
│   │   ├── Hero.tsx       # Hero section with CTA
│   │   ├── Features.tsx   # Features showcase
│   │   ├── Pricing.tsx    # Pricing plans
│   │   ├── Testimonials.tsx # Customer reviews
│   │   ├── FAQ.tsx        # Frequently asked questions
│   │   ├── CTA.tsx        # Call to action
│   │   └── Footer.tsx     # Site footer
│   ├── ui/                # Reusable UI components
│   ├── Header.tsx         # Navigation header
│   ├── scroll-reveal.tsx  # Scroll animation wrapper
│   └── theme-provider.tsx # Dark/light mode provider
├── lib/
│   ├── mockData.ts        # Sample data for content
│   └── utils.ts           # Utility functions
├── pages/
│   ├── Index.tsx          # Main landing page
│   └── NotFound.tsx       # 404 page
├── assets/                # Images and static files
├── hooks/                 # Custom React hooks
└── index.css             # Global styles & design tokens
```

## 🎨 Design System

The project uses a custom design system with semantic color tokens:

- **Colors**: HSL-based color palette with dark/light mode variants
- **Typography**: Responsive font scales with proper hierarchy
- **Spacing**: 8px grid system for consistent spacing
- **Shadows**: Layered shadow system for depth
- **Gradients**: Beautiful gradient combinations
- **Animations**: Smooth transitions and micro-interactions

### Design Tokens

All colors and design tokens are defined in:
- `src/index.css` - CSS custom properties
- `tailwind.config.ts` - Tailwind configuration

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Type Checking
npm run type-check   # Run TypeScript compiler
```

## 📱 Sections Overview

1. **Hero Section**: Eye-catching headline with CTA buttons and dashboard image
2. **Features Section**: 6 feature cards with icons and descriptions
3. **Pricing Section**: 3 pricing tiers (Starter, Pro, Enterprise)
4. **Testimonials**: Customer reviews with avatars and ratings
5. **FAQ Section**: Expandable accordion with common questions
6. **CTA Section**: Final call-to-action with trial offer
7. **Footer**: Links, support info, and newsletter signup

## 🎭 Animations & Effects

- **Scroll Animations**: Elements animate in as they enter viewport
- **Parallax Scrolling**: Background elements move at different speeds
- **3D Transforms**: Cards and buttons have subtle 3D effects
- **Micro-interactions**: Hover states and click feedback
- **Loading Spinners**: Custom 3D loading animations

## 🌙 Dark/Light Mode

The application supports both dark and light themes:
- Toggle button in header and mobile menu
- Automatic system preference detection
- Persistent theme storage
- Smooth transitions between themes

## 📦 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push

### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy

### Lovable Platform
Simply open [Lovable](https://lovable.dev/projects/88a389bd-268d-4cfb-a157-b10a6e023191) and click on Share → Publish.

### Other Platforms
The built files in the `dist` folder can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 🔧 Development with Lovable

**Use Lovable Platform**
Simply visit the [Lovable Project](https://lovable.dev/projects/88a389bd-268d-4cfb-a157-b10a6e023191) and start prompting. Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**
If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in this repository
- Contact: support@admybrand.com
- Documentation: [ADmyBRAND Docs](https://docs.admybrand.com)

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com) for placeholder images
- [Lucide](https://lucide.dev) for beautiful icons
- [Radix UI](https://radix-ui.com) for accessible components
- [Tailwind CSS](https://tailwindcss.com) for utility-first styling
- [Framer Motion](https://framer.com/motion) for smooth animations

---

Built with ❤️ by the ADmyBRAND team
