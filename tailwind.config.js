module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        over0Px: '0px',
        over360Px: '360px',
        over480Px: '480px',
        over640px: '640px',
        over1024px: '1024px'
      },
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
