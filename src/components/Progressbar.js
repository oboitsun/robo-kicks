import React from "react";
import ProgressCircle from "./ProgressCircle";
import ProgressLegend from "./ProgressLegend";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import Star from "./Star";

const dw_path = [
  {
    month: "April",
    title: "Donec gravida tellus nec",
    text: `Vivamus vel tincidunt mauris. Sed sollicitudin congue nunc ac iaculis. Vivamus tristique massa ante, et accumsan felis imperdiet at.`,
  },
  {
    month: "May",
    title: "Donec gravida tellus nec",
    text: `Vivamus vel tincidunt mauris. Sed sollicitudin congue nunc ac iaculis. Vivamus tristique massa ante, et accumsan felis imperdiet at.`,
  },
  {
    month: "June",
    title: "Donec gravida tellus nec",
    text: `Vivamus vel tincidunt mauris. Sed sollicitudin congue nunc ac iaculis. Vivamus tristique massa ante, et accumsan felis imperdiet at.`,
  },
  {
    month: "July",
    title: "Donec gravida tellus nec",
    text: `Vivamus vel tincidunt mauris. Sed sollicitudin congue nunc ac iaculis. Vivamus tristique massa ante, et accumsan felis imperdiet at.`,
  },
];
export default function Progressbar() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  return (
    <div ref={ref}>
      <div className="hidden lg:grid progressbar relative">
        <motion.div
          initial={{ height: 0 }}
          animate={inView ? { height: "80%" } : { height: 0 }}
          transition={{ duration: 5 }}
          className="w-1 bg-purp z-0 bar"
        ></motion.div>
        <ProgressLegend cnt={dw_path[0]} />
        <ProgressCircle month={dw_path[0].month} offset={200} />
        <div className="empty hidden lg:block relative w-full">
          <div className="absolute  w-1/4 -top-10 right-1/4">
            <Star />
          </div>
        </div>

        <div className="empty"></div>
        <ProgressCircle month={dw_path[1].month} offset={160} />
        <ProgressLegend cnt={dw_path[1]} />

        <ProgressLegend cnt={dw_path[2]} />
        <ProgressCircle month={dw_path[2].month} offset={100} />
        <div className="empty hidden lg:block relative w-full">
          <div className="absolute  w-1/4 top-0 right-1/4">
            <img className="w-2/3" src="/imgs/metheor3.png" alt="asteroid" />
          </div>
        </div>

        <div className="empty hidden lg:block relative w-full">
          <div className="absolute  w-1/5 top-1/3 left-1/3">
            <Star />
          </div>
        </div>
        <ProgressCircle month={dw_path[3].month} offset={60} />
        <ProgressLegend cnt={dw_path[3]} />
      </div>
      <div className="progressbar grid lg:hidden relative">
        <motion.div
          initial={{ height: 0 }}
          animate={inView ? { height: "80%" } : { height: 0 }}
          transition={{ duration: 5 }}
          className="w-1 bg-purp z-0 bar-mob"
        ></motion.div>

        <ProgressCircle month={dw_path[0].month} offset={200} />
        <ProgressLegend cnt={dw_path[0]} />
        <ProgressCircle month={dw_path[1].month} offset={160} />
        <ProgressLegend cnt={dw_path[1]} />
        <ProgressCircle month={dw_path[2].month} offset={100} />
        <ProgressLegend cnt={dw_path[2]} />
        <ProgressCircle month={dw_path[3].month} offset={60} />
        <ProgressLegend cnt={dw_path[3]} />
      </div>
    </div>
  );
}
