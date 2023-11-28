import { ApartmentFetchData, ApartmentGridData } from "@/types";

const convertDataKeysToPascal = <T extends ApartmentFetchData>(data: T): ApartmentGridData => {
    const { floor_plans, stills, virtual_tours, floor_plan_archive_download_url, stills_archive_download_url, ...rest } = data;
    return {
        ...rest,
        floorPlans: floor_plans,
        stills,
        virtualTours: virtual_tours,
        floorPlanArchiveDownloadUrl: floor_plan_archive_download_url,
        stillsArchiveDownloadUrl: stills_archive_download_url,
    };
};

export default convertDataKeysToPascal;

