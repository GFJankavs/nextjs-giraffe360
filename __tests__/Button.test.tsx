import { render, screen } from "@testing-library/react";
import Button from "@/components/Button/Button";

describe("<Button/>", () => {
    it("should render component", () => {
        render(<Button as="button">Test</Button>);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    it("should trigger function on button click", () => {
        const mockFn = jest.fn();
        render(
            <Button as="button" onClick={mockFn}>
                Test
            </Button>
        );
        const button = screen.getByRole("button");
        button.click();
        expect(mockFn).toHaveBeenCalled();
    });

    it("should render children", () => {
        render(<Button as="button">Test</Button>);
        const button = screen.getByRole("button");
        expect(button).toHaveTextContent("Test");
    });
});
