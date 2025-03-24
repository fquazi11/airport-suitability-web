/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "bg-red-50": "oklch(0.971 0.013 17.38)",
        "bg-red-100": "oklch(0.936 0.032 17.717)",
        "bg-red-200": "oklch(0.885 0.062 18.334)",
        "bg-red-300": "oklch(0.808 0.114 19.571)",
        "bg-red-400": "oklch(0.704 0.191 22.216)",
        "bg-red-500": "oklch(0.637 0.237 25.331)",
        "bg-red-600": "oklch(0.577 0.245 27.325)",
        "bg-red-700": "oklch(0.505 0.213 27.518)",
        "bg-red-800": "oklch(0.444 0.177 26.899)",
        "bg-red-900": "oklch(0.396 0.141 25.723)",
        "bg-red-950": "oklch(0.258 0.092 26.042)",
      },
    },
  },
  plugins: [],
} 