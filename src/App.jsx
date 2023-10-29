import { useState, useEffect } from "react";
import "./App.css";
import Heading from "./components/Heading";
import ClockContainer from "./components/ClockContainer";

function App() {
  let [timeLimitP1, setTimeLimitP1] = useState(300);
  let [timeLimitP2, setTimeLimitP2] = useState(300);
  const [increment, setIncrement] = useState(0);
  let [movesP1, setMovesP1] = useState(0);
  let [movesP2, setMovesP2] = useState(0);
  let [turn, setTurn] = useState(0);

  useEffect(() => {
    let interval;

    if (turn === 1) {
      movesP1 > 0 ? setTimeLimitP1(timeLimitP1 + increment) : null;
      setMovesP1((prevMove) => prevMove + 1);
      interval = setInterval(() => {
        if (timeLimitP1 > 0) {
          setTimeLimitP1((prevTimeLimit) => prevTimeLimit - 1);
          console.log("in int 1");
        }
      }, 1000);
    } else if (turn === 2) {
      movesP2 > 0 ? setTimeLimitP2(timeLimitP2 + increment) : null;
      setMovesP2((prevMove) => prevMove + 1);
      interval = setInterval(() => {
        if (timeLimitP2 > 0) {
          setTimeLimitP2((prevTimeLimit) => prevTimeLimit - 1);
          console.log("in int 2");
        }
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
      />
      <ClockContainer
        timeLimitP1={timeLimitP1}
        timeLimitP2={timeLimitP2}
        movesP1={movesP1}
        setMovesP1={setMovesP1}
        movesP2={movesP2}
        setMovesP2={setMovesP2}
      />
    </div>
  );
}

export default App;
