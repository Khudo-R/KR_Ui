import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
      'kr-ui': resolve(__dirname, '../src/index.ts'),
    },
  },
  server: {
    port: 3030,
    open: true,
  },
})
