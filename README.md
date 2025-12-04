# iQuark - Premier Coaching Website

A modern, professional, and responsive website for iQuark coaching institute built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean, professional UI with educational theme
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Built-in meta tags and semantic HTML
- **Static Site Generation**: Fast loading with Next.js SSG
- **Multiple Pages**:
  - Home (Landing page with hero, courses overview, testimonials, CTA)
  - About Us (Mission, vision, values, teaching philosophy)
  - Courses (IIT-JEE, NEET, Olympiad, Foundation)
  - Individual Course Pages with detailed syllabus
  - Testimonials & Success Stories
  - Sample Class & Demo
  - FAQ
  - Contact & Enrollment
  - Blog & Resources
  - Instructor Recruitment
  - Privacy Policy & Terms

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Font**: Inter (Google Fonts)

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## 🛠️ Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd iquark
   ```

2. **Install dependencies** (already done):
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `out` folder (static export).

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

1. Push code to GitHub/GitLab/Bitbucket
2. Import project on [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js and deploys

**Or use Vercel CLI**:
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify

1. Push code to GitHub
2. Connect repository on [Netlify](https://netlify.com)
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`

**Or use Netlify CLI**:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Option 3: GitHub Pages

1. Update `next.config.ts` with your repository name:
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     basePath: '/your-repo-name',
     images: { unoptimized: true },
   };
   ```

2. Build and deploy:
   ```bash
   npm run build
   # Deploy the 'out' folder to gh-pages branch
   ```

### Option 4: Traditional Hosting (cPanel, FTP)

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload contents of `out` folder to your web server's public directory

## 📁 Project Structure

```
iquark/
├── src/
│   ├── app/                # App Router pages
│   │   ├── about/         # About page
│   │   ├── blog/          # Blog listing
│   │   ├── contact/       # Contact page
│   │   ├── courses/       # Courses pages
│   │   │   ├── iit-jee/  # IIT-JEE course detail
│   │   │   ├── neet/      # NEET course detail
│   │   │   ├── olympiad/  # Olympiad course detail
│   │   │   └── foundation/ # Foundation course detail
│   │   ├── faq/           # FAQ page
│   │   ├── privacy-policy/ # Privacy policy
│   │   ├── recruitment/   # Teacher recruitment
│   │   ├── sample-class/  # Sample class booking
│   │   ├── terms/         # Terms & conditions
│   │   ├── testimonials/  # Success stories
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   └── globals.css    # Global styles
│   └── components/        # Reusable components
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── ContactForm.tsx
│       ├── CoursesOverview.tsx
│       ├── WhyChooseUs.tsx
│       ├── TestimonialsSection.tsx
│       └── CTASection.tsx
├── public/                # Static assets
├── .github/              # GitHub specific files
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: { /* Blue shades */ },
  accent: { /* Orange/accent color */ },
}
```

### Content

Replace placeholder content marked with `TODO:` comments throughout the codebase:
- Add actual student photos in testimonials
- Replace contact information
- Add real course details
- Upload demo videos
- Add blog post images

### Forms

Contact forms are frontend-only. To handle submissions:
1. Set up a backend API (Node.js, Python, etc.)
2. Use services like:
   - [Formspree](https://formspree.io)
   - [Web3Forms](https://web3forms.com)
   - [EmailJS](https://www.emailjs.com)
3. Update form `onSubmit` handlers in:
   - `src/components/ContactForm.tsx`
   - `src/app/recruitment/page.tsx`

## 📱 Features TODO

- [ ] Add actual images for courses and testimonials
- [ ] Implement backend for contact forms
- [ ] Add Google Maps embed on contact page
- [ ] Create individual blog post pages
- [ ] Add video embeds for sample classes
- [ ] Implement newsletter subscription
- [ ] Add Google Analytics
- [ ] Set up social media links

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server (requires build first)
npm run lint     # Run ESLint
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is proprietary to iQuark Coaching Institute.

## 👥 Support

For technical support or questions:
- Email: tech@iquark.co.in
- Phone: +91 98765 43210

## 🎯 Comparison with Original Site

### Improvements Over iquark.co.in:

1. **Design**: Modern, clean interface vs outdated design
2. **Responsiveness**: Fully mobile-optimized
3. **Performance**: Static generation for faster loading
4. **SEO**: Proper meta tags and semantic HTML
5. **User Experience**: Clear navigation, prominent CTAs
6. **Content Organization**: Better structured information
7. **Professional Look**: Builds trust and credibility
8. **Accessibility**: Better keyboard navigation and screen reader support

---

**Built with ❤️ for iQuark Coaching Institute**
