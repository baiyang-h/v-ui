import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src"),
      'packages':  path.resolve(__dirname, "./src/packages"),
      'libs':  path.resolve(__dirname, "./src/libs"),
      'config':  path.resolve(__dirname, "./src/config"),
    }
  },

})
