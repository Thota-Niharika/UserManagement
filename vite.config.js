// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: true,
//     proxy: {

//       '/api': {
//         target: 'http://192.168.1.70:8080',
//         changeOrigin: true,
//         secure: false,
//         onProxyReq: (proxyReq, req) => {
//           let ct = proxyReq.getHeader('content-type') || req.headers['content-type'] || '';
//           if (Array.isArray(ct)) ct = ct[0];

//           if (typeof ct === 'string' && ct.toLowerCase().includes('multipart/form-data')) {
//             // Remove charset=UTF-8 if present
//             const cleaned = ct.replace(/;\s*charset=utf-8/gi, '');

//             if (ct !== cleaned) {
//               proxyReq.setHeader('content-type', cleaned);
//               console.log(`[Proxy] Multipart Charset Stripped: ${ct} -> ${cleaned}`);
//             }
//           }
//         }
//       }
//     }
//   }
// })


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: true,
//     proxy: {
//       // This RegExp matches /api + optional / + anything after (covers /api/onboarding/, /api/files/, etc.)
//       '^/api(/.*)?$': {
//         target: 'http://192.168.1.70:8080',
//         changeOrigin: true,
//         secure: false,
//         // Keep your multipart/form-data fix (only impacts file uploads)
//         onProxyReq: (proxyReq, req) => {
//           let ct = proxyReq.getHeader('content-type') || req.headers['content-type'] || '';
//           if (Array.isArray(ct)) ct = ct[0];

//           if (typeof ct === 'string' && ct.toLowerCase().includes('multipart/form-data')) {
//             // Remove charset=UTF-8 if present
//             const cleaned = ct.replace(/;\s*charset=utf-8/gi, '');

//             if (ct !== cleaned) {
//               proxyReq.setHeader('content-type', cleaned);
//               console.log(`[Proxy] Multipart Charset Stripped: ${ct} -> ${cleaned}`);
//             }
//           }
//         },
//         // Add these for debugging — very helpful right now
//         configure: (proxy, _options) => {
//           proxy.on('proxyReq', (proxyReq, req) => {
//             console.log(`[Proxy REQ] ${req.method} ${req.url} → ${proxyReq.path}`);
//           });
//           proxy.on('proxyRes', (proxyRes, req) => {
//             console.log(`[Proxy RES] ${req.url} → status ${proxyRes.statusCode}`);
//           });
//           proxy.on('error', (err, req) => {
//             console.error(`[Proxy ERROR] ${req.url}: ${err.message}`);
//           });
//         }
//       }
//     }
//   }
// })
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],

//   server: {
//     host: true,

//     proxy: {
//       '^/api': {
//         target: 'http://192.168.1.70:8080',
//         changeOrigin: true,
//         secure: false,

//         onProxyReq: (proxyReq, req) => {
//           let ct = proxyReq.getHeader('content-type') || req.headers['content-type'] || ''
//           if (Array.isArray(ct)) ct = ct[0]

//           if (typeof ct === 'string' && ct.toLowerCase().includes('multipart/form-data')) {
//             const cleaned = ct.replace(/;\s*charset=utf-8/gi, '')
//             if (ct !== cleaned) {
//               proxyReq.setHeader('content-type', cleaned)
//               console.log(`[Proxy] Multipart stripped: ${ct} → ${cleaned}`)
//             }
//           }
//         },

//         configure: (proxy) => {
//           proxy.on('proxyReq', (proxyReq, req) => {
//             console.log(`[PROXY REQ] ${req.method} ${req.url}`)
//           })
//           proxy.on('proxyRes', (proxyRes, req) => {
//             console.log(`[PROXY RES] ${req.url} → ${proxyRes.statusCode}`)
//           })
//           proxy.on('error', (err, req) => {
//             console.error(`[PROXY ERROR] ${req.url} → ${err.message}`)
//           })
//         }
//       },
//       '^/uploads': {
//         target: 'http://192.168.1.70:8080',
//         changeOrigin: true,
//         secure: false,
//         configure: (proxy) => {
//           proxy.on('proxyReq', (proxyReq, req) => {
//             console.log(`[PROXY UPLOADS REQ] ${req.method} ${req.url}`)
//           })
//           proxy.on('proxyRes', (proxyRes, req) => {
//             console.log(`[PROXY UPLOADS RES] ${req.url} → ${proxyRes.statusCode}`)
//           })
//         }
//       }
//     }
//   }
// })

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],

//   server: {
//     host: true,
//     port: 5173,

//     proxy: {
//       '/api': {
//         target: 'http://192.168.3.105:8090',
//         changeOrigin: true,
//         secure: false,
//         // No rewrite, as the backend seems to expect /api or we're testing with it
//       },
//       '/uploads': {
//         target: 'http://192.168.3.105:8090',
//         changeOrigin: true,
//         secure: false,
//       }
//     }
//   }
// })

// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import http from 'http'

// Disable keep-alive to fix: "Parse Error: Expected LF after chunk data"
// Backend sends chunked responses that Node's http-proxy can't handle with keep-alive
const noKeepAliveAgent = new http.Agent({ keepAlive: false })

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,

    proxy: {
      '^/api': {
        target: 'http://100.99.102.32:8090',
        changeOrigin: true,
        secure: false,
        agent: noKeepAliveAgent,

        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            // Force Identity encoding so backend calculates Content-Length 
            // instead of using 'Transfer-Encoding: chunked' which it is corrupting
            proxyReq.setHeader('accept-encoding', 'identity')
            console.log('[Proxy] Forwarding:', req.method, req.url)
          })
          proxy.on('error', (err, req, res) => {
            console.log('[Proxy Error]', err.message)
          })
        }
      }
    }
  }
})