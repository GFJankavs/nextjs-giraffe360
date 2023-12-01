import CardGrid from "@/components/CardGrid";
import { ApartmentFetchData, ApartmentGridData } from "@/types";
import convertDataKeysToPascal from "@/utils/convertToPascal";

async function getAppartmentData() {
    const res = await fetch("https://giraffe360.com/gapi/share/Av7eeG1/");

    if (!res.ok) {
        throw new Error("Failed to fetch appartment data");
    }

    return res.json();
}

export default async function Home() {
    const fetchData: ApartmentFetchData = await getAppartmentData();
    const data: ApartmentGridData = convertDataKeysToPascal(fetchData);

    return (
        <main className="max-w-screen-xl mx-auto px-4 xl:px-0">
            <h1 className="my-12 text-5xl">{data.name}</h1>
            <CardGrid gridData={data} />
        </main>
    );
}
