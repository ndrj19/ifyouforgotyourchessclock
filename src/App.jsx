import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import ClockContainer from "./components/ClockContainer";

function App() {
  const [timeLimit, setTimeLimit] = useState("");

  return (
    <div className="vh-100 bg-secondary-subtle">
      <Heading timeLimit={timeLimit} setTimeLimit={setTimeLimit} />
      <ClockContainer timeLimit={timeLimit} />
    </div>
  );
}

export default App;
