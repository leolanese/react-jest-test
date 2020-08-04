import React from "react";
import ButtonDecrease from "./ButtonDecrease";
import { render, fireEvent } from "@testing-library/react";

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
