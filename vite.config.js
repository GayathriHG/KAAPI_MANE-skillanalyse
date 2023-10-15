import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base:"/KAAPI_MANE-skillanalyse/",

  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about-us.html'),
        menu: resolve(__dirname, 'menu.html'),
        contact: resolve(__dirname, 'contact-us.html'),
      }
    }
  }
})