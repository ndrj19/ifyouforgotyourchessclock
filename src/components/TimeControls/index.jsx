import React from "react";

const TimeControls = ({
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
  const timeControls = [
    { time: 1, increment: 0 },
    { time: 1, increment: 2 },
    { time: 3, increment: 0 },
    { time: 3, increment: 2 },
    { time: 5, increment: 0 },
    { time: 5, increment: 2 },
    { time: 5, increment: 5 },
    { time: 7.5, increment: 10 },
    { time: 10, increment: 0 },
    { time: 10, increment: 10 },
    { time: 15, increment: 10 },
    { time: 15, increment: 0 },
    { time: 30, increment: 10 },
  ];

  return (
    <>
      <p /*className="d-flex m-0 col justify-content-center"*/>
        <a
          className="btn btn-light dropdown-toggle"
          data-bs-toggle="collapse"
          href="#timeControls"
          role="button"
          aria-expanded="false"
          aria-controls="timeControls">
          TimeControls
        </a>
      </p>
      <div className="col">
        <div /*className="col"*/>
          <div className="collapse multi-collapse" id="timeControls">
            <div className="d-flex gap-1 flex-wrap justify-content-center">
              {timeControls.map(({ time, increment }, index) => {
                return (
                  <button
                    className="btn btn-light"
                    key={index}
                    onClick={() => {
                      setUpdateTime(true);
                      setMovesP1(0);
                      setMovesP2(0);
                      setTurn(0);
                      setTimeLimitP1(Number(time) * 60);
                      setIncrement(increment);
                      setTimeLimitP2(Number(time) * 60);
                      setGameMode(
                        increment === 0 ? `${time} min` : `${time}|${increment}`
                      );
                      // ;
                    }}>
                    {increment === 0 ? `${time} min` : `${time}|${increment}`}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeControls;
