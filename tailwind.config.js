module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        star: {
          from: { transform: 'translateY(0px)' },
          to: { transform: 'translateY(-2000px)' }
        }
      },
      animation: {
        star: 'star 150s linear infinite'
      }
    }
  },
  plugins: []
};
