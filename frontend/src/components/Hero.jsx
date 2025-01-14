import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    { image: "first.jpg", title: "Empowering Rural Communities" },
    { image: "second.jpg", title: "Connecting Farmers to Essentials" },
    { image: "third.jpg", title: "Affordable Medicines for All" },
  ];

  // Function to change slide automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds (5000ms)

    // Cleanup interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Handle the navigation to the form filling page
  const handleFindSchemes = () => {
    navigate("/form-filling"); // Replace with the actual route to your form filling page
  };

  return (
    <>
      <section id="hero-carousel" className="relative w-full h-screen">
        {/* Arrows for Navigation Above the Image */}
        <div className="absolute top-5 left-4 z-10">
          <button
            onClick={handlePrev}
            className="text-white text-4xl focus:outline-none"
          >
            &#8592;
          </button>
        </div>
        <div className="absolute top-5 right-4 z-10">
          <button
            onClick={handleNext}
            className="text-white text-4xl focus:outline-none"
          >
            &#8594;
          </button>
        </div>

        {/* Slides */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                  <a
                    href="#"
                    className="bg-blue-500 text-white px-6 py-2 rounded transition-transform duration-300 ease-in-out"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="text-center my-16">
        <button
          onClick={handleFindSchemes}
          className="bg-orange-950 text-white px-8 py-3 text-xl rounded-full shadow-lg hover:bg-orange-800 transition duration-300"
        >
          Find Schemes for You
        </button>
      </div>
      <div className="flex text-black justify-around my-12">
        {/* Card 1 */}
        <div className="bg-gray-400 text-center p-8 rounded-lg shadow-lg w-72 transform transition duration-300 hover:scale-105 hover:bg-green-800">
          <h3 className="text-5xl font-semibold mb-4">10+</h3>
          <p className="text-xl font-bold">Total Schemes</p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-400 text-center p-8 rounded-lg shadow-lg w-72 transform transition duration-300 hover:scale-105 hover:bg-green-800">
          <h3 className="text-5xl font-semibold mb-4">20+</h3>
          <p className="text-xl font-bold">Central Schemes</p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-400 text-center p-8 rounded-lg shadow-lg w-72 transform transition duration-300 hover:scale-105 hover:bg-green-800">
          <h3 className="text-5xl font-semibold mb-4">300+</h3>
          <p className="text-xl font-bold">Medicines Provided</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
