"use client";

import { useState } from "react";

import Card from "./Card";
import Modal from "./Modal";
import ImageGallery from "./ImageGallery";

import { ApartmentGridData, Images } from "@/types";

interface Props {
    gridData: ApartmentGridData;
}

const CardGrid = ({ gridData }: Props) => {
    const [gallery, setGallery] = useState<{
        isOpen: boolean;
        images: Images[];
        galleryType: "stills" | "floorPlans";
    }>({
        isOpen: false,
        images: [],
        galleryType: "stills",
    });

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-20 mb-10">
                <Card
                    cardTitle="Virtual Tour"
                    btnText="Copy Link"
                    linkTitle="Click to open virtual tour"
                    pictureAs="link"
                    imageSrc={gridData.virtualTours[0].thumbnail}
                    url={gridData.virtualTours[0].url}
                    isVirtualTour
                />
                <Card
                    cardTitle="Images"
                    btnText="Download"
                    pictureAs="image"
                    imageSrc={gridData.stills[0].thumbnail}
                    url={gridData.stillsArchiveDownloadUrl}
                    images={gridData.stills}
                    onImageClick={() =>
                        setGallery({
                            isOpen: true,
                            images: gridData.stills,
                            galleryType: "stills",
                        })
                    }
                />
                <Card
                    cardTitle="Floor Plans"
                    btnText="Download"
                    pictureAs="image"
                    imageSrc={gridData.floorPlans[0].thumbnail}
                    url={gridData.floorPlanArchiveDownloadUrl}
                    images={gridData.floorPlans}
                    onImageClick={() =>
                        setGallery({
                            isOpen: true,
                            images: gridData.floorPlans,
                            galleryType: "floorPlans",
                        })
                    }
                />
            </div>
            <Modal
                isOpen={gallery.isOpen}
                onClose={() => setGallery({ ...gallery, isOpen: false })}
            >
                <ImageGallery
                    images={gallery.images}
                    onClose={() => setGallery({ ...gallery, isOpen: false })}
                />
            </Modal>
        </>
    );
};

export default CardGrid;
