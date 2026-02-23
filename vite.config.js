import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {

      '/api': {
        target: 'http://192.168.3.117:8080',
        changeOrigin: true,
        secure: false,
        onProxyReq: (proxyReq, req) => {
          let ct = proxyReq.getHeader('content-type') || req.headers['content-type'] || '';
          if (Array.isArray(ct)) ct = ct[0];

          if (typeof ct === 'string' && ct.toLowerCase().includes('multipart/form-data')) {
            // Remove charset=UTF-8 if present
            const cleaned = ct.replace(/;\s*charset=utf-8/gi, '');

            if (ct !== cleaned) {
              proxyReq.setHeader('content-type', cleaned);
              console.log(`[Proxy] Multipart Charset Stripped: ${ct} -> ${cleaned}`);
            }
          }
        }
      }
    }
  }
})
