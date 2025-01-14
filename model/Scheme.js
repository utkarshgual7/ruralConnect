const mongoose = require("mongoose");

const schemeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },

  bpl: {
    type: String,
    required: true
  },students: {
    type: String,
    required: true
  },minority: {
    type: String,
    required: true
  },
  differentlyabled: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  image: {
    type: String,  // Path to the uploaded image
    required: true
  },
  link: {
    type: String,  // Path to the uploaded image
    required: true
  }
}, { timestamps: true });

const Scheme = mongoose.model("Scheme", schemeSchema);
module.exports = Scheme;
