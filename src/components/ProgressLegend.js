import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function ProgressLegend({ cnt, position }) {
  const { ref, inView } = useInView({ threshold: 0 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
      className={position ? "" : "progress-legend max-w-md "}
    >
      <div className="flex flex-col z-10">
        <span className="text-base lg:text-lg text-purp font-bold font-exo">
          {cnt.title}
        </span>

        <p className="pt-2 text-xs lg:text-sm   text-white font-exo">{cnt.text}</p>
      </div>
    </motion.div>
  );
}
