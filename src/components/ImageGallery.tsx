import { Images } from "@/types";
import Image from "next/image";
import { useState } from "react";

interface ImageGalleryProps {
    images: Images[];
    onClose: () => void;
}

const ImageGallery = ({ images, onClose }: ImageGalleryProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDownload = () => {
        console.log("download");
    };

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div>
            <div className="flex justify-between">
                <button onClick={handlePrev}>&lt;</button>
                <button onClick={handleNext}>&gt;</button>
            </div>
            <div className="flex overflow-x-auto mt-4 gap-4">
                {images.map((image, index) => (
                    <Image
                        key={index}
                        src={image.original}
                        width={1000}
                        height={1000}
                        alt={`Image ${index + 1}`}
                        className={`h-16 cursor-pointer ${
                            currentIndex === index
                                ? "border-2 border-blue-500"
                                : ""
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
            <button
                onClick={handleDownload}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
                Download
            </button>
        </div>
    );
};

export default ImageGallery;
