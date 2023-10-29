import React from "react";

const TimeControls = ({
  timeLimitP1,
  setTimeLimitP1,
  timeLimitP2,
  setTimeLimitP2,
  increment,
  setIncrement,
}) => {
  const timeControls = [
    { time: 1, increment: 0 },
    { time: 1, increment: 2 },
    { time: 3, increment: 0 },
    { time: 3, increment: 2 },
    { time: 5, increment: 0 },
    { time: 5, increment: 5 },
    { time: 10, increment: 0 },
    { time: 15, increment: 10 },
    { time: 30, increment: 0 },
  ];

  return (
    <>
      <p className="d-flex m-0">
        <a
          className="btn btn-primary"
          data-bs-toggle="collapse"
          href="#timeControls"
          role="button"
          aria-expanded="false"
          aria-controls="timeControls">
          TimeControls
        </a>
      </p>
      <div className="row">
        <div className="col">
          <div className="collapse multi-collapse" id="timeControls">
            <div className="">
              {timeControls.map(({ time, increment }, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setTimeLimitP1(Number(time) * 60);
                      setIncrement(increment);
                      setTimeLimitP2(Number(time) * 60);
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
