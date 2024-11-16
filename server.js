const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const tattooStyleRoute = require('./routes/tattooStyleRoute');

const app = express();
dotenv.config();

// Use express.json() instead of body-parser
app.use(express.json());

const PORT = process.env.PORT || 5200;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI,)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.log(`MongoDB connection error: ${error.message}`));

// Routes
app.use('/tattooStyle', tattooStyleRoute);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
