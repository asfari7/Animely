import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/assets/components',
      '@section': '/src/assets/section',
      '@img': '/src/assets/img',
      '@pages': '/src/assets/pages',
    }
  }
})
