import plugins from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,vue,html}",
    './index.html'
  ],
  theme: {
    colors: {
      yellow: '#FFB21E',
      blue: '#1125D6',
      green: '#00BB8F',
      red: '#FF5555',
      'dark-navy': '#303B59',
      'light-blue': '#CAC9FF',
      'very-light-blue': '#ECF2FF',
      white: '#FFF',
    },
    fontFamily: {
      grotesk: ["'Hanken Grotesk Variable'", "sans-serif"]
    },
  },
  plugins: [
    plugins(({ addUtilities, theme }) => {
      addUtilities({
        '.heading-xl': {
          fontFamily: theme('fontFamily.grotesk'),
          lineHeight: '4.5rem',
          fontSize: '3.5rem',
          '@screen md': {
            fontSize: '4.5rem',
          },
        },
        '.heading-l': {
          fontFamily: theme('fontFamily.grotesk'),
          lineHeight: 'normal',
          fontSize: '1.5rem',
          '@screen md': {
            fontSize: '2rem',
          },
        },
        '.heading-m': {
          fontFamily: theme('fontFamily.grotesk'),
          lineHeight: 'normal',
          fontSize: '1.125rem',
          '@screen md': {
            fontSize: '1.5rem',
          },
        },
        '.body': {
          fontFamily: theme('fontFamily.grotesk'),
          lineHeight: 'normal',
          fontSize: '1rem',
          '@screen md': {
            fontSize: '1.125rem',
          },
        },
        '.bg-gradient-1': {
          background: 'linear-gradient(180deg, #75F 0%, #6943FF 0.01%, #2F2CE9 100%)',
        },
        '.bg-gradient-2': {
          background: 'linear-gradient(180deg, #4D21C9 0%, rgba(37, 33, 201, 0.00) 100%, rgba(37, 33, 201, 0.00) 100%)',
        },
      })
    })
  ],
}

