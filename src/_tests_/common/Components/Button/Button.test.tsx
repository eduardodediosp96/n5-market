import Button from "@commonComponents/Button/Button";
import { ButtonType, ButtonSize } from "@commonComponents/Button/Button";
import { render, screen, fireEvent, mockTheme } from "@utils/test-utils";
import { matchers } from "@emotion/jest";

// Add the custom matchers provided by '@emotion/jest'
expect.extend(matchers);

describe("Button Component", () => {
  test("renders button with children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  test("handles onClick event", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies default styles", () => {
    const { container } = render(<Button>Default</Button>);
    expect(container.firstChild).toHaveStyleRule(
      "background-color",
      mockTheme.palette.primary()
    );
  });

  test("applies custom type and size", () => {
    render(
      <Button buttonType={ButtonType.SECONDARY} size={ButtonSize.LARGE}>
        Custom
      </Button>
    );
    const button = screen.getByText("Custom");
    expect(button).toHaveStyleRule("background-color", "transparent");
    expect(button).toHaveStyleRule("padding", "12px");
  });

  test("renders disabled button", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByText("Disabled");
    expect(button).toBeDisabled();
  });

  test("renders full width button", () => {
    render(<Button fullWidth>Full Width</Button>);
    const button = screen.getByText("Full Width");
    expect(button).toHaveStyleRule("width", "100%");
  });
});
