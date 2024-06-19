import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'bottom': '0 10px 25px -10px rgba(0, 0, 0, 0.1)',
        'top': '0 -10px 25px -10px rgba(0, 0, 0, 0.1)',
      },
      backgroundColor: {
        'banner': 'rgba(0, 18, 51, 0.56)'
      }
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: false,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {
      },
      themes: {
        light: {
          layout: {
            
          },
          colors: {
            background: "#262626",
            focus: {
              50: "#FFFFFF",
              100: "#F7FAFE",
              200: "#C0C0C0",
              300: "#EFF5FD",
              400: "#E7F0FC",
              500: "#DFEBFB",
              600: "#C7D0DC",
              700: "#B0B6BE",
              800: "#989B9F",
              900: "#808080",
              DEFAULT: "#DFEBFB"
            },
            foreground: {
              50: "#FFFFFF",
              100: "#F7FAFE",
              200: "#C0C0C0",
              300: "#EFF5FD",
              400: "#E7F0FC",
              500: "#DFEBFB",
              600: "#C7D0DC",
              700: "#B0B6BE",
              800: "#989B9F",
              900: "#808080",
              DEFAULT: "#DFEBFB"
            },
            primary: {
              50: "#E9F2FC",
              100: "#D3E5FA",
              200: "#A8CAF5",
              300: "#7CB0EF",
              400: "#5195EA",
              500: "#257BE5",
              600: "#216FCF",
              700: "#1F69C3",
              800: "#1E62B7",
              900: "#1C5CAC",
              DEFAULT: "#257BE5",
            },
            secondary: {
              50: "#FFFCEA",
              100: "#FEF8D5",
              200: "#FDF1AB",
              300: "#FDEB81",
              400: "#FCE457",
              500: "#FBDD2D",
              600: "#E2C728",
              700: "#D5BC26",
              800: "#C9B124",
              900: "#BCA622",
              DEFAULT: "#FBDD2D",
            }
          }
        },
        dark: {
          layout: {},
          colors: {
            background: "#262626",
            focus: {
              50: "#FFFFFF",
              100: "#F7FAFE",
              200: "#C0C0C0",
              300: "#EFF5FD",
              400: "#E7F0FC",
              500: "#DFEBFB",
              600: "#C7D0DC",
              700: "#B0B6BE",
              800: "#989B9F",
              900: "#808080",
              DEFAULT: "#DFEBFB"
            },
            foreground: {
              50: "#FFFFFF",
              100: "#F7FAFE",
              200: "#C0C0C0",
              300: "#EFF5FD",
              400: "#E7F0FC",
              500: "#DFEBFB",
              600: "#C7D0DC",
              700: "#B0B6BE",
              800: "#989B9F",
              900: "#808080",
              DEFAULT: "#DFEBFB"
            },
            primary: {
              50: "#E9F2FC",
              100: "#D3E5FA",
              200: "#A8CAF5",
              300: "#7CB0EF",
              400: "#5195EA",
              500: "#257BE5",
              600: "#216FCF",
              700: "#1F69C3",
              800: "#1E62B7",
              900: "#1C5CAC",
              DEFAULT: "#257BE5",
            },
            secondary: {
              50: "#FFFCEA",
              100: "#FEF8D5",
              200: "#FDF1AB",
              300: "#FDEB81",
              400: "#FCE457",
              500: "#FBDD2D",
              600: "#E2C728",
              700: "#D5BC26",
              800: "#C9B124",
              900: "#BCA622",
              DEFAULT: "#FBDD2D",
            }
          }
        }
      }
    })
  ],
}