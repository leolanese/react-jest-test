import React from "react";

const ButtonReset = ({ value, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(value);
  };
  return <button onClick={handleClick}>{value}</button>;
};

export default ButtonReset;
