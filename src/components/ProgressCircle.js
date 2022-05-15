import React, { useEffect } from "react";

export default function ProgressCircle({ offset, month }) {
  return (
    <div className="relative progress-circle">
      <svg viewBox="0 0 92 92" xmlns="http://www.w3.org/2000/svg" height="92" width="92">
        <circle
          stroke="grey"
          strokeDasharray="240 240"
          style={{ strokeDashoffset: 0 }}
          strokeWidth="4"
          fill="black"
          r="34"
          cx="46"
          cy="46"
        ></circle>
        <circle
          className="visible"
          stroke="#a762ea"
          strokeDasharray="240 240"
          style={{
            strokeDashoffset: 0,
            transformOrigin: `50% 50%`,
            transform: "rotate(270deg)",
          }}
          strokeWidth="4"
          fill="black"
          r="34"
          cx="46"
          cy="46"
        ></circle>
      </svg>
      <div className="legend">
        {month}
        <br />
        2021
      </div>
    </div>
  );
}
