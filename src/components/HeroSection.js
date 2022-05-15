import React from "react";
import "../styles/hero-section.scss";
import WelcomeTo from "./WelcomeTo";
import { motion } from "framer-motion";
import SplashKicks from "./SplashKicks";

export default function HeroSection({
  showPopup,
  setShowPopup,
  userAddress,
  setUserAddress,
}) {
  return (
    <motion.div id="hero-section">
      <img
        className=" w-full h-full  object-cover absolute bottom-0 right-0  2xl:h-auto"
        src="/imgs/stadium-bg.png"
        alt="robo kicks stadium"
      />
      <div className="bg-gradient-to-b from-black to-transparent w-full h-1/4  absolute top-0 left-0 "></div>
      <div className="bg-gradient-to-t from-black to-transparent w-full h-1/3  absolute bottom-0 left-0 "></div>

      <div className="my-container relative flex flex-col lg:flex-row">
        <SplashKicks />
        <WelcomeTo
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          userAddress={userAddress}
          setUserAddress={setUserAddress}
        />
      </div>
    </motion.div>
  );
}
