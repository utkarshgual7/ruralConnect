import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Us */}
          <div>
            <h5 className="footer-title text-2xl font-semibold mb-4">
              About Us
            </h5>
            <p className="footer-text text-lg">
              RuralConnect is your one-stop platform to find schemes,
              agricultural essentials, and affordable medicines for rural
              empowerment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="footer-title text-xl font-semibold mb-4">
              Quick Links
            </h5>
            <ul className="list-none space-y-2">
              <li>
                <a
                  href="/"
                  className="footer-link text-lg text-blue-400 hover:text-blue-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-lg text-blue-400 hover:text-blue-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-lg text-blue-400 hover:text-blue-500"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/schemes-all"
                  className="footer-link text-lg text-blue-400 hover:text-blue-500"
                >
                  Schemes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="footer-title text-xl font-semibold mb-4">
              Contact Us
            </h5>
            <p className="footer-text text-lg">
              <i className="fas fa-phone-alt mr-2"></i>📞 +91 123 456 7890
              <br />
              <i className="fas fa-envelope mr-2"></i>📧 info@ruralconnect.com
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-blue-500 hover:text-blue-700"
                title="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-pink-500 hover:text-pink-700"
                title="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-blue-400 hover:text-blue-600"
                title="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-blue-700 hover:text-blue-900"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="footer-copyright text-lg">
            &copy; 2024 RuralConnect. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
