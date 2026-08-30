import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Animation libs are ~a third of the bundle and are not needed to paint
    // the masthead, so give them their own cacheable chunks.
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
          scroll: ['lenis'],
        },
      },
    },
  },
})
