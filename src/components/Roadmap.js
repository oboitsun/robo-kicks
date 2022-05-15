import React from "react";
import Progressbar from "./Progressbar";
import { motion } from "framer-motion";
import "../styles/roadmap.scss";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
export default function Roadmap() {
  return (
    <div id="roadmap">
      <div className="my-container relative">
        <Heading>Roadmap</Heading>
        <div className="lg:w-11/12 mx-auto pb-10">
          <SubHeading>
            Donec gravida tellus nec elit consequat ultrices. Vivamus vel tincidunt
            mauris. Sed sollicitudin congue nunc ac iaculis. Vivamus tristique massa ante,
            et accumsan felis imperdiet at. In purus libero, venenatis dignissim massa ac,
            sodales malesuada quam. Aliquam in fermentum metus. Donec in mauris arcu.
          </SubHeading>
        </div>
        <div className="planet">
          <motion.img
            animate={{ rotate: -360 }}
            transition={{
              duration: 15,
              repeatType: "loop",
              repeat: "Infinity",
              easeIn: "linear",
            }}
            className="w-full"
            src="/imgs/planet3.png"
            alt="planet"
          />
        </div>
        <Progressbar />
      </div>
    </div>
  );
}
