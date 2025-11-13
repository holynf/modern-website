import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  // When deploying to GitHub Pages under a repository (not user/organization root),
  // set `base` to the repository name so built asset paths are correct.
  base: '/modern-website/',
  plugins: [react(), tailwindcss()],
})
