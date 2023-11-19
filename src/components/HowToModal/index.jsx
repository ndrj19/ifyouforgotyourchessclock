import React from "react";

const HowToModal = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-sm btn-secondary border border-dark rounded border-3"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop">
        How to Use Clock
      </button>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                How to use the Chess Clock
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Use Space to start the clock and trigger Player 1's timer.
              Subsequent Spaces will switch between the players' timers. If
              you're on Mobile tap the screen.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary border border-dark rounded border-3"
                data-bs-dismiss="modal">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToModal;
