"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Props {
    text: string;
    url?: string;
    isVirtualTour?: boolean;
}

const Button = ({ text, url, isVirtualTour = false }: Props) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const tootipTimeoutId = useRef<NodeJS.Timeout | null>(null);

    const handleClick = () => {
        if (isVirtualTour && url) {
            navigator.clipboard.writeText(url);
            setShowTooltip(true);
            if (tootipTimeoutId.current) clearTimeout(tootipTimeoutId.current);
            tootipTimeoutId.current = setTimeout(
                () => setShowTooltip(false),
                2000
            );
        }
    };

    useEffect(() => {
        return () => {
            if (tootipTimeoutId.current) clearTimeout(tootipTimeoutId.current);
        };
    }, []);

    if (isVirtualTour) {
        <div className="relative">
            <button
                type="button"
                onClick={handleClick}
                className="transition-colors duration-300 bg-yellow-400 hover:bg-white border-yellow-400 border-solid border-2 rounded-lg font-bold text-xs py-3 px-6 h-auto"
            >
                {text}
            </button>
            <div
                className={`absolute top-0 left-1/2 -mt-8 p-2 bg-black text-white rounded -translate-x-1/2  transition-opacity duration-500  ${
                    showTooltip ? "opacity-100 animate-rise" : "opacity-0"
                } -translate-y-3 -translate-x-1/2`}
            >
                Copied!
            </div>
        </div>;
    }

    return url ? (
        <Link
            href={url}
            className="transition-colors duration-300 bg-yellow-400 hover:bg-white border-yellow-400 border-solid border-2 rounded-lg font-bold text-xs py-3 px-6 h-auto"
        >
            {text}
        </Link>
    ) : (
        <button
            type="button"
            onClick={handleClick}
            className="transition-colors duration-300 bg-yellow-400 hover:bg-white border-yellow-400 border-solid border-2 rounded-lg font-bold text-xs py-3 px-6 h-auto"
        >
            {text}
        </button>
    );
};

export default Button;
