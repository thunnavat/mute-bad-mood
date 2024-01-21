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
        "se": "321px",
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