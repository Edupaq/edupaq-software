import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://x0o8w0kk4gwk8c4s8w4ck4gg.161.97.101.228.sslip.io',
        changeOrigin: true,
      },
    },
  },
});
