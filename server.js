const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors({ origin: "*" })); // Restrict to frontend domain in production
app.use(express.json());

// ✅ Health Check
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Backend running fine" });
});

/* ================================
   USERS ENDPOINTS
================================= */

// ✅ GET user profile (e.g., /api/users/123)
app.get("/api/users/:id?", (req, res) => {
  const userId = req.params.id || req.querry.id;

  if (userId) {
    res.json({
      message:"User profile fetched successfully",
      user: {
        id: userId,
        name: "Peter Mulenge",
        email: "contact@mapog.xyz"
      }
    });
  } else {
    res.json({
      message: "All users fetched successfully",
      users: [
        { id: 1, name: "Peter Mulenge", email: "contact@mapog.xyz" },
        { id: 2, name: "Jane Doe", email: "jane@example.com" }
        ]
    });
  }
});

// ✅ POST user creation (registration)
app.post("/api/users", (req, res) => {
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
    return res.status(400).json({
      error: "Name, email, and password are required"
    });
  }

// Normally: Save to DB here
const newUser = {
  id: Date.now(),
  name,
  email
};

res.status(201).json({
  message: "User created successfully",
  user: newUser
});
});

/* ================================
   MAPOG DATA ENDPOINTS
================================= */

// ✅ GET all locations
app.get("/api/locations", (req, res) => {
  res.json({
    message: "Locations fetched successfully",
    locations: [
      { id: 1, name: "Mapog City Center", coords: [1.2921, 36.8219] },
      { id: 2, name: "Mapog West", coords: [1.2980, 36.8100] }
    ]
  });
});

// ✅ POST new location
app.post("/api/locations", (req, res) => {
  const { name, coords } = req.body;
  if (name && coords) {
    res.json({
      message: "Location added successfully",
      location: { name, coords }
    });
  } else {
    res.status(400).json({ error: "Name and coordinates are required" });
  }
});

// Error Handler
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).json({ error: "Something went wrong" });
});

// Start Server
app.listen(PORT, () => {
 console.log(`Mapog Backend running on port ${PORT}`);
});
