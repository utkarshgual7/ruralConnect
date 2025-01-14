const Scheme = require("../model/Scheme.js");
const path = require("path");
var jwt = require('jsonwebtoken');



// Handle adding a new scheme
const addScheme = async (req, res) => {
  try {
    const { title, description, gender, age, state, category,bpl,
      students,
      minority,
      differentlyabled
  , area,link} = req.body;

    // Save the image path
    const imagePath = req.file ? path.join("uploads", req.file.filename) : null;

    // Create new scheme
    const newScheme = new Scheme({
      title,
      description,
      gender,
      age,
      state,
      category,
      image: imagePath,
      bpl,
      students,
      minority,
      differentlyabled
  ,area,
  link
   
    });

    // Save scheme to the database
    await newScheme.save();

    return res.status(201).json({
      message: "Scheme added successfully",
      scheme: newScheme
    });
  } catch (error) {
    console.error("Error adding scheme:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

// Fetch all schemes
const getSchemes = async (req, res) => {
  try {
    const schemes = await Scheme.find(); // Fetch all schemes from the database
    res.status(200).json(schemes); // Send the schemes to the frontend
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch schemes.' });
  }
};


// Controller to filter schemes
const findSchemes = async (req, res) => {
  try {
    const {
      gender,
      age,
      state,
      area,
      category,
      differentlyabled,
      minority,
      student,
      bpl,
    } = req.body;

    // Construct filter query based on provided fields
    const filter = {};

    if (gender) filter.gender = gender;
    if (age) filter.age = { $lte: age }; // Assuming `age` is a maximum age limit
    if (state) filter.state = state;
    if (area) filter.area = area;
    if (category) filter.category = category;
    if (differentlyabled) filter.differentlyabled = differentlyabled === "yes";
    if (minority) filter.minority = minority === "yes";
    if (student) filter.students = student === "yes";
    if (bpl) filter.bpl = bpl === "yes";

    // Query the database
    const schemes = await Scheme.find(filter);

    res.status(200).json(schemes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching schemes" });
  }
};

const users = [
  {
    id: 2567,
    email: "abcd@vit.com",
    password: "VITBHOPAL@123", // hashed password: 'password123'
  },
  // Add more users as needed
];
const login = async (req, res) => {
  const { email, password } = req.body;

  // Find user in the "database"
  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  // Compare password
  
  if (password!=user.password) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // Create and send JWT token
  const token = jwt.sign({ userId: user.id }, "your_jwt_secret", {
    expiresIn: "1h",
  });

  return res.json({ message: "Login successful", token });
};



module.exports = {
  addScheme,getSchemes,findSchemes,login,
};
