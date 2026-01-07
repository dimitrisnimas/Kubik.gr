# KUBIK | Digital & Web Solutions

![KUBIK Banner](https://kubik.gr/public-images/Kubik-Black.png)

A modern, high-performance website for **KUBIK**, a digital agency specializing in Managed Hosting, E-commerce, and Custom Software Solutions. 

Built with **React**, **TypeScript**, and **Vite**, featuring advanced animations with **Framer Motion** and a premium glassmorphic UI.

## 🚀 Tech Stack

- **Framework:** [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (via CDN)
- **Icons:** Lucide React (inline SVGs)

## ✨ Features

- **Dynamic Hero Section:** Interactive particle network animation using HTML5 Canvas.
- **Scroll Animations:** Smooth "reveal" effects for content as you scroll.
- **Modern UI:** Glassmorphism effects, ambient background gradients, and soft shadows.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop.
- **Fast Performance:** Lightning-fast load times thanks to Vite and optimized assets.

## 🛠️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/dimitrisnimas/Kubik.gr.git
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    > **Note:** This project relies on `framer-motion` for animations. Ensure it is installed.

3.  **Run locally:**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` in your browser.

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

The output will be in the `dist/` directory, ready to be deployed to Netlify, Vercel, or any static host.

## 🌍 Deployment

This project is ready for static deployment.

**Netlify:**
1.  Connect your GitHub repository.
2.  Build command: `npm run build`
3.  Publish directory: `dist`

**Important:** If you encounter a build error about missing modules (e.g., `framer-motion`), ensure you have committed `package.json` and `package-lock.json` so the build server detects the dependencies.

## 📄 License

All rights reserved © 2026 KUBIK.
