/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./docs/**/*.{html,js}', './src/**/*.{html,js}'],
   theme: {
      extend: {
         backgroundImage: {
            'background-Img':
               "url('https://images.unsplash.com/photo-1644559321363-0cf2745083d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80')",
         },
         colors: {
            'custom-transparent': 'rgba(0, 0, 0, 0.5)',
         },
      },
   },
   plugins: [],
};
