import React, { useState, useEffect } from "react";
import { useFormData } from "../components/FormDataContext.js";
import axios from "axios";
import Navbar from "../components/Navbar.jsx";

const SchemesPage = () => {
  const { formData } = useFormData();
  const [schemes, setSchemes] = useState([]);
  const [filteredSchemes, setFilteredSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    state: "",
    category: "",
    gender: "",
    age: "",
    area: "",
    differentlyabled: "",
    minority: "",
    students: "",
    bpl: "",
  });

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:10000/api/schemes/getschemes"
        );
        setSchemes(response.data);
        setFilteredSchemes(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch schemes.");
        setLoading(false);
      }
    };

    fetchSchemes();
  }, []);

  useEffect(() => {
    // Apply filters based on formData (global context) and manual filters
    const applyFilters = () => {
      let filtered = [...schemes];

      // Apply filters from the global formData context
      if (formData.gender) {
        filtered = filtered.filter(
          (scheme) => scheme.gender === formData.gender
        );
      }
      if (formData.age) {
        filtered = filtered.filter((scheme) => scheme.age === formData.age);
      }
      if (formData.state) {
        filtered = filtered.filter((scheme) => scheme.state === formData.state);
      }
      if (formData.area) {
        filtered = filtered.filter((scheme) => scheme.area === formData.area);
      }
      if (formData.category) {
        filtered = filtered.filter(
          (scheme) => scheme.category === formData.category
        );
      }
      if (formData.differentlyabled) {
        filtered = filtered.filter(
          (scheme) => scheme.differentlyabled === formData.differentlyabled
        );
      }
      if (formData.minority) {
        filtered = filtered.filter(
          (scheme) => scheme.minority === formData.minority
        );
      }
      if (formData.students) {
        filtered = filtered.filter(
          (scheme) => scheme.students === formData.students
        );
      }
      if (formData.bpl) {
        filtered = filtered.filter((scheme) => scheme.bpl === formData.bpl);
      }

      // Apply manual filters (those that are set by the user)
      if (filters.state) {
        filtered = filtered.filter((scheme) => scheme.state === filters.state);
      }
      if (filters.category) {
        filtered = filtered.filter(
          (scheme) => scheme.category === filters.category
        );
      }

      setFilteredSchemes(filtered);
    };

    applyFilters();
  }, [formData, filters, schemes]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      state: "",
      category: "",
      gender: "",
      age: "",
      area: "",
      differentlyabled: "",
      minority: "",
      students: "",
      bpl: "",
    });
  };

  if (loading) {
    return <div>Loading Schemes, please be patient...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-3">
        <h2 className="text-3xl bg-blue-300 rounded-xl border-2 p-1 font-semibold text-center mb-8">
          Available Schemes For You
        </h2>

        {/* Filters */}
        <div className="mb-4 text-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className="block text-gray-700">State</label>
            <select
              name="state"
              value={filters.state}
              onChange={handleFilterChange}
              className=" block w-1/2 px-2 py-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">All States</option>
              {/* Add your state options here */}
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Bihar">Bihar</option>
              <option value="Maharashtra">Maharashtra</option>
            </select>
          </div>
          <div>
            <label className="block font-medium text-gray-700">Category</label>
            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="mt-1 block w-1/2 px-4 py-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">All Categories</option>
              {/* Add your category options here */}
              <option value="general">General</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
              <option value="obc">OBC</option>
            </select>
          </div>
          <div>
            <label className="block font-medium text-gray-700">Area</label>
            <select
              name="area"
              value={filters.area}
              onChange={handleFilterChange}
              className="mt-1 block w-1/2 px-4 py-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">All Areas</option>
              {/* Add your category options here */}
              <option value="rural">Rural</option>
              <option value="urban">Urban</option>
              <option value="both">Both</option>
            </select>
          </div>
          <div>
            <label className="block font-medium text-gray-700">Age Group</label>
            <select
              name="age"
              value={filters.age}
              onChange={handleFilterChange}
              className="mt-1 block w-1/2 px-4 py-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value=""> Select Age Group</option>
              {/* Add your category options here */}
              <option value="below18">Below 18</option>
              <option value="18-30">18-30</option>
              <option value="31-45">31-45</option>
              <option value="45+">45+</option>
              <option value="No Criteria">No Criteria</option>
            </select>
          </div>
          <div>
            <label className="block font-medium text-gray-700">Gender</label>
            <select
              name="gender"
              value={filters.gender}
              onChange={handleFilterChange}
              className="mt-1 block w-1/2 px-4 py-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Gender</option>
              <option value="all">All</option>

              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="trans">Trans</option>
            </select>
          </div>
          <div>
            <label className="block font-medium text-gray-700">
              differently abled
            </label>
            <select
              name="differentlyabled"
              value={filters.differentlyabled}
              onChange={handleFilterChange}
              className="mt-1 block w-1/2 px-4 py-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value=""> Eligible for differently abled</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="no criteria">no criteria</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700">minority</label>
            <select
              name="minority"
              value={filters.minority}
              onChange={handleFilterChange}
              className="mt-1 block w-1/2 px-4 py-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value=""> Eligible for minority</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="no criteria">no criteria</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Eligible for students
            </label>
            <select
              name="students"
              value={filters.students}
              onChange={handleFilterChange}
              className="mt-1 block w-1/2 px-4 py-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value=""> Is student?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="no criteria">no criteria</option>
            </select>
          </div>
          <div>
            <label className="block font-medium text-gray-700">
              bpl holder?
            </label>
            <select
              name="bpl"
              value={filters.bpl}
              onChange={handleFilterChange}
              className="mt-1 block w-1/2 px-4 py-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value=""> BPL eligibility</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="no criteria">no criteria</option>
            </select>
          </div>
          <div className="mt-1">
            <button
              onClick={clearFilters}
              className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {filteredSchemes.length === 0 ? (
          <div>No schemes available matching the filters.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSchemes.map((scheme) => (
              <div
                key={scheme._id}
                className="bg-white p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl underline font-semibold mb-4">
                  {scheme.title}
                </h3>
                {/* Display image if available */}
                {scheme.image && (
                  <div className="mt-4">
                    <img
                      src={`http://localhost:10000/${scheme.image}`}
                      alt={scheme.title}
                      className="w-[100px] h-auto rounded-lg shadow-md"
                    />
                  </div>
                )}
                <p className="text-gray-600 mb-4">{scheme.description}</p>
                <div className="mb-4">
                  <p>
                    <strong>Gender:</strong> {scheme.gender}
                  </p>
                  <p>
                    <strong>Age Group:</strong> {scheme.age}
                  </p>
                  <p>
                    <strong>State:</strong> {scheme.state}
                  </p>
                  <p>
                    <strong>Area:</strong> {scheme.area}
                  </p>
                  <p>
                    <strong>Category:</strong> {scheme.category}
                  </p>
                </div>

                {/* Display eligibility details */}
                <div className="mb-4 text-sm">
                  <p>
                    <strong>Eligible for BPL:</strong>{" "}
                    {scheme.bpl ? "Yes" : "No"}
                  </p>
                  <p>
                    <strong>Eligible for Students:</strong>{" "}
                    {scheme.students ? "Yes" : "No"}
                  </p>
                  <p>
                    <strong>Eligible for Minority:</strong>{" "}
                    {scheme.minority ? "Yes" : "No"}
                  </p>
                  <p>
                    <strong>Eligible for Differently Abled:</strong>{" "}
                    {scheme.differentlyabled ? "Yes" : "No"}
                  </p>
                </div>
                <a href={scheme.link} target="_blank" rel="noopener noreferrer">
                  <button className="rounded-lg p-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
                    Apply Now
                  </button>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SchemesPage;
