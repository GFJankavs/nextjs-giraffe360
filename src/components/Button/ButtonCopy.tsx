import ButtonWithTooltip from "./ButtonWithTooltip";

interface Props {
    link: string;
    children: React.ReactNode;
}

const ButtonCopy = ({ children, link }: Props) => {
    const handleCopyLink = () => {
        navigator.clipboard.writeText(link);
    };

    return (
        <ButtonWithTooltip onClick={() => handleCopyLink()} tooltip="Copied!">
            {children}
        </ButtonWithTooltip>
    );
};

export default ButtonCopy;
