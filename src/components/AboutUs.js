import React from "react";
import AboutUsOuterLayer from "./AboutUsOuterLayer";
import Heading from "./Heading";
import Star from "./Star";
import { motion } from "framer-motion";
import SubHeading from "./SubHeading";
export default function AboutUs() {
  return (
    <div id="about-us">
      <div className="my-container lg:pb-20 relative">
        <AboutUsOuterLayer />
        <div className="absolute  w-1/6  -top-9 left-0">
          <Star />
        </div>
        <Heading>
          <span className="text-white">About</span>{" "}
          <span className="text-purp">Robo kicks</span>
        </Heading>
        <SubHeading>
          Donec gravida tellus nec elit consequat ultrices. Vivamus vel tincidunt mauris.
          Sed sollicitudin congue nunc ac iaculis. Vivamus tristique massa ante, et
          accumsan felis imperdiet at. In purus libero, venenatis dignissim massa ac,
          sodales malesuada quam. Aliquam in fermentum metus. Donec in mauris arcu.
        </SubHeading>
        <img className="w-full" src="/imgs/about-us.png" alt="Squad" />
        <div className="absolute  w-1/12  top-3/4 left-0">
          <Star anim />
        </div>
        <div className="absolute  w-1/12 top-1/3 right-0">
          <Star />
        </div>
        <div className="absolute  w-1/12 top-full right-11">
          <Star />
        </div>
      </div>
    </div>
  );
}
