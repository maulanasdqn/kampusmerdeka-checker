import { render } from "@testing-library/react";
import { HomePage } from ".";

describe("Test HomePage", () => {
  it("renders the correct heading text", () => {
    const { getByText } = render(<HomePage />);
    const headingElement = getByText("Waduh");
    expect(headingElement).toBeInTheDocument();
  });
});
