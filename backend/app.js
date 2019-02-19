const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('This is the first middleware!');
  next();
});

app.use((req, res, next) => {
  res.send('Hello from ExpressJS!');
});

module.exports = app;
