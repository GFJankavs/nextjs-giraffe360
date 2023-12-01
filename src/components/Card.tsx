/* eslint-disable max-len */
import Image from "next/image";
import Link from "next/link";

import Button from "./Button/Button";
import ButtonCopy from "./Button/ButtonCopy";

import { Images } from "@/types";

interface Props {
    imageSrc: string;
    cardTitle: string;
    images?: Images[];
    url: string;
    pictureAs: "link" | "image";
    linkTitle?: string;
    isVirtualTour?: boolean;
    btnText: string;
    onImageClick?: () => void;
}

const Card = ({
    pictureAs,
    btnText,
    imageSrc,
    cardTitle,
    images,
    url,
    linkTitle,
    isVirtualTour = false,
    onImageClick,
}: Props) => {
    const renderImage = () => (
        <div
            className="cursor-pointer relative w-full h-60"
            onClick={onImageClick}
        >
            <Image
                className="object-cover max-w-full h-full"
                src={imageSrc}
                alt="Image"
                sizes="500px"
                priority={cardTitle === "Floor Plans"}
                fill
            />
        </div>
    );

    const renderLink = () => (
        <Link
            className="cursor-pointer relative w-full h-60"
            href={url}
            target="_self"
            title={linkTitle}
            type="button"
        >
            <Image
                className="object-cover max-w-full h-full"
                src={imageSrc}
                alt="Image"
                sizes="500px"
                fill
            />
        </Link>
    );

    return (
        <div className="flex flex-col justify-between rounded-lg border-2 overflow-hidden transition-transform-shadow duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-2.5">
            {isVirtualTour ? renderLink() : renderImage()}
            <div className="p-4 flex justify-between bg-gray-100 h-fit">
                <div className="flex flex-col gap-1/3 justify-center font-bold text-black">
                    <span className="text-base">{cardTitle}</span>
                    {images && <span className="text-xs">{images.length}</span>}
                </div>
                {isVirtualTour ? (
                    <ButtonCopy link={url}>Copy link</ButtonCopy>
                ) : (
                    <Button as="link" url={url}>
                        {btnText}
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Card;
