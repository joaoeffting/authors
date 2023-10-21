/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f45db0",
          secondary: "#c9b90a",
          accent: "#4485ed",
          neutral: "#171721",
          "base-100": "#4d4554",
          info: "#3466cb",
          success: "#198553",
          warning: "#f89f3f",
          error: "#ea1f30",
        },
      },
    ],
  },
};
