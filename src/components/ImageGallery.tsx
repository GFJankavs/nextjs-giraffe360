import { useMemo, useState } from "react";

import Button from "./Button/Button";
import Carousel from "./Carousel";

import downloadImageFromResponse from "@/utils/downloadImageFromResponse";
import { Images } from "@/types";

interface ImageGalleryProps {
    images: Images[];
    onClose: () => void;
}

const ImageGallery = ({ images, onClose }: ImageGalleryProps) => {
    const [currentIndex, setCurrentIndex] = useState(images.length - 1);

    const imagesOriginal = useMemo(() => {
        return images.map((image) => image.original);
    }, [images]);

    const imagesThumbnail = useMemo(() => {
        return images.map((image) => image.thumbnail);
    }, [images]);

    const handleDownload = async (imageIndex: number) => {
        const response = await fetch(
            `/api/download?url=${images[imageIndex].original}`
        );

        if (!response.ok) {
            throw new Error("Failed to download image");
        }

        await downloadImageFromResponse(response);
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
                    <Carousel
                        images={imagesOriginal}
                        initialIndex={currentIndex}
                        onIndexChange={(value) => setCurrentIndex(value - 1)}
                    />
                </div>
                <div className="flex justify-center w-full py-4">
                    <Button
                        as="button"
                        onClick={() => handleDownload(currentIndex)}
                    >
                        Download
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;
