// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E7D32",     // Vert 60% - couleur principale
        secondary: "#F57C00",   // Orange 30% - couleur secondaire
        tertiary: "#1976D2",    // Bleu 10% - couleur tertiaire
        "primary-dark": "#1B5E20",
        "primary-light": "#4CAF50",
        "secondary-dark": "#EF6C00",
        "secondary-light": "#FF9800",
        "tertiary-dark": "#1565C0",
        "tertiary-light": "#42A5F5",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        arista: ['"Arista 2.0 Light"', 'Poppins', 'cursive'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [],
}