/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  prefix: "tw-",
  plugins: [daisyui],
  daisyui:{
    prefix: "daisy-"
  }
}

