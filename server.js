require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI;

// Check MongoDB URI
if (!MONGO_URI) {
console.error("MONGODB_URI is missing in .env file");
process.exit(1);
}

// MongoDB connection
mongoose
.connect(MONGO_URI)
.then(() => {
console.log("MongoDB connected successfully");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


})
.catch((error) => {
console.error("MongoDB connection failed:", error.message);
process.exit(1);
});