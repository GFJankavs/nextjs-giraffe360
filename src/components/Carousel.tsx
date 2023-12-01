"use client";

import { on } from "events";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface Props {
    images: string[];
    initialIndex: number;
    onIndexChange: (index: number) => void;
}

const Carousel = ({ images, initialIndex, onIndexChange }: Props) => {
    const [imagesCarousel, setImagesCarousel] = useState<string[]>([
        images[images.length - 1],
        ...images,
        images[0],
    ]);

    const imageContainerRef = useRef<HTMLDivElement | null>(null);
    const currentIndexRef = useRef<number>(1);

    const onInitialLoad = () => {
        if (!imageContainerRef.current) return;

        const imageContainerWidth = imageContainerRef.current.clientWidth;

        imageContainerRef.current.style.transitionDuration = "0s";
        imageContainerRef.current.style.transform = `translateX(-${imageContainerWidth}px)`;
    };

    useEffect(() => {
        onInitialLoad();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (!imageContainerRef.current) return;

            const imageContainerWidth =
                imageContainerRef.current.children[currentIndexRef.current]
                    .clientWidth;

            imageContainerRef.current.style.transitionDuration = "0s";
            imageContainerRef.current.style.transform = `translateX(-${imageContainerWidth}px)`;
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleNext = () => {
        if (!imageContainerRef.current) return;

        const imageContainerWidth = imageContainerRef.current.clientWidth;

        if (currentIndexRef.current < imagesCarousel.length - 1) {
            currentIndexRef.current++;
            onIndexChange(currentIndexRef.current);
            imageContainerRef.current.style.transitionDuration = "0.5s";
            imageContainerRef.current.style.transform = `translateX(-${
                currentIndexRef.current * imageContainerWidth
            }px)`;

            if (currentIndexRef.current === imagesCarousel.length - 1) {
                setTimeout(() => {
                    if (!imageContainerRef.current) return;
                    imageContainerRef.current.style.transitionDuration = "0.0s";
                    imageContainerRef.current.style.transform = `translateX(-${imageContainerWidth}px)`;
                    currentIndexRef.current = 1;
                    onIndexChange(currentIndexRef.current);
                }, 500);
            }
        }
    };

    const handlePrev = () => {
        if (!imageContainerRef.current) return;
        const imageContainerWidth = imageContainerRef.current.clientWidth;

        if (currentIndexRef.current > 0) {
            currentIndexRef.current--;
            onIndexChange(currentIndexRef.current);
            imageContainerRef.current.style.transitionDuration = "0.5s";
            imageContainerRef.current.style.transform = `translateX(-${
                currentIndexRef.current * imageContainerWidth
            }px)`;

            if (currentIndexRef.current === 0) {
                setTimeout(() => {
                    if (!imageContainerRef.current) return;
                    imageContainerRef.current.style.transitionDuration = "0.0s";
                    imageContainerRef.current.style.transform = `translateX(-${
                        (imageContainerRef.current.children.length - 2) *
                        imageContainerWidth
                    }px)`;
                    currentIndexRef.current =
                        imageContainerRef.current.children.length - 2;
                    onIndexChange(currentIndexRef.current);
                }, 500);
            }
        } else {
            return;
        }
    };

    return (
        <div className="w-full h-auto bg-transparent overflow-hidden relative">
            <div
                ref={imageContainerRef}
                id="image-container"
                className="flex flex-row w-fit"
            >
                {imagesCarousel.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="w-auto h-full box-border"
                        width={imageContainerRef.current?.clientWidth ?? 800}
                        height={imageContainerRef.current?.clientHeight ?? 800}
                    />
                ))}
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center">
                <button
                    title="Previous Image"
                    className="text-black text-6xl font-bold hover:text-yellow-400"
                    onClick={handlePrev}
                >
                    &lt;
                </button>
                <button
                    title="Next Image"
                    className="text-black text-6xl font-bold hover:text-yellow-400"
                    onClick={handleNext}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Carousel;
