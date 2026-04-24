// Load modules
const express = require("express");
const cors = require("cors");
const path = require("path");

// 🔥 Temporary fix (so JWT works immediately)
process.env.JWT_SECRET = "123456";

// Optional: still load .env if present
require("dotenv").config({
  path: path.resolve(__dirname, "../.env")
});

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Debug (check secret)
console.log("JWT_SECRET:", process.env.JWT_SECRET);

// Connect DB (or in-memory store)
connectDB();

// Test route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Experiment 6 JWT Auth API is running"
  });
});

// Routes
app.use("/", authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});