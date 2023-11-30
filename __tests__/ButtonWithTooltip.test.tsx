import { render, screen } from "@testing-library/react";
import ButtonWithTooltip from "@/components/Button/ButtonWithTooltip";

describe("<ButtonWithTooltip/>", () => {
    it("should render component", () => {
        render(
            <ButtonWithTooltip tooltip="Test" onClick={() => {}}>
                Test
            </ButtonWithTooltip>
        );
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    it("should render children", () => {
        render(
            <ButtonWithTooltip tooltip="Test" onClick={() => {}}>
                Test
            </ButtonWithTooltip>
        );
        const button = screen.getByRole("button");
        expect(button).toHaveTextContent("Test");
    });
});
