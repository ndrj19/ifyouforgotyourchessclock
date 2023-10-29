import React from "react";

const TimeFormatted = ({ timeLimit }) => {
  const minutes = Math.floor(Number(timeLimit) / 60);
  const seconds = Number(timeLimit) % 60;
  return (
    <div className="timer fw-bolder">{`${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}</div>
  );
};

export default TimeFormatted;
