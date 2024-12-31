# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates an example of an unhandled promise rejection in a Node.js HTTP server and its solution. The bug occurs when an asynchronous operation within the request handler throws an error, and the server doesn't gracefully handle this rejection, causing the process to crash.

## Bug

The `bug.js` file contains a simple HTTP server that simulates an asynchronous operation which sometimes throws an error. The error is not handled, leading to an unhandled promise rejection.

## Solution

The `bugSolution.js` file presents a corrected version of the server which utilizes a `.catch()` block to handle potential errors from the asynchronous operation, preventing crashes and providing more robust error handling.

## How to reproduce the bug

1. Clone this repository.
2. Run `node bug.js`.
3. Refresh the page at `http://localhost:3000` multiple times. The server will eventually crash due to the unhandled rejection.