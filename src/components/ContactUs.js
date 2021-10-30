import React from "react";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { motion } from "framer-motion";
import "../styles/contact-us.scss";
import Star from "./Star";

export default function ContactUs() {
  return (
    <div id="contact-us">
      <div className="my-container relative">
        <div className="metheor-2">
          <motion.img
            animate={{ x: [0, 2], y: [0, 2, 2, 5], rotate: 43 }}
            transition={{ duration: 5, repeatType: "mirror", repeat: "Infinity" }}
            className="w-1/12"
            src="/imgs/metheor2.png"
            alt="asteroid"
          />
        </div>
        <Heading>Get in touch</Heading>
        <SubHeading>
          Venenatis dignissim massa ac, sodales malesuada quam. Aliquam in fermentum
          metus. Donec in mauris arcu.
        </SubHeading>
        <form className="contact-form relative">
          <div className="contact-grid">
            <input className="form-input" required type="text" placeholder="Name" />
            <input className="form-input" required type="email" placeholder="Email" />
            <input className="form-input" required type="phone" placeholder="Phone" />
            <textarea
              placeholder="Comment"
              className="form-input comment"
              rows={4}
            ></textarea>
          </div>
          <div className="absolute top-full left-5 w-1/6">
            <Star />
          </div>
          <div className="absolute top-3/4 left-1/2 w-1/12">
            <Star />
          </div>
          <input className="submit" type="submit" value="REQUEST A CALL BACK" />
        </form>{" "}
      </div>
    </div>
  );
}
