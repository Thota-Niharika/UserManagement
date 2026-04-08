const http = require('http');

const endpoints = [
  '/api/roles',
  '/api/entities',
  '/api/departments',
  '/api/employees',
  '/roles',
  '/entities',
  '/departments',
  '/employees'
];

const target = '192.168.1.45';
const port = 8090;

function test(path) {
  return new Promise((resolve) => {
    console.log(`Testing: http://${target}:${port}${path}`);
    const req = http.get({
      hostname: target,
      port: port,
      path: path,
      timeout: 5000
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        console.log(`STATUS: ${res.statusCode} for ${path}`);
        console.log(`BODY: ${data.substring(0, 500)}`);
        resolve();
      });
    });

    req.on('error', (err) => {
      console.log(`ERROR for ${path}: ${err.message}`);
      resolve();
    });

    req.on('timeout', () => {
      console.log(`TIMEOUT for ${path}`);
      req.destroy();
      resolve();
    });
  });
}

async function run() {
  for (const path of endpoints) {
    await test(path);
    console.log('---');
  }
}

run();
