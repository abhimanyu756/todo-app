// filepath: e:\work\odoo\test-project-mern\backend\server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Define Routes
app.use("/api/todos", require("./routes/todo"));

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
