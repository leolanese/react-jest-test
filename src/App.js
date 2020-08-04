import React, { useState } from "react";
import ButtonIncrease from "./components/ButtonIncrease";
import ButtonReset from "./components/ButtonReset";
import ButtonDecrease from "./components/ButtonDecrease";

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = value => {
    value === "reset" ? setCount(0) : setCount(count + value);
  };

  return (
    <div>
      <h2>{count}</h2>

      <ButtonIncrease value={1} onClickFunction={incrementCount} />
      <ButtonIncrease value={10} onClickFunction={incrementCount} />
      <ButtonIncrease value={100} onClickFunction={incrementCount} />
      <ButtonIncrease value={1000} onClickFunction={incrementCount} />
      <br />
      <br />
      <ButtonReset value={"reset"} onClickFunction={incrementCount} />
      <br />
      <br />
      <ButtonDecrease value={-1} onClickFunction={incrementCount} />
      <ButtonDecrease value={-10} onClickFunction={incrementCount} />
      <ButtonDecrease value={-100} onClickFunction={incrementCount} />
      <ButtonDecrease value={-1000} onClickFunction={incrementCount} />
    </div>
  );
};

export default App;
