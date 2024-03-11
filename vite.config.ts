import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
/**
 * Vite configuration file.
 * @remarks This file exports the configuration options for Vite.
 */
export default defineConfig({
  server:{
    port:3000
  },
  plugins: [react()],
})
