import React from "react";

export default function TimerCountItem({ time, text }) {
  return (
    <div className="flex flex-col items-center text-white leading-none">
      <p className="timer-digits relative top-3">{time.length > 1 ? time : 0 + time}</p>
      {text === "Seconds" ? (
        <p className="timer-date relative -top-1">{text}</p>
      ) : (
        <p className="timer-date relative -top-1">{text}</p>
      )}
    </div>
  );
}
