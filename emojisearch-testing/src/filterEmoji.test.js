import App from "./App"
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import filterEmoji from "./filterEmoji";

test('renders filtered list', () => {
    render(<App/>)

    const filter = screen.getByTestId("filter");
    const filterKey = "computer"

    userEvent.type(filter, filterKey)

    const rows = screen.getAllByTestId("row");
    expect(rows.length).toEqual(filterEmoji(filterKey, 20).length);
})