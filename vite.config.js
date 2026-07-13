import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// `base` must match the GitHub Pages sub-path (repo name) for a project site,
// but stay '/' in local dev so http://localhost:5174/ still works.
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === 'build' ? '/jasmine-portfolio/' : '/',
  server: {
    port: 5174,
  },
}));
