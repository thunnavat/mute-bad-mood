import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      colors: {
        blue: {
          980: "#3284c2",
        },
        custom: {
          100: "#F7DD79", //yellow
          200: "#F6E6C8", //cream
          300: "#F77B52", //orange
          400: "#3A90C4", //blue
          500: "#6AB3B6", //green-blue
          600: "#6A77BB", //purple
          700: "#F4ACC1", //pink
          800: "#469F7B"  //green
        }
      },
      fontFamily: {
        sen: ['var(--font-sen)'],
        sriracha: ['var(--font-sriracha)'],
        chakrapetch: ['var(--font-chakrapetch)'],
        sarabun: ['var(--font-sarabun)'],
        niramit: ['var(--font-niramit)'],
        anuphan: ['var(--font-anuphan)'],
      },
      screens: {
        "se": "326px",
        "ip": "376px"
      }
    },
  },
  plugins: []
}
export default config


//#F7DD79
//#F6E6C8S
//#F77B52
//#3A90C4
//#6AB3B6
//#6A77BB
//#F4ACC1
//#469F7B