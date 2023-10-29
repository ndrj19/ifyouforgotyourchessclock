import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import ClockContainer from "./components/ClockContainer";

function App() {
  return (
    <div className="vh-100 bg-secondary-subtle">
      <Heading />
      <ClockContainer />
    </div>
  );
}

export default App;
