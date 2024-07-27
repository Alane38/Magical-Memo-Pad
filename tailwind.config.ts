import type { Config } from "tailwindcss"
/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        "primary": "#004B93",
        "secondary": "#92C0E8",
        "tertiary": "#DAEEFF",
        "quaternary": "#E5F3FF",

        "lightBlue": "#79B2E1",
        "darkBlue": "#004B93",

        "grey": "#BDBDBD",
        "lightGrey": "#E5E5E5",
        "darkGrey": "#676767",

        "success": "#4CAF50",
        "caution": "#F9A825",
        "warning": "#D32F2F",
      }
    },
    screens: {
      sm: { min: "0px", max: "767px" },
      md: { min: "768px", max: "991px" },
      lg: { min: "992px", max: "1199px" },
      xl: { min: "1200px" },
    },
  },
  plugins: [],
}
export default config
