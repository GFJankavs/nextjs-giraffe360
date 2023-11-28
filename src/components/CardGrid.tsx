"use client";

import { ApartmentGridData } from "@/types";
import Card from "./Card";
import { useState } from "react";

interface Props {
    gridData: ApartmentGridData;
}

const CardGrid = ({ gridData }: Props) => {
    const [showGallery, setShowGallery] = useState(false);
    return (
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
                onImageClick={() => console.log("Image clicked")}
            />
            <Card
                cardTitle="Floor Plans"
                btnText="Download"
                pictureAs="image"
                imageSrc={gridData.floorPlans[0].thumbnail}
                url={gridData.floorPlanArchiveDownloadUrl}
                images={gridData.floorPlans}
            />
        </div>
    );
};

export default CardGrid;
