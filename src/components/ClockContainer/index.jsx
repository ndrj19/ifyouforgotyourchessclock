import React from "react";
import Clock from "../Clock";

const ClockContainer = ({
  timeLimitP1,
  movesP1,
  setMovesP1,
  timeLimitP2,
  movesP2,
  setMovesP2,
  gameMode,
  setGameMode,
  timeUpP1,
  setTimeUpP1,
  timeUpP2,
  setTimeUpP2,
  switchTurnClick,
}) => {
  return (
    <div className="col p-5 gap-2 bg-secondary-subtle text-white d-flex flex-wrap justify-content-around align-items-center">
      <Clock
        timeLimit={timeLimitP1}
        moves={movesP1}
        setMoves={setMovesP1}
        gameMode={gameMode}
        setGameMode={setGameMode}
        timeUp={timeUpP1}
        setTimeUp={setTimeUpP1}
        switchTurnClick={switchTurnClick}
        player={1}
      />
      <Clock
        timeLimit={timeLimitP2}
        moves={movesP2}
        setMoves={setMovesP2}
        gameMode={gameMode}
        setGameMode={setGameMode}
        timeUp={timeUpP2}
        setTimeUp={setTimeUpP2}
        switchTurnClick={switchTurnClick}
        player={2}
      />
    </div>
  );
};

export default ClockContainer;
