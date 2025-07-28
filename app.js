// backend/app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Healthcheck
app.get('/health', (req, res) => {
  res.status(200).send('Backend is OK!');
});

// Sample Route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Mapog backend 🚀' });
});

// Error Handler
app.use((req, res, next) => {
  console.error(err.stack);
  res.status(404).json({ error: 'Route not found!' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;
