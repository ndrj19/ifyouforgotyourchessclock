import React from "react";
import TimeControls from "../TimeControls";

const Heading = ({
  timeLimitP1,
  setTimeLimitP1,
  timeLimitP2,
  setTimeLimitP2,
  increment,
  setIncrement,
  gameMode,
  setGameMode,
  setUpdateTime,
  setTurn,
  setMovesP1,
  setMovesP2,
}) => {
  return (
    <div className="row p-2 bg-secondary text-white d-flex flex-column justify-content-center align-items-center gap-2">
      <h1 className="col m-0 fs-1 text-center iyfycc">
        ifyouforgotyourchessclock.com
      </h1>
      <TimeControls
        timeLimitP1={timeLimitP1}
        setTimeLimitP1={setTimeLimitP1}
        timeLimitP2={timeLimitP2}
        setTimeLimitP2={setTimeLimitP2}
        increment={increment}
        setIncrement={setIncrement}
        gameMode={gameMode}
        setGameMode={setGameMode}
        setTurn={setTurn}
        setUpdateTime={setUpdateTime}
        setMovesP1={setMovesP1}
        setMovesP2={setMovesP2}
      />
    </div>
  );
};

export default Heading;
