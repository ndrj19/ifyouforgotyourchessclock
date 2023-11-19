import { useState, useEffect } from "react";
import "./App.css";
import Heading from "./components/Heading";
import ClockContainer from "./components/ClockContainer";
import HowToModal from "./components/HowToModal";

function App() {
  let [timeLimitP1, setTimeLimitP1] = useState(300);
  let [timeLimitP2, setTimeLimitP2] = useState(300);
  const [increment, setIncrement] = useState(0);
  let [movesP1, setMovesP1] = useState(0);
  let [movesP2, setMovesP2] = useState(0);
  let [turn, setTurn] = useState(0);
  const [gameMode, setGameMode] = useState("5 min");
  const [timeUpP1, setTimeUpP1] = useState(false);
  const [timeUpP2, setTimeUpP2] = useState(false);
  const [updateTime, setUpdateTime] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (timeLimitP1 === 0 || timeLimitP2 === 0) {
      setUpdateTime(false);
    }
  }, [timeLimitP1, timeLimitP2]);

  useEffect(() => {
    let interval;

    if (turn === 11) {
    } else if (turn === 1 && updateTime && !isPaused) {
      movesP1 > 0 ? setTimeLimitP1(timeLimitP1 + increment) : null;
      setMovesP1((prevMove) => prevMove + 1);
      interval = setInterval(() => {
        setTimeLimitP1((timeLeft) => {
          return timeLeft > 0 ? timeLeft - 1 : 0;
        });
      }, 1000);
    } else if (turn === 2 && updateTime && !isPaused) {
      movesP2 > 0 ? setTimeLimitP2(timeLimitP2 + increment) : null;
      setMovesP2((prevMove) => prevMove + 1);
      interval = setInterval(() => {
        setTimeLimitP2((timeLeft) => {
          return timeLeft > 0 ? timeLeft - 1 : 0;
        });
      }, 1000);
    } else if (turn === 1 && updateTime && isPaused) {
      setIsPaused(false);
      interval = setInterval(() => {
        setTimeLimitP1((timeLeft) => {
          return timeLeft > 0 ? timeLeft - 1 : 0;
        });
      }, 1000);
    } else if (turn === 2 && updateTime && isPaused) {
      setIsPaused(false);
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

  const switchTurn = (event) => {
    if (event.key === " " || event.keyCode === 32) {
      if (turn === 0) {
        setTurn(1);
      } else {
        setTurn((prevTurn) => (prevTurn === 1 ? 2 : 1));
      }
    }
  };
  const switchTurnClick = (event) => {
    if (turn === 0) {
      setTurn(1);
    } else {
      setTurn((prevTurn) => (prevTurn === 1 ? 2 : 1));
    }
  };

  const pause = (event) => {
    if (turn === 1) {
      setTurn(11);
      setIsPaused(true);
    } else if (turn === 11) {
      setTurn(1);
      // setIsPaused(false);
    } else if (turn === 2) {
      setTurn(22);
      setIsPaused(true);
    } else if (turn === 22) {
      setTurn(2);
      // setIsPaused(false);
    }
  };
  return (
    <div
      className="vh-100 bg-secondary-subtle container"
      tabIndex="0"
      onKeyDown={switchTurn}
      // onClick={switchTurnClick}
    >
      <Heading
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
        switchTurnClick={switchTurnClick}
      />
      <div className="d-flex flex-column align-items-center gap-4">
        <button
          className="btn btn-sm btn-secondary border border-dark rounded border-3"
          onClick={pause}>
          <i
            className={`fa-solid ${
              isPaused ? "fa-circle-play" : "fa-circle-pause"
            }`}></i>
        </button>
        <HowToModal />
      </div>
    </div>
  );
}

export default App;
