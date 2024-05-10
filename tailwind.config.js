/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        press: ["'Press Start 2P'", 'system-ui'],
        play: [" 'Play'", 'sans-serif'],
        Roboto: [" 'Roboto'", 'sans-serif'],
        Lato: [" 'Lato'", 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://r4.wallpaperflare.com/wallpaper/776/183/742/plexus-animation-atoms-orbits-wallpaper-9910082db17a4d8b96d7c88f8031a6ed.jpg')",
        'footer-texture': "url('https://c4.wallpaperflare.com/wallpaper/514/822/545/call-of-duty-ghosts-dark-white-video-games-wallpaper-preview.jpg')",
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}
