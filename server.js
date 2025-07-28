const app = require("./app");
const express = require('express');
const next = require('next');
const dotenv = require("dotenv");

dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const PORT = process.env.PORT || 8080;

nextApp.prepare().then(() => {
  const server = express();

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port${PORT}`);
     });
  
  server.listen(PORT, () => {
    console.log(`🚀 Server running on port${PORT}`);
  });
});
