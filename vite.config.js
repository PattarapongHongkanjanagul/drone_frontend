// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // dev server เวลา run `npm run dev`
  server: {
    port: 5173,
    open: true,
  },

  // ค่า build สำหรับ Vercel
  base: '/',          // เสิร์ฟจากรากโดเมน
  build: {
    outDir: 'dist',   // ให้ชัดเจน
    rollupOptions: {
      // บอก Vite ว่ามีหลายหน้า HTML
      input: {
        main: resolve(__dirname, 'index.html'),
        form: resolve(__dirname, 'form.html'),
        logs: resolve(__dirname, 'logs.html'),
      },
    },
  },
})
