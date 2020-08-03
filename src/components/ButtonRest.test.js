import React from "react";
import { render, fireEvent } from "react-testing-library";
import ButtonReset from "./ButtonReset";

let count;

const incrementCount = value => {
  count += value;
};

test("Validate to 0 Button works", () => {
  count = 0;
  const { container } = render(
    <ButtonReset value={0} onClickFunction={incrementCount} />
  );
  const button = container.firstChild;
  expect(button.textContent).toBe("0");
  expect(count).toBe(0);
  fireEvent.click(button);
  expect(count).toBe(0);
});
