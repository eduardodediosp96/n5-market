// test-utils.js
import { render } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";
import getTheme from "@theme/Theme";

const mockTheme = getTheme("light");

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={mockTheme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: React.ReactNode,
  options?: any // Changed _options to options
) =>
  render(ui, {
    wrapper: ({ children }: { children?: React.ReactNode }) => (
      <AllTheProviders>{children}</AllTheProviders>
    ),
    ...options,
  });

// re-export everything
export * from "@testing-library/react";
export { mockTheme };

// override render method
export { customRender as render };
