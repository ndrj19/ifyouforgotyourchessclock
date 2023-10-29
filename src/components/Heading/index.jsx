import React from "react";
import TimeControls from "../TimeControls";

const Heading = () => {
  return (
    <div className="p-2 bg-secondary text-white d-flex flex-column justify-content-center align-items-center">
      <h1 className="m-0">ifyouforgotyourchessclock.com</h1>
      <TimeControls />
    </div>
  );
};

export default Heading;
