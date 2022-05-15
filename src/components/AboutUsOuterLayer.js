import React from "react";
import "../styles/about-us-outer.scss";
import { motion } from "framer-motion";
export default function AboutUsOuterLayer() {
  return (
    <div className="absolute w-full h-full z-0 outer">
      <div className="moon">
        <motion.img
          animate={{ x: [0, 2, 5, 2, 0], y: [0, 2, 5, 8, 0] }}
          transition={{ duration: 5, repeatType: "mirror", repeat: "Infinity" }}
          className="w-full"
          src="/imgs/moon.png"
          alt="moon"
        />
      </div>
      <div className="metheor">
        <motion.img
          animate={{ x: [0, 2], y: [0, 2, 2, 5], rotate: 43 }}
          transition={{ duration: 5, repeatType: "mirror", repeat: "Infinity" }}
          className="w-full"
          src="/imgs/metheor.png"
          alt="asteroid"
        />
      </div>
      <div className="metheor-2">
        <motion.img
          animate={{ x: [0, 2], y: [0, 2, 2, 5], rotate: 43 }}
          transition={{ duration: 5, repeatType: "mirror", repeat: "Infinity" }}
          className="w-full"
          src="/imgs/metheor2.png"
          alt="asteroid"
        />
      </div>
      <div className="planet">
        <motion.img
          animate={{ rotate: 360 }}
          transition={{
            duration: 15,
            repeatType: "loop",
            repeat: "Infinity",
            easeIn: "linear",
          }}
          className="w-full"
          src="/imgs/planet1.png"
          alt="planet"
        />
      </div>
    </div>
  );
}
