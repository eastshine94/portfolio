module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        star: {
          '0%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(-700px, -2000px)' },
          '100%': { transform: 'translate(0px, 0px)' }
        },
        starReverse: {
          '0%': { transform: 'translate(-700px, -2000px)' },
          '50%': { transform: 'translate(0px, 0px)' },
          '100%': { transform: 'translate(-700px, -2000px)' }
        }
      },
      animation: {
        star: 'star 150s linear infinite',
        starReverse: 'star_r 150s linear infinite'
      }
    }
  },
  plugins: []
};
