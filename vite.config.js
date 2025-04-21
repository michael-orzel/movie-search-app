import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // Load PostCSS for Tailwind
  }, // Added
  resolve: {
    extensions: ['.js', '.jsx'],
  },
});
