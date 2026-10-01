import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import bookRoutes from './routes/bookRoutes.js';

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('BookStore API is running');
});

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