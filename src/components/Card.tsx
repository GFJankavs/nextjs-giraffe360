import Image from "next/image";
import Button from "./Button";
import { Images } from "@/types";
import Link from "next/link";

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
    onImageClick,
    ...rest
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
            as="image"
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
            {pictureAs === "link" ? renderLink() : renderImage()}
            <div className="p-4 flex justify-between bg-gray-100 h-fit">
                <div className="flex flex-col gap-1/3 justify-center font-bold text-black">
                    <span className="text-base">{cardTitle}</span>
                    {images && <span className="text-xs">{images.length}</span>}
                </div>
                <Button text={btnText} url={url} {...rest} />
            </div>
        </div>
    );
};

export default Card;
