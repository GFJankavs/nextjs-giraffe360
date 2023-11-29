interface Props {
    children: React.ReactNode;
    showTooltip: boolean;
}

const Tooltip = ({ children, showTooltip }: Props) => {
    return (
        <div
            className={`absolute top-0 left-1/2 -mt-8 p-2 bg-black text-white rounded -translate-x-1/2  transition-opacity duration-500  ${
                showTooltip ? "opacity-100 animate-rise" : "opacity-0"
            } -translate-y-3 -translate-x-1/2`}
        >
            {children}
        </div>
    );
};

export default Tooltip;
