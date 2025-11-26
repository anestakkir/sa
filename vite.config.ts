import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      // Точка входа в нашу библиотеку
      entry: resolve(__dirname, 'src/components/ui/index.ts'),
      // Имя глобальной переменной (если подключать через скрипт)
      name: 'AnestaUi',
      // Имя файлов на выходе
      fileName: 'anesta-ui',
    },
    rollupOptions: {
      // Указываем, что Vue не нужно паковать внутрь библиотеки, 
      // он будет у того, кто эту библиотеку использует
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})