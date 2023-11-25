import hero from "../../assets/hero.png";
import React, { useState } from "react";

import { logos } from "../../Data";
import { motion } from "framer-motion";
import Dashboard from "../../Dashboard";
const Home = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const handleDashboardClick = () => {
    // Redirect to http://localhost:5174/signup
    window.location.href = "http://localhost:5174/Dashboard";
  
  };
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="font-bold text-xs text-black mb-4">
            {" "}
            your e-learning partner
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            This is <br /> the new way <br /> to learn online
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            officia sit vitae quo, eum similique?
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold text-white bg-black rounded-lg mr-4 text-sm"
            onClick={handleDashboardClick}>
              Get Started
            </button>
            
            <button className="px-6 py-3 font-bold border border-solid text-white bg-black border-gray rounded-lg text-sm">
              Log In
            </button>
          </div>
        </div>
        {showDashboard && (
        <div
          className={`${
            active ? "bg-Solitude" : ""
          } fixed w-full top-0 left-0 z-20 py-4`}
        >
          <div className="container mx-auto">
            <Dashboard />
          </div>
        </div>
      )}
        <div className="md:w-[60%]">
          <img src={hero} alt="" />
        </div>
      </div>
      <div>
        <p className="text-center text-xl">
          We collaborate with{" "}
          <span className="text-black">
            100+ leading universities ans companies
          </span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={logo} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;