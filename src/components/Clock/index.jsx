import React from "react";
import Moves from "../Moves";
import TimeFormatted from "../TimeFormatted";

const Clock = ({ timeLimit }) => {
  return (
    <div className="d-flex flex-column align-items-center p-5 border border-dark rounded border-3">
      {/* <div className="fw-bolder timer">{timeLimit}</div> */}
      <TimeFormatted timeLimit={timeLimit} />
      <Moves />
    </div>
  );
};

export default Clock;
