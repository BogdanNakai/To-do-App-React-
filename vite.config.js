import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true, // Enables source maps during development
  },
  build: {
    sourcemap: true, // Enables source maps for production builds
  }
})
