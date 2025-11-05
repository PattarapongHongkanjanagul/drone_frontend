// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    // ใส่ค่าเพิ่มได้ภายหลัง; ค่านี้พอสำหรับเริ่ม dev server แล้ว
    server: {
        port: 5173,   // ปรับได้
        open: true,   // เปิดเบราว์เซอร์อัตโนมัติ
    },
});

import { resolve } from 'path'

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'https://dronefrontend.vercel.app/index.html'),
        form: resolve(__dirname, 'https://dronefrontend.vercel.app/form.html'),
        logs: resolve(__dirname, 'https://dronefrontend.vercel.app/form.html')
      }
    }
  }
}


