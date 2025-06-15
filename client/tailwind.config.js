module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4da6ff',
          DEFAULT: '#0d6efd',
          dark: '#0047b3'
        },
        secondary: {
          light: '#f39e58',
          DEFAULT: '#ed7014',
          dark: '#b34700'
        },
        success: {
          light: '#6fbf73',
          DEFAULT: '#4caf50',
          dark: '#3b873e'
        },
        danger: {
          light: '#f6685e',
          DEFAULT: '#f44336',
          dark: '#aa2e25'
        },
        warning: {
          light: '#ffd54f',
          DEFAULT: '#ffc107',
          dark: '#c79100'
        },
        info: {
          light: '#4fc3f7',
          DEFAULT: '#2196f3',
          dark: '#1769aa'
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}