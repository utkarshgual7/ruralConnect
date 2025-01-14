import React from "react";

const AboutUs = () => {
  return (
    <section className="about-us-section py-12 bg-blue-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Left Side: About Us Content */}
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <h2 className="about-title text-5xl underline font-semibold text-gray-800 mb-4">
              About Us
            </h2>
            <p className="about-description text-lg text-gray-600 mb-6">
              At <strong className="text-blue-600">RuralConnect</strong>, we aim
              to bridge the gap between rural communities and essential
              resources. From agricultural schemes to quick access to
              deliverable medicines, we strive to improve lives through
              accessibility, affordability, and empowerment.
            </p>
            <button className="btn about-btn mt-3 bg-violet-600 text-white py-2 px-4 rounded-xl hover:bg-violet-00 transition duration-300">
              Learn More
            </button>
          </div>
          {/* Right Side: Image */}
          <div className="text-center md:w-1/2">
            <img
              src="about.png"
              alt="About Us"
              className="about-image img-fluid w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
