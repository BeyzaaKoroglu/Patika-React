import App from "./App"
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("copies emoji", ()=>{
    render(<App />);
    const rows = screen.getAllByTestId("row");
    const eIndex = 3;
    expect(rows[eIndex]).toHaveAttribute("data-clipboard-text")
})
