import React from "react";
import Moves from "../Moves";

const Clock = () => {
  return (
    <div className="d-flex flex-column align-items-center p-5 border border-dark rounded border-3">
      <div className="fw-bolder timer">05:00</div>
      <Moves />
    </div>
  );
};

export default Clock;
