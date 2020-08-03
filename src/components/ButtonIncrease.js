import React from "react";

const ButtonIncrease = ({ value, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(value);
  };
  return <button onClick={handleClick}>{value}</button>;
};

export default ButtonIncrease;
