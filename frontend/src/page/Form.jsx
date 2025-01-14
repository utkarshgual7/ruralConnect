import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../components/FormDataContext.js";

const Form = () => {
  const { formData, updateFormData } = useFormData();
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    updateFormData({ [id]: value });
  };

  const handleOptionChange = (group, value) => {
    updateFormData({ [group]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/schemes-all"); // Navigate to the schemes page after form submission
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Find Schemes for You
          </h2>
          <form onSubmit={handleSubmit} id="multiStepForm">
            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <div className="form-step">
                <h5 className="text-center mb-4">Tell us about yourself</h5>
                <label className="block mb-2">You are:</label>
                <select
                  className="block w-full mb-3 text-black border-gray-300 rounded-md p-2"
                  id="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="trans">Trans</option>
                </select>

                <label className="block mb-2">Your Age:</label>
                <select
                  className="block w-full mb-3 text-black border-gray-300 rounded-md p-2"
                  id="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select Age Group
                  </option>
                  <option value="below18">Below 18</option>
                  <option value="18-30">18-30</option>
                  <option value="31-45">31-45</option>
                  <option value="45+">45+</option>
                </select>

                {/* Display Selected Values */}
                <div className="mt-4">
                  <p>Gender: {formData.gender || "Not selected"}</p>
                  <p>Age: {formData.age || "Not selected"}</p>
                </div>

                <div className="flex justify-between mt-3">
                  <button
                    type="button"
                    className="bg-gray-500 text-white py-2 px-4 rounded-md"
                    onClick={handlePreviousStep}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md"
                    onClick={handleNextStep}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Location Details */}
            {currentStep === 2 && (
              <div className="form-step">
                <h5 className="text-center mb-4">Select your location</h5>
                <label className="block mb-2">Your State:</label>
                <select
                  className="block w-full mb-3 text-black border-gray-300 rounded-md p-2"
                  id="state"
                  value={formData.state}
                  onChange={handleInputChange}
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

                <label className="block mb-2">Your Area:</label>
                <div className="flex justify-center gap-3 mb-6">
                  <button
                    type="button"
                    className="bg-blue-200 hover:bg-blue-600 text-black py-2 px-6 rounded-md"
                    onClick={() => handleOptionChange("area", "rural")}
                  >
                    Rural
                  </button>
                  <button
                    type="button"
                    className="bg-green-200 hover:bg-green-400 text-black py-2 px-6 rounded-md"
                    onClick={() => handleOptionChange("area", "urban")}
                  >
                    Urban
                  </button>
                </div>

                {/* Display Selected Values */}
                <div className="mt-4">
                  <p>State: {formData.state || "Not selected"}</p>
                  <p>Area: {formData.area || "Not selected"}</p>
                </div>

                <div className="flex justify-between mt-3">
                  <button
                    type="button"
                    className="bg-gray-500 text-white py-2 px-4 rounded-md"
                    onClick={handlePreviousStep}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md"
                    onClick={handleNextStep}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Category Details */}
            {currentStep === 3 && (
              <div className="form-step">
                <h5 className="text-center mb-4">
                  You belong to which category?
                </h5>
                <select
                  className="block w-full mb-3 text-black border-gray-300 rounded-md p-2"
                  id="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="general">General</option>
                  <option value="sc">SC</option>
                  <option value="st">ST</option>
                  <option value="obc">OBC</option>
                </select>

                {/* Display Selected Value */}
                <div className="mt-4">
                  <p>Category: {formData.category || "Not selected"}</p>
                </div>

                <div className="flex justify-between mt-3">
                  <button
                    type="button"
                    className="bg-gray-500 text-white py-2 px-4 rounded-md"
                    onClick={handlePreviousStep}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md"
                    onClick={handleNextStep}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Differently Abled */}
            {currentStep === 4 && (
              <div className="form-step">
                <h5 className="text-center mb-4">Are you differently abled?</h5>
                <div className="flex justify-center gap-3 mb-3">
                  <button
                    type="button"
                    className="bg-gray-200 hover:bg-blue-500 text-black py-2 px-4 rounded-md"
                    onClick={() =>
                      handleOptionChange("differentlyabled", "yes")
                    }
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className="bg-gray-200 hover:bg-blue-500 text-black py-2 px-4 rounded-md"
                    onClick={() => handleOptionChange("differentlyabled", "no")}
                  >
                    No
                  </button>
                </div>

                {/* Display Selected Value */}
                <div className="mt-4">
                  <p>
                    Are you differently abled:{" "}
                    {formData.differentlyabled || "Not selected"}
                  </p>
                </div>

                <div className="flex justify-between mt-3">
                  <button
                    type="button"
                    className="bg-gray-500  text-white py-2 px-4 rounded-md"
                    onClick={handlePreviousStep}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md"
                    onClick={handleNextStep}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Additional Details */}
            {currentStep === 5 && (
              <div className="form-step">
                <h5 className="text-center mb-4">Additional Details</h5>

                <label className="block mb-2">Are you a minority?</label>
                <div className="flex justify-center gap-3 mb-3">
                  <button
                    type="button"
                    className="bg-gray-200 hover:bg-blue-500 text-black py-2 px-4 rounded-md"
                    onClick={() => handleOptionChange("minority", "yes")}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className="bg-gray-200 hover:bg-blue-500  text-black py-2 px-4 rounded-md"
                    onClick={() => handleOptionChange("minority", "no")}
                  >
                    No
                  </button>
                </div>

                <label className="block mb-2">Are you a student?</label>
                <div className="flex justify-center gap-3 mb-3">
                  <button
                    type="button"
                    className="bg-gray-200 hover:bg-blue-500 text-black py-2 px-4 rounded-md"
                    onClick={() => handleOptionChange("student", "yes")}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className="bg-gray-200 hover:bg-blue-500 text-black py-2 px-4 rounded-md"
                    onClick={() => handleOptionChange("student", "no")}
                  >
                    No
                  </button>
                </div>

                <label className="block mb-2">
                  Do you belong to the BPL category?
                </label>
                <div className="flex justify-center gap-3 mb-3">
                  <button
                    type="button"
                    className="bg-gray-200 hover:bg-blue-500 text-black py-2 px-4 rounded-md"
                    onClick={() => handleOptionChange("bpl", "yes")}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className="bg-gray-200 hover:bg-blue-500 text-black py-2 px-4 rounded-md"
                    onClick={() => handleOptionChange("bpl", "no")}
                  >
                    No
                  </button>
                </div>

                {/* Display All Selected Values */}
                <div className="mt-4">
                  <p>Minority: {formData.minority || "Not selected"}</p>
                  <p>Student: {formData.student || "Not selected"}</p>
                  <p>BPL: {formData.bpl || "Not selected"}</p>
                </div>

                <div className="flex justify-between mt-3">
                  <button
                    type="button"
                    className="bg-gray-500 text-white py-2 px-4 rounded-md"
                    onClick={handlePreviousStep}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 text-white py-2 px-4 rounded-md"
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Form;
