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
        sen: ['__Sen_d06085', '__Sen_Fallback_d06085'],
        sriracha: ['__Sriracha_2565c5', '__Sriracha_Fallback_2565c5'],
        chakrapetch: ['__Chakra_Petch_58c1e9', '__Chakra_Petch_Fallback_58c1e9'],
        sarabun: ['__Sarabun_eeb345', '__Sarabun_Fallback_eeb345'],
        niramit: ['__Niramit_f76263', '__Niramit_Fallback_f76263'],
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