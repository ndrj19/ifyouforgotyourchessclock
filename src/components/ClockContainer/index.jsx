import React from "react";
import Clock from "../Clock";

const ClockContainer = ({ timeLimit }) => {
  return (
    <div className="p-5 my-5 bg-secondary-subtle text-white d-flex justify-content-around align-items-center">
      <Clock timeLimit={timeLimit} />
      <Clock timeLimit={timeLimit} />
    </div>
  );
};

export default ClockContainer;
