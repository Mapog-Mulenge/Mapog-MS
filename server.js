require("dotenv").config();
const express = require('express');

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).send('Backend OK');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Mpog backend'});
  });

 const PORT = process.env.PORT || 8080;
  app.listen(PORT,'0.0.0.0', () => {
    console.log(`🚀 Server running on port${PORT}`);
});
