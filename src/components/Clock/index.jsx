import Moves from "../Moves";
import TimeFormatted from "../TimeFormatted";
import GameMode from "../GameMode";

const Clock = ({
  timeLimit,
  moves,
  setMoves,
  gameMode,
  setGameMode,
  timeUp,
  setTimeUp,
}) => {
  return (
    <div
      className={`d-flex flex-column align-items-center p-5 border border-dark rounded border-3 ${
        timeUp ? "bg-warning" : "bg-secondary"
      }`}>
      <TimeFormatted timeLimit={timeLimit} />
      <Moves moves={moves} setMoves={setMoves} />
      <GameMode gameMode={gameMode} setGameMode={setGameMode} />
    </div>
  );
};

export default Clock;
