import React from "react";
import {Button, ButtonGroup, ThemeProvider} from "@chakra-ui/core";

const ButtonReset = ({ value, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(value);
  };
  return (
      <>
        <ThemeProvider>
          <ButtonGroup spacing={4}>
            <Button onClick={handleClick} variantColor="red" size="md">
              {value}
            </Button>
          </ButtonGroup>
        </ThemeProvider>
      </>
  );
};

export default ButtonReset;
