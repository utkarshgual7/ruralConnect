import React from "react";

const FindSchemes = () => {
  return (
    <>
      <section className="categories-section py-12 bg-violet-100">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-8 text-3xl font-semibold text-gray-800">
            Find Schemes Based on Categories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Category 1 */}
            <div className="category-btn group bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="agri.jpeg"
                alt="Agriculture, Rural & Environment"
                className="category-icon w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold text-gray-800">
                  Agriculture, Rural & Environment
                </h4>
                <p className="schemes-count text-gray-600">365 Schemes</p>
              </div>
            </div>

            {/* Category 2 */}
            <div className="category-btn group bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="bank.jpeg"
                alt="Banking, Financial Services & Insurance"
                className="category-icon w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold text-gray-800">
                  Banking, Financial Services & Insurance
                </h4>
                <p className="schemes-count text-gray-600">208 Schemes</p>
              </div>
            </div>

            {/* Category 3 */}
            <div className="category-btn group bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="buisness.jpeg"
                alt="Business & Entrepreneurship"
                className="category-icon w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold text-gray-800">
                  Business & Entrepreneurship
                </h4>
                <p className="schemes-count text-gray-600">362 Schemes</p>
              </div>
            </div>

            {/* Category 4 */}
            <div className="category-btn group bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="education.jpeg"
                alt="Education & Learning"
                className="category-icon w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold text-gray-800">
                  Education & Learning
                </h4>
                <p className="schemes-count text-gray-600">675 Schemes</p>
              </div>
            </div>

            {/* Category 5 */}
            <div className="category-btn group bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="medicine.png"
                alt="Quick Deliverable Medicines"
                className="category-icon w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold text-gray-800">
                  Quick Deliverable Medicines
                </h4>
                <p className="schemes-count text-gray-600">200+ Varieties</p>
              </div>
            </div>

            {/* Category 6 */}
            <div className="category-btn group bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="health.jpeg"
                alt="Health & Wellness"
                className="category-icon w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold text-gray-800">
                  Health & Wellness
                </h4>
                <p className="schemes-count text-gray-600">185 Schemes</p>
              </div>
            </div>

            {/* Category 7 */}
            <div className="category-btn group bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="social.jpeg"
                alt="Social Welfare & Empowerment"
                className="category-icon w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold text-gray-800">
                  Social Welfare & Empowerment
                </h4>
                <p className="schemes-count text-gray-600">1156 Schemes</p>
              </div>
            </div>

            {/* Category 8 */}
            <div className="category-btn group bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="women.jpeg"
                alt="Women and Child"
                className="category-icon w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold text-gray-800">
                  Women and Child
                </h4>
                <p className="schemes-count text-gray-600">342 Schemes</p>
              </div>
            </div>

            {/* Category 9 */}
            <div className="category-btn group bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="sanitisation.jpeg"
                alt="Utility & Sanitation"
                className="category-icon w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold text-gray-800">
                  Utility & Sanitation
                </h4>
                <p className="schemes-count text-gray-600">32 Schemes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FindSchemes;
