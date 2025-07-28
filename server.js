const app = require("./app");
const express = require('express');
const next = require('next');
const dotenv = require("dotenv");

dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = express();

app.get('/health', (req, res) =>
  res.status(200).send('Backend OK'));

  server.all('*', (req, res) => {
    return handle(req, res);
  });

 const PORT = process.env.PORT || 8080;
  app.listen(PORT,'0.0.0.0/0', () => {
    console.log(`🚀 Server running on port${PORT}`);
     });
});
