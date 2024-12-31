const http = require('http');

const server = http.createServer(async (req, res) => {
  try {
    const data = await someAsyncOperation();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve('Success!');
      } else {
        reject(new Error('Simulated asynchronous error'));
      }
    }, 1000);
  });
}

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});