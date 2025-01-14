import React from "react";
import Navbar from "../components/Navbar.jsx";

import Hero from "../components/Hero.jsx";
import FindSchemes from "../components/FindSchemes.jsx";
import AboutUs from "../components/AboutUs.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <>
      <div className=" text-white">
        <Navbar />
        <Hero />
        <FindSchemes />
        <AboutUs />
        <Footer />
      </div>
    </>
  );
};

export default Home;
