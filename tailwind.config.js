module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        over360px: '360px',
        over480px: '480px',
        over640px: '640px',
        over800px: '800px',
        over1024px: '1024px',
        over1200px: '1200px'
      },
      backgroundImage: {
        hdkimLogo: "url('../src/assets/hdkim-logo.png')"
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateY(0px)', color: 'white' },
          '50%': { transform: 'translateY(15px)', color: '#c4c4c4' },
          '100%': { transform: 'translateY(0px)', color: 'white' }
        },
        star: {
          '0%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(500px, -2000px)' },
          '100%': { transform: 'translate(0px, 0px)' }
        },
        starReverse: {
          '0%': { transform: 'translate(-500px, -2000px)' },
          '50%': { transform: 'translate(0px, 0px)' },
          '100%': { transform: 'translate(-500px, -2000px)' }
        }
      },
      animation: {
        move: 'move 3s linear infinite',
        star: 'star 150s linear infinite',
        starReverse: 'star_r 150s linear infinite'
      }
    }
  },
  plugins: []
};
