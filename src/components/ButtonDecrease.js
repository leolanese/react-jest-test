import React from "react";

const ButtonDecrease = ({ value, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(value);
  };
  return <button onClick={handleClick}>{value}</button>;
};

export default ButtonDecrease;
