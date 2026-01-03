# Portfolio Website - Next.js Version

This is the Next.js version of the portfolio website, migrated from the original React app. All design, components, and functionality have been preserved, now using modern Next.js libraries and optimizations.

## 🚀 Modern Technologies Used

- **Next.js 14** - Latest App Router with Server Components
- **React 18** - Latest React features
- **@tsparticles/react v3** - Modern particle effects library (replaced react-tsparticles)
- **Framer Motion** - Advanced animations (replaced react-parallax-tilt)
- **Next.js Image** - Optimized image loading
- **React Icons v5** - Latest icon library
- **Bootstrap 5.3** - Latest Bootstrap version
- **React Intersection Observer** - For scroll animations

## ✨ Key Improvements

1. **Next.js Image Component** - Automatic image optimization
2. **Modern Particle Library** - @tsparticles/react v3 for better performance
3. **Framer Motion** - Smooth animations instead of parallax-tilt
4. **Optimized Imports** - Next.js package optimization
5. **Better SEO** - Built-in metadata API
6. **Server Components** - Where possible for better performance

## 📦 Installation

To run this website locally, follow these steps:

1. Navigate to the project directory:
   ```bash
   cd portfolio-nextjs
   ```

2. Install all necessary dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your web browser and navigate to `http://localhost:3000`.

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production version
- `npm start` - Start the production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
portfolio-nextjs/
├── app/                    # Next.js App Router pages
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Home page
│   ├── about/             # About page
│   ├── project/           # Projects page
│   └── resume/            # Resume page
├── components/            # React components
│   ├── Home/             # Home section components
│   ├── About/            # About section components
│   ├── Projects/         # Projects components
│   └── Resume/           # Resume components
├── public/               # Static assets
│   └── Assets/          # Images and other assets
├── styles/               # CSS files
└── package.json         # Dependencies
```

## 🎨 Features

- **Home Section**: Introduction with typewriter effect and modern particle background
- **About Section**: Personal information, tech stack, and GitHub calendar
- **Projects Section**: Showcase of recent projects with optimized images
- **Resume Section**: Resume display and download
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Preloader**: Loading animation on page load
- **Smooth Animations**: Framer Motion for enhanced UX
- **Optimized Performance**: Next.js automatic optimizations

## 🔄 Differences from React Version

1. **Routing**: Uses Next.js App Router instead of React Router
2. **Server Components**: Some components can be server-rendered for better performance
3. **Image Optimization**: Next.js automatically optimizes images
4. **Metadata**: SEO metadata is handled through Next.js metadata API
5. **File Structure**: Follows Next.js 13+ App Router structure
6. **Modern Libraries**: Updated to latest versions with better React 18 support

## 🚢 Deployment

This project can be deployed on:
- **Vercel** (recommended for Next.js) - Automatic deployments
- **Netlify** - With Next.js plugin
- **Any platform** that supports Next.js

For Vercel deployment:
1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build settings

## 📝 License

This project is licensed under the MIT License.
