import { useState, useEffect } from "react";
import "./App.css";
import Heading from "./components/Heading";
import ClockContainer from "./components/ClockContainer";

function App() {
  let [timeLimitP1, setTimeLimitP1] = useState(3);
  let [timeLimitP2, setTimeLimitP2] = useState(3);
  const [increment, setIncrement] = useState(0);
  let [movesP1, setMovesP1] = useState(0);
  let [movesP2, setMovesP2] = useState(0);
  let [turn, setTurn] = useState(0);
  const [gameMode, setGameMode] = useState("5 min");
  const [timeUpP1, setTimeUpP1] = useState(false);
  const [timeUpP2, setTimeUpP2] = useState(false);

  useEffect(() => {
    let interval;

    if (turn === 1) {
      movesP1 > 0 ? setTimeLimitP1(timeLimitP1 + increment) : null;
      setMovesP1((prevMove) => prevMove + 1);
      interval = setInterval(() => {
        setTimeLimitP1((timeLeft) => {
          return timeLeft > 0 ? timeLeft - 1 : 0;
        });
      }, 1000);
    } else if (turn === 2) {
      movesP2 > 0 ? setTimeLimitP2(timeLimitP2 + increment) : null;
      setMovesP2((prevMove) => prevMove + 1);
      interval = setInterval(() => {
        setTimeLimitP2((timeLeft) => {
          return timeLeft > 0 ? timeLeft - 1 : 0;
        });
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [turn]);

  useEffect(() => {
    console.log("timeUpP1 changed:", timeUpP1);
  }, [timeUpP1]);

  const switchTurn = (event) => {
    if (event.key === " " || event.keyCode === 32) {
      if (turn === 0) {
        setTurn(1);
      } else {
        setTurn((prevTurn) => (prevTurn === 1 ? 2 : 1));
      }
    }
  };

  return (
    <div
      className="vh-100 bg-secondary-subtle"
      tabIndex="0"
      onKeyDown={switchTurn}>
      <Heading
        timeLimitP1={timeLimitP1}
        setTimeLimitP1={setTimeLimitP1}
        timeLimitP2={timeLimitP2}
        setTimeLimitP2={setTimeLimitP2}
        increment={increment}
        setIncrement={setIncrement}
        gameMode={gameMode}
        setGameMode={setGameMode}
      />
      <ClockContainer
        timeLimitP1={timeLimitP1}
        timeLimitP2={timeLimitP2}
        movesP1={movesP1}
        setMovesP1={setMovesP1}
        movesP2={movesP2}
        setMovesP2={setMovesP2}
        gameMode={gameMode}
        setGameMode={setGameMode}
        timeUpP1={timeUpP1}
        setTimeUpP1={setTimeUpP1}
        timeUpP2={timeUpP2}
        setTimeUpP2={setTimeUpP2}
      />
    </div>
  );
}

export default App;
