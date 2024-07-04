import { render, screen } from "@utils/test-utils";
import Card, { CardHeader, CardBody } from "@commonComponents/Card/Card";
import { matchers } from "@emotion/jest";

expect.extend(matchers);

describe("Card Component", () => {
  test("renders Card with children", () => {
    render(
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>Content</CardBody>
      </Card>
    );
    const header = screen.getByText("Header");
    const body = screen.getByText("Content");
    expect(header).toBeInTheDocument();
    expect(body).toBeInTheDocument();
  });

  test("applies no padding when noPadding is true", () => {
    const { container } = render(
      <Card noPadding>
        <CardBody>No Padding</CardBody>
      </Card>
    );
    expect(container.firstChild).toHaveStyleRule("padding", "0");
  });
});
