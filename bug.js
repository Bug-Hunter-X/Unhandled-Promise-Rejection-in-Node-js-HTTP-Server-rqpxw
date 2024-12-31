const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  const data = someAsyncOperation();

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

function someAsyncOperation() {
  // Simulate an asynchronous operation that sometimes throws an error
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
  console.log('Server running at http://localhost:3000');
});