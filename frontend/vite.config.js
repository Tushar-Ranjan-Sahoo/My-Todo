import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: {
      // ...your alias configurations...
    },
    // Specify the loader for JSX files
    extensions: ['.js', '.jsx', '.json'],
  },
})

