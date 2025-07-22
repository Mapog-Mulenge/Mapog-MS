const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load env vars
dotenv.config();

// Routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const schoolRoutes = require("./routes/schoolRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Connect DB
connectDB();

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ message: "✅ Mapog API is healthy" });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/schools", schoolRoutes);

app.use(require("./middlewares/errorHandler"));

module.exports = app;
