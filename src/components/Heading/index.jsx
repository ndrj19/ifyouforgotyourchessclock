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
    <div className="col p-2 bg-secondary text-white d-flex flex-column justify-content-center align-items-center gap-2 border border-dark rounded-bottom border-3 border-top-0">
      <p className="col m-0 text-center iyfycc">
        <i className="fa-solid fa-chess-knight"></i>
        ifyouforgotyourchessclock.com
        <i className="fa-solid fa-chess-knight fa-flip-horizontal"></i>
      </p>
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
