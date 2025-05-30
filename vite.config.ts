import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      name: 'HolyExtensions',
      fileName: (format) =>
        `holy-extensions${format === 'umd' ? '.min' : ''}.${format === 'umd' ? 'js' : format === 'es' ? 'mjs' : 'cjs'}`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'holy-extensions.min.css'
          }
          return `assets/${assetInfo.name}`
        },
        globals: {
          vue: 'Vue',
        },
      },
    },
    minify: true,
    cssMinify: true,
  },
})
