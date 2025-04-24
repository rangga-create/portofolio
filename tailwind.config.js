// tailwind.config.js
module.exports = {
    content: [
      './src/**/*.{html,js}', 
    ],
    theme: {
        
      extend: {
        
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
          rotate: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        },
        animation: {
          marquee: 'marquee 10s linear infinite',
          rotate: 'rotate 5s linear infinite',
        },
      },
    },
    plugins: [],
  }
  