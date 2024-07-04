import { render, screen, fireEvent } from "@utils/test-utils";
import NumericInput from "@commonComponents/Inputs/NumericInput/Numericinput";

describe("NumericInput Component", () => {
  test("renders with default value", () => {
    render(<NumericInput value={0} onValueChange={jest.fn()} />);
    const input = screen.getByRole("spinbutton");
    expect(input).toHaveValue(0);
  });

  test("handles value change", () => {
    const handleValueChange = jest.fn();
    render(<NumericInput value={5} onValueChange={handleValueChange} />);
    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: 10 } });
    expect(handleValueChange).toHaveBeenCalledWith(10);
  });

  test("prevents values below minimum", () => {
    const handleValueChange = jest.fn();
    render(
      <NumericInput value={5} min={5} onValueChange={handleValueChange} />
    );
    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: 3 } });
    expect(handleValueChange).toHaveBeenCalledWith(5);
  });

  test("prevents values above maximum", () => {
    const handleValueChange = jest.fn();
    render(
      <NumericInput value={5} max={10} onValueChange={handleValueChange} />
    );
    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: 12 } });
    expect(handleValueChange).toHaveBeenCalledWith(10);
  });

  test("increments and decrements value", () => {
    const handleValueChange = jest.fn();
    render(<NumericInput value={5} onValueChange={handleValueChange} />);
    const incrementButton = screen.getByText("+");
    const decrementButton = screen.getByText("-");
    fireEvent.click(incrementButton);
    expect(handleValueChange).toHaveBeenCalledWith(6);
    fireEvent.click(decrementButton);
    expect(handleValueChange).toHaveBeenCalledWith(4);
  });

  test("disables input and buttons when disabled prop is true", () => {
    render(<NumericInput value={0} disabled onValueChange={jest.fn()} />);
    const input = screen.getByRole("spinbutton");
    const incrementButton = screen.getByText("+");
    const decrementButton = screen.getByText("-");
    expect(input).toBeDisabled();
    expect(incrementButton).toBeDisabled();
    expect(decrementButton).toBeDisabled();
  });
});
