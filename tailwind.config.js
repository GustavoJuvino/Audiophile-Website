/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "raw-sienna": "#D87D4A",
        "light-raw-sienna": "#FBAF85",
        "onyx": "#101010",
        "seashell": "#F1F1F1",
        "off-white": "#FAFAFA"
      },
      keyframes: {
        divider: {
          "0%": { "width": "5px" },
          "100%": { "width": "100%"}
        }
      },
      animation: {
        divider: 'divider 1s ease-in-out forwards',
      },
      screens: {
        "mobile": "500px",
        "small-mobile": "282px"
      },
      fontSize: {
        base: ["1rem", {
          lineHeight: "25px",
          fontWeight: "500"
        }],
        "subTitle": ["13px", {
          lineHeight: "25px",
          letterSpacing: "1px",
          fontWeight: "bold",
        }],
        "overline": ["14px", {
          lineHeight: "19px",
          letterSpacing: "10px",
        }],
        lg: ["1.125rem", {
          lineHeight: "1.5rem",
          letterSpacing: "1.3px",
          fontWeight: "bold"
        }],
        xl: ["1.5rem", {
          lineHeight: "33px",
          letterSpacing: "1.7px",
          fontWeight: "bold"
          
        }],
        "2xl": ["1.75rem", {
          lineHeight: "38px",
          letterSpacing: "2px",
          fontWeight: "bold"
        }],
        "4xl": ["2rem", {
          lineHeight: "2.25rem",
          letterSpacing: "1.15px",
          fontWeight: "bold"
        }],
        "5xl": ["2.5rem", {
          lineHeight: "2.75rem",
          letterSpacing: "1.5px",
          fontWeight: "bold"
        }],
        "6xl": ["3.5rem", {
          lineHeight: "58px",
          letterSpacing: "2px",
          fontWeight: "bold"
        }]
      }
    },
  },
  plugins: [],
}
