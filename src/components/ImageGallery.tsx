import { Images } from "@/types";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import Button from "./Button/Button";
import Loader from "./Loader";
import downloadImageFromResponse from "@/utils/downloadImageFromResponse";
import next from "next";

interface ImageGalleryProps {
    images: Images[];
    onClose: () => void;
}

const ImageGallery = ({ images, onClose }: ImageGalleryProps) => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [prevIndex, setPrevIndex] = useState<number>(0);
    const [nextIndex, setNextIndex] = useState<number>(2);

    const handleDownload = async (imageIndex: number) => {
        const response = await fetch(
            `/api/download?url=${images[imageIndex].original}`
        );

        if (!response.ok) {
            throw new Error("Failed to download image");
        }

        await downloadImageFromResponse(response);
    };

    const handleNext = () => {
        setPrevIndex(currentIndex);
        setCurrentIndex(nextIndex);
        setNextIndex(nextIndex + 1 === images.length ? 0 : nextIndex + 1);
    };

    const handlePrev = () => {
        setNextIndex(currentIndex);
        setCurrentIndex(prevIndex);
        setPrevIndex(prevIndex - 1 === -1 ? images.length - 1 : prevIndex - 1);
    };

    return (
        <div className="p-4 bg-primary w-full max-w-[832px]">
            <div className="flex flex-col">
                <div className="flex justify-end items-center">
                    <button
                        title="Close Gallery"
                        className="text-white text-2xl font-bold hover:text-yellow-400"
                        onClick={onClose}
                    >
                        X
                    </button>
                </div>
                <div className="relative w-full max-w-[800px] overflow-hidden">
                    <Image
                        src={images[currentIndex].original}
                        alt="Image"
                        className="w-full h-auto transition-transform duration-500"
                        width={800}
                        height={800}
                        priority
                    />
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
                <div className="flex justify-center w-full py-4">
                    <Button
                        as="button"
                        onClick={() => handleDownload(currentIndex)}
                    >
                        Download
                    </Button>
                </div>
                <div className="flex w-full justify-center">
                    <button
                        className="bg-transparent border-none"
                        title="Show previous image"
                        onClick={handlePrev}
                    >
                        <Image
                            src={images[prevIndex].thumbnail}
                            alt="Image"
                            width={80}
                            height={80}
                            className="opacity-80 hover:opacity-100"
                        />
                    </button>
                    <button
                        className="bg-transparent border-2 border-white"
                        title="Current image"
                    >
                        <Image
                            src={images[currentIndex].thumbnail}
                            alt="Image"
                            width={80}
                            height={80}
                        />
                    </button>
                    <button
                        className="bg-transparent border-none"
                        title="Show next image"
                        onClick={handleNext}
                    >
                        <Image
                            src={images[nextIndex].thumbnail}
                            alt="Image"
                            width={80}
                            height={80}
                            className="opacity-80 hover:opacity-100"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;
