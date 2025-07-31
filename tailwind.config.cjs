/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgb(0, 136, 204)", 
        primaryHover: "rgb(0, 112, 180)",
        secondaryColor: "rgb(0, 112, 188)", 
        primaryText: "rgb(255,255,255)", 
        secondaryText: "rgb(179, 179, 179)", 
        bgDark1: "rgb(21, 32, 43)", 
        bgDark2: "rgb(26, 36, 47)", 
        bgDark3: "rgb(36, 47, 58)", 
        bgDark4: "rgb(41, 52, 63)",
        bgDark3Hover: "rgb(41, 52, 63)", 
        bgDarkTransparent: "rgba(21, 32, 43, 0.7)", 
        bgDarkTransparentDarker: "rgba(0, 0, 0, 0.5)", 
        bgDarkTransparentLighter: "rgba(36, 47, 58, 0.7)", 
        mainBorder: "rgba(255, 255, 255, 0.15)", 
        mainBorderDarker: "rgba(255, 255, 255, 0.07)", 
        quoteIconColor: "rgb(138, 150, 169)",
        // Modern gradient colors
        gradientFrom: "rgb(99, 102, 241)",
        gradientVia: "rgb(139, 92, 246)", 
        gradientTo: "rgb(168, 85, 247)",
        // Accent colors
        accent: {
          green: "rgb(34, 197, 94)",
          blue: "rgb(59, 130, 246)",
          purple: "rgb(147, 51, 234)",
          orange: "rgb(249, 115, 22)",
          red: "rgb(239, 68, 68)",
        }
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"], 
      },
      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
};
