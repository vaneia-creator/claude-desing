import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // BASE_PATH is set to "/claude-desing/" by the GitHub Pages workflow so assets
  // resolve under the project subpath. Defaults to "/" for Vercel and local dev.
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
});
