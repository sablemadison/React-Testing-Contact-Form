import React from "react";
import { render, fireEvent, queryByText } from "@testing-library/react";
import App from "./App";
import { exportAllDeclaration } from "@babel/types";

test("renders App without crashing", () => {
  render(<App />);
});


test("renders Last Name", () => {
  const { getByText } = render(<App/>);
  const LastName = getByText(/last name/i);
  expect(LastName).toBeInTheDocument();
})

test("renders First Name", () => {
  const { queryByText } = render(<App/>);
  const firstName = queryByText(/first name/i);
  expect(firstName).toBeInTheDocument();
})

test("renders message", () => {
  const { getByText } = render(<App/>);
  const message = getByText(/message/i);
  expect(message).toBeInTheDocument();
})

test("click button counter increments clicks by 1",() => {
  const { getByText } = render(<App/>)
  const numClickButton = getByText(/click me/i);
  fireEvent.click(numClickButton)
  expect(numClickButton.innerHTML).toBe("click me: 1")
})