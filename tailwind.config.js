const colors = require('tailwindcss/colors')
module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            'xss':'400px',
            'xs':'500px',
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
      
            'md': '768px',
            // => @media (min-width: 768px) { ... }
      
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
      
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
      
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },      
        extend: {
            colors:{
                ...colors
            },
            fontFamily:{
                jetMono:'JetBrains Mono, monospace',
                round:'Nova Round, cursive'
              }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
