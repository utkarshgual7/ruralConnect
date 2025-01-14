const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { addScheme, getSchemes, findSchemes, login } = require("../controllers/schemeController.js");

// Multer configuration for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads"); // Save to the uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Add timestamp to filename
  }
});

const upload = multer({ storage });

// Route for adding a scheme
router.post("/", upload.single("image"), addScheme);
router.get('/getschemes', getSchemes);
router.post("/findschemes", findSchemes);
router.post("/login", login);
module.exports = router;
