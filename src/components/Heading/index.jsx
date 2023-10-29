import React from "react";
import TimeControls from "../TimeControls";

const Heading = ({
  timeLimitP1,
  setTimeLimitP1,
  timeLimitP2,
  setTimeLimitP2,
  increment,
  setIncrement,
}) => {
  return (
    <div className="p-2 bg-secondary text-white d-flex flex-column justify-content-center align-items-center">
      <h1 className="m-0">ifyouforgotyourchessclock.com</h1>
      <TimeControls
        timeLimitP1={timeLimitP1}
        setTimeLimitP1={setTimeLimitP1}
        timeLimitP2={timeLimitP2}
        setTimeLimitP2={setTimeLimitP2}
        increment={increment}
        setIncrement={setIncrement}
      />
    </div>
  );
};

export default Heading;
