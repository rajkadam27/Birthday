/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Glassmorphism & Neon theme
        'neon-pink': '#ff0080',
        'neon-blue': '#00d4ff',
        'neon-purple': '#8b5cf6',
        'neon-green': '#00ff88',
        'neon-yellow': '#ffff00',
        'dark-bg': '#0a0a0f',
        'dark-card': '#1a1a2e',
        'glass': 'rgba(255, 255, 255, 0.1)',
        'glass-border': 'rgba(255, 255, 255, 0.2)',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 0, 128, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(255, 0, 128, 0.8), 0 0 60px rgba(0, 212, 255, 0.3)' },
        },
        pulseNeon: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(45deg, #ff0080, #00d4ff, #8b5cf6, #00ff88)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(255, 0, 128, 0.5)',
        'neon-blue': '0 0 20px rgba(0, 212, 255, 0.5)',
        'neon-purple': '0 0 20px rgba(139, 92, 246, 0.5)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
        'inner-glow': 'inset 0 2px 4px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}