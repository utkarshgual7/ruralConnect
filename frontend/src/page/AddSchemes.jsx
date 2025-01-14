import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const AddScheme = () => {
  const [schemeData, setSchemeData] = useState({
    title: "",
    description: "",
    gender: "",
    age: "",
    state: "",
    category: "",
    bpl: "",
    students: "",
    minority: "",
    differentlyabled: "",
    area: "",
    link: "",
    image: null,
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSchemeData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle file upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSchemeData((prevState) => ({
      ...prevState,
      image: file,
    }));
  };

  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", schemeData.title);
    formData.append("description", schemeData.description);
    formData.append("gender", schemeData.gender);
    formData.append("age", schemeData.age);
    formData.append("state", schemeData.state);
    formData.append("category", schemeData.category);
    formData.append("bpl", schemeData.bpl);
    formData.append("students", schemeData.students);
    formData.append("minority", schemeData.minority);
    formData.append("differentlyabled", schemeData.differentlyabled);
    formData.append("area", schemeData.area);
    formData.append("link", schemeData.link);

    if (schemeData.image) {
      formData.append("image", schemeData.image);
    }

    try {
      const response = await axios.post(
        "http://localhost:10000/api/schemes",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(response.data); // Handle response
      setSuccessMsg("Submission for scheme is successfull!");
    } catch (error) {
      console.error("Error adding scheme:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Add New Scheme
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Scheme Title
            </label>
            <input
              type="text"
              name="title"
              value={schemeData.title}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter scheme title"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Scheme Description
            </label>
            <textarea
              name="description"
              value={schemeData.description}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter scheme description"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Scheme Link
            </label>
            <input
              type="text"
              name="link"
              value={schemeData.link}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter scheme link"
              required
            />
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              name="gender"
              value={schemeData.gender}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="all">All</option>

              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="trans">Trans</option>
            </select>
          </div>

          {/* Age Group */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Age Group
            </label>
            <select
              name="age"
              value={schemeData.age}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Select Age Group
              </option>
              <option value="below18">Below 18</option>
              <option value="18-30">18-30</option>
              <option value="31-45">31-45</option>
              <option value="45+">45+</option>
              <option value="No Criteria">No Criteria</option>
            </select>
          </div>

          {/* State */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              State
            </label>
            <select
              name="state"
              value={schemeData.state}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Select State
              </option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Bihar">Bihar</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Area
            </label>
            <select
              name="area"
              value={schemeData.area}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Select area
              </option>
              <option value="rural">Rural</option>
              <option value="urban">Urban</option>
              <option value="both">Both</option>
            </select>
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              value={schemeData.category}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="general">General</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
              <option value="obc">OBC</option>
              <option value="all">All</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Eligible for differently abled
            </label>
            <select
              name="differentlyabled" // Change this to a unique name
              value={schemeData.differentlyabled}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Eligible for differently abled
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="no criteria">no criteria</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Eligible for minority group
            </label>
            <select
              name="minority" // Change this to a unique name
              value={schemeData.minority}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Eligible for minority
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="no criteria">no criteria</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Eligible for students
            </label>
            <select
              name="students" // Change this to a unique name
              value={schemeData.students}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Is student?
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="no criteria">no criteria</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Eligible for BPL Card holders
            </label>
            <select
              name="bpl" // Change this to a unique name
              value={schemeData.bpl}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                BPL eligibility
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="no criteria">no criteria</option>
            </select>
          </div>

          {/* Scheme Image Upload */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Scheme Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Scheme
            </button>

            {successMsg && <p className="text-green-500 mt-4">{successMsg}</p>}
          </div>
        </form>
      </div>
    </>
  );
};

export default AddScheme;
