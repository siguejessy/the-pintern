module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'cooper': ['cooper-black-std', 'serif'],
        'mono': ['ui-monospace', 'monospace'],
        'noto-sans-sinhala': ['noto-sans-sinhala-semi-cond', 'sans-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};

