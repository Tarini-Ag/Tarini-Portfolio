/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B0F19',
          card: '#111827',
          border: '#1F2937',
          header: '#0E131F',
          row: '#131B2E',
          rowAlt: '#0F1626'
        },
        pandas: {
          green: '#107C41',
          accent: '#4CAF50',
          light: '#2E7D32',
          navy: '#150458'
        },
        cyan: {
          highlight: '#38BDF8',
          subtle: '#0284C7'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}
