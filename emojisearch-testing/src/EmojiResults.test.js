import App from "./App"
import { screen, render } from "@testing-library/react";

test("renders emoji list", () => {
  render(<App />);
  const rows = screen.getAllByTestId("row");
  expect(rows.length).toEqual(20);
});