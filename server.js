const express = require('express');
const next = require('next');
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 8080;
const dev = process.env.NODE_ENV !== 'production';

const handle = app.getRequestHandler();

app.process().then(() => {
  const server = express ()

server.all('*', (req, res) => {
  return handle(req, res);           

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
 });
});
