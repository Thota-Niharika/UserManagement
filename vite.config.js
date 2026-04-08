import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import http from 'http';

// Disable keep-alive to fix: "Parse Error: Expected LF after chunk data"
const noKeepAliveAgent = new http.Agent({ keepAlive: false });

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      // This RegExp catches /api + EVERYTHING after it
      '^/api(/.*)?$': {
        target: 'http://13.203.70.78:8090', // External IP target
        changeOrigin: true,
        secure: false,
        timeout: 60000,
        proxyTimeout: 60000,
        agent: noKeepAliveAgent,
        bypass: (req, res, proxyOptions) => {
          // If the request is for a file that exists in the public directory, bypass proxy
          const decodedUrl = decodeURIComponent(req.url);
          const publicFilePath = path.join(process.cwd(), 'public', decodedUrl.replace(/^\//, ''));

          if (fs.existsSync(publicFilePath) && fs.lstatSync(publicFilePath).isFile()) {
            console.log(`[Proxy Bypass] Serving from public: ${decodedUrl}`);
            return req.url;
          }
        },
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            let ct = req.headers['content-type'] || '';
            if (Array.isArray(ct)) ct = ct[0];

            if (typeof ct === 'string' && ct.toLowerCase().includes('multipart/form-data')) {
              // 🔥 FIX: Keep boundary but remove charset which causes Spring Boot to fail
              const cleanCT = ct.split(';').filter(part => !part.trim().toLowerCase().startsWith('charset')).join(';');
              if (ct !== cleanCT) {
                proxyReq.setHeader('content-type', cleanCT);
                console.log(`[Proxy] Multipart CT Cleaned: ${ct} → ${cleanCT}`);
              }
            }

            // Force Identity encoding so backend calculates Content-Length 
            // instead of using 'Transfer-Encoding: chunked' which it is corrupting
            proxyReq.setHeader('accept-encoding', 'identity')
            console.log(`[PROXY REQ] ${req.method} ${req.url} → http://13.203.70.78:8090`);
          });

          proxy.on('proxyRes', (proxyRes, req, res) => {
            console.log(`[PROXY RES] ${req.url} → ${proxyRes.statusCode}`);
            if (proxyRes.statusCode >= 400) {
              console.warn(`[PROXY WARN] Failed request: ${req.url}`);
            }
          });

          proxy.on('error', (err, req, res) => {
            console.log('[Proxy Error]', err.message)
          });
        }
      },
      // Keep /uploads/** proxy in case any image src uses /uploads/
      '^/uploads': {
        target: 'http://13.203.70.78:8090',
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/uploads/, '/api/uploads'),
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log(`[PROXY UPLOADS REQ] ${req.method} ${req.url}`);
          });
          proxy.on('proxyRes', (proxyRes, req, res) => {
            console.log(`[PROXY UPLOADS RES] ${req.url} → ${proxyRes.statusCode}`);
          });
        }
      }
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 5173
  }
});