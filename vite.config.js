// vite.config.js
import { defineConfig } from "vite";



export default defineConfig({
  base: '/deploy-vite-testing/', // <- very important for GitHub Pages!
  build: {
    outDir: 'dist',
  }
})
