require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require('cors');

const app = express();
app.use(bodyParser.json());






// Allow requests from the frontend (update with the correct port)
app.use(cors({ origin: 'http://localhost:3000' })); // Adjust to your frontend URL


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Error connecting to MongoDB:", err));

// Serve static files for image upload
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
const schemeRoutes = require("./router/schemaRoutes.js");
app.use("/api/schemes", schemeRoutes);

// Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
