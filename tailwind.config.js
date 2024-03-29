/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gyellow: "#eef101",
        gwhite: "#fffff7",
        gwhitedark: "#fcfcea",
        ggreylight: "#efefef",
        ggreymid: "#dfdfdf",
        ggreydark: "#d1d1d1",
        gwhitewhite: "#ffffff",
      },
      fontFamily: { sans: ["var(--font-ibm-plex)"] },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
