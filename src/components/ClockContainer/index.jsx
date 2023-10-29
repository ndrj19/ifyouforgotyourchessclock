import React from "react";
import Clock from "../Clock";

const ClockContainer = () => {
  return (
    <div className="p-5 my-5 bg-secondary-subtle text-white d-flex justify-content-around align-items-center">
      <Clock />
      <Clock />
    </div>
  );
};

export default ClockContainer;
