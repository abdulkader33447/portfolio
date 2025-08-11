import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    host: true,   // বাইরের ডিভাইস থেকেও অ্যাক্সেসের জন্য এটা লাগবে
    port: 5173,
  },
})
