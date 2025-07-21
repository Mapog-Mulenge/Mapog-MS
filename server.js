const app = require('./app');
const PORT = process.env.PORT || 5000;

app.get('/health', (req, res) => {
  res.status(200).send('Backend is healthy ✅');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
