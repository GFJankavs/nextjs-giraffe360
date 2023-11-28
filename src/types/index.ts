export interface ApartmentFetchData {
    id: string;
    name: string;
    floor_plans: Images[];
    stills: Images[];
    virtual_tours: VirtualTour[];
    floor_plan_archive_download_url: string;
    stills_archive_download_url: string;
}

export interface ApartmentGridData {
    id: string;
    name: string;
    floorPlans: Images[];
    stills: Images[];
    virtualTours: VirtualTour[];
    floorPlanArchiveDownloadUrl: string;
    stillsArchiveDownloadUrl: string;
}

export interface Images {
    original: string;
    thumbnail: string;
}

interface VirtualTour {
    id: string;
    url: string;
    thumbnail: string;
}