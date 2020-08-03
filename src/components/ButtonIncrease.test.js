import React from "react";
import { render, fireEvent } from "react-testing-library";
import ButtonIncrease from "./ButtonIncrease";

let count;

const incrementCount = value => {
  count += value;
};

test("Validate 1 Button works", () => {
  count = 0;
  const { container } = render(
    <ButtonIncrease value={1} onClickFunction={incrementCount} />
  );
  const button = container.firstChild;
  expect(button.textContent).toBe("1");
  expect(count).toBe(0);
  fireEvent.click(button);
  expect(count).toBe(1);
});

test("Validate +10 Button works", () => {
  count = 0;
  const { container } = render(
    <ButtonIncrease value={10} onClickFunction={incrementCount} />
  );
  const button = container.firstChild;
  expect(button.textContent).toBe("10");
  expect(count).toBe(0);
  fireEvent.click(button);
  expect(count).toBe(10);
});

test("Validate +100 Button works", () => {
  count = 0;
  const { container } = render(
    <ButtonIncrease value={100} onClickFunction={incrementCount} />
  );
  const button = container.firstChild;
  expect(button.textContent).toBe("100");
  expect(count).toBe(0);
  fireEvent.click(button);
  expect(count).toBe(100);
});
