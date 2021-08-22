import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Counter from "../Counter";

test("should return a header with a text", () => {
  const { getByTestId } = render(<Counter />);
  const header = getByTestId("header");
  expect(header).toBeDefined();
  expect(header.textContent).toBe("My Counter");
});

test("should have a counter with a value zero", () => {
  const { getByTestId } = render(<Counter />);
  const counter = getByTestId("counter");

  expect(counter).toBeDefined();
  expect(counter.textContent).toBe("0");
});

test("should have a input with a initial value of 0", () => {
  const { getByTestId } = render(<Counter />);
  const input = getByTestId("input");

  expect(input.value).toBe("1");
});

test("should render a button with +", () => {
  const { getByTestId } = render(<Counter />);
  const addButton = getByTestId("add-button");

  expect(addButton.textContent).toBe("+");
});

test("should render a button with a -", () => {
  const { getByTestId } = render(<Counter />);
  const minusButton = getByTestId("subtract-button");

  expect(minusButton.textContent).toBe("-");
});

test("should change the value on the input", () => {
  const { getByTestId } = render(<Counter />);
  const input = getByTestId("input");

  expect(input.value).toBe("1");

  fireEvent.change(input, {
    target: {
      value: "5",
    },
  });

  expect(input.value).toBe("5");
});

test("should add 1 to the counter", () => {
  const { getByTestId } = render(<Counter />);
  const addButton = getByTestId("add-button");
  const counter = getByTestId("counter");

  expect(counter.textContent).toBe("0");
  fireEvent.click(addButton);
  expect(counter.textContent).toBe("1");
});

test("should remove 1 from the counter", () => {
  const { getByTestId } = render(<Counter />);
  const subtractButton = getByTestId("subtract-button");
  const counter = getByTestId("counter");

  expect(counter.textContent).toBe("0");
  fireEvent.click(subtractButton);
  expect(counter.textContent).toBe("-1");
});

test("should increase the counter by 2 after change the input to 2 ", () => {
  const { getByTestId } = render(<Counter />);
  const addButton = getByTestId("add-button");
  const input = getByTestId("input");
  const counter = getByTestId("counter");

  expect(counter.textContent).toBe("0");
  fireEvent.change(input, {
    target: {
      value: "2",
    },
  });
  fireEvent.click(addButton);
  expect(counter.textContent).toBe("2");
});

test("should decrease the counter by 2 after change the input to 2 and click the subtract button ", () => {
  const { getByTestId } = render(<Counter />);
  const subtractButton = getByTestId("subtract-button");
  const input = getByTestId("input");
  const counter = getByTestId("counter");

  expect(counter.textContent).toBe("0");
  fireEvent.change(input, {
    target: {
      value: "2",
    },
  });
  fireEvent.click(subtractButton);
  expect(counter.textContent).toBe("-2");
});

test("should have the right value after add and subtract buttons click ", () => {
  const { getByTestId } = render(<Counter />);
  const subtractButton = getByTestId("subtract-button");
  const addButton = getByTestId("add-button");
  const input = getByTestId("input");
  const counter = getByTestId("counter");

  expect(counter.textContent).toBe("0");
  fireEvent.change(input, {
    target: {
      value: "2",
    },
  });
  fireEvent.click(addButton);
  fireEvent.click(subtractButton);
  expect(counter.textContent).toBe("0");
});

test('should find the right color in the counter element', () => {
  const { getByTestId } = render(<Counter />);
  const counter = getByTestId("counter");
  const input = getByTestId("input");
  const addButton = getByTestId("add-button");
  const subtractButton = getByTestId("subtract-button");

  expect(counter.className).toBe("");

  fireEvent.change(input, {
    target: {
      value: "50",
    },
  });

  fireEvent.click(addButton);
  fireEvent.click(addButton);
  expect(counter.className).toBe("green");
  fireEvent.click(subtractButton);
  fireEvent.click(subtractButton);
  fireEvent.click(subtractButton);
  fireEvent.click(subtractButton);
  expect(counter.className).toBe("red");
  fireEvent.click(addButton);
  fireEvent.click(addButton);
  fireEvent.click(addButton);
  expect(counter.className).toBe("");

  
});

