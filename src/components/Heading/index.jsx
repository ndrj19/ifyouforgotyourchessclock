import React from "react";
import TimeControls from "../TimeControls";

const Heading = ({ timeLimit, setTimeLimit }) => {
  return (
    <div className="p-2 bg-secondary text-white d-flex flex-column justify-content-center align-items-center">
      <h1 className="m-0">ifyouforgotyourchessclock.com</h1>
      <TimeControls timeLimit={timeLimit} setTimeLimit={setTimeLimit} />
    </div>
  );
};

export default Heading;
