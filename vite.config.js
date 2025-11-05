import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: 'transactions.html'
      }
    }
  },
  server: {
    open: '/transactions.html'
  }
})