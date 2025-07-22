const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const schoolRoutes = require("./routes/schoolRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const pageRoutes = require("./routes/pageRoutes");

const app = express();

// 🔥 CORS Configuration - ONLY allow frontend domain
const corsOptions = {
  origin: "https://mapog.xyz", // ✅ Only allow frontend to call backend
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(morgan("dev"));

// Connect Database
connectDB();

// API Health Check
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Mapog API is healthy ✅" });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/schools", schoolRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/pages", pageRoutes);

// Global Error Handler
app.use(require("./middlewares/errorHandler"));

module.exports = app;
