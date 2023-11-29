"use client";

import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Tooltip from "../Tooltip";

interface Props {
    children: React.ReactNode;
    tooltip: string;
    onClick: () => void;
}

const ButtonWithTooltip = ({ children, tooltip, onClick }: Props) => {
    const [showTooltip, setShowTooltip] = useState<boolean>(false);
    const tootipTimeoutId = useRef<NodeJS.Timeout | null>(null);

    const handleClick = () => {
        onClick();
        setShowTooltip(true);
        if (tootipTimeoutId.current) clearTimeout(tootipTimeoutId.current);
        tootipTimeoutId.current = setTimeout(() => setShowTooltip(false), 2000);
    };

    useEffect(() => {
        return () => {
            if (tootipTimeoutId.current) clearTimeout(tootipTimeoutId.current);
        };
    }, []);

    return (
        <div className="relative">
            <Button onClick={handleClick} as="button">
                {children}
            </Button>
            <Tooltip showTooltip={showTooltip}>{tooltip}</Tooltip>
        </div>
    );
};

export default ButtonWithTooltip;
