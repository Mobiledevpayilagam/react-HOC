import { useState } from "react";
import "./App.css";
import ReturnANumber from "./components/ReturnANumber";
import ReturnAString from "./components/ReturnAString";
import ReturnWhatIsPassed from "./components/ReturnWhatIsPassed";

function App() {
  return (
    <div className="App">
      <ReturnANumber numberFromProps={1920} />
      <ReturnAString stringFromProps={"wersdfsdf"} />
      <ReturnWhatIsPassed data={1212} />
      <ReturnWhatIsPassed data={"hello world!"} />
      <ReturnWhatIsPassed data={1.2232323} />
    </div>
  );
}

export default App;
