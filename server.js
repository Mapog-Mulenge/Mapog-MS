// server.js
const app = require("./app");
const connectDB = require("./config/db");

// Load environment variables
require("dotenv").config();

const PORT = process.env.PORT || 8080;

// Connect to MongoDB
connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
