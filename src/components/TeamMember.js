import React from "react";
import { motion } from "framer-motion";
export default function TeamMember({ data, show, delay }) {
  const item = {
    show: {
      y: [0, 5, -5],
      transition: {
        repeat: "Infinity",
        repeatType: "mirror",
        duration: 4,
        delay,
        repeatDelay: 0,
      },
    },
    hidden: {
      y: 0,
    },
  };
  return (
    <div transition={{}} className="w-full flex flex-col items-center">
      <motion.div
        variants={item}
        initial="hidden"
        animate={show ? "show" : "hidden"}
        className="relative robo-container"
      >
        <img className="robo" src={data.imgSrc} alt="Robo" />
        <img className="metheor" src="/imgs/metheor-team.png" alt="metheor" />
      </motion.div>

      <p className="text-purp font-paladins team-name">{data.name}</p>
      <p className="text-white  team-pos">{data.pos}</p>
    </div>
  );
}
