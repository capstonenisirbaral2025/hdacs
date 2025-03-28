const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve files from the "html" directory
app.use('/html', express.static(path.join(__dirname, 'html')));

// Serve files from the "process" directory
app.use('/process', express.static(path.join(__dirname, 'process')));

// Basic route
app.get('/', (req, res) => {
  res.send('html/index.html');
});

app.listen(port, () => {
  console.log(`Node.js app is listening on http://localhost:${port}`);
});
