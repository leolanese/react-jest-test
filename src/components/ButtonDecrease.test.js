import React from "react";
import { render, fireEvent } from "react-testing-library";
import ButtonDecrease from "./ButtonDecrease";

let count;

const incrementCount = value => {
  count += value;
};

test("Validate 1 Button works", () => {
  count = 0;
  const { container } = render(
    <ButtonDecrease value={1} onClickFunction={incrementCount} />
  );
  const button = container.firstChild;
  expect(button.textContent).toBe("1");
  expect(count).toBe(0);
  fireEvent.click(button);
  expect(count).toBe(1);
});
