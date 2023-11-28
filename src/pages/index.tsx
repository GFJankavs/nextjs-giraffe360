import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ApartmentFetchData, ApartmentGridData } from "../types";
import Head from "next/head";
import Card from "@/components/Card";
import convertDataKeysToPascal from "@/utils/convertToPascal";
import CardGrid from "@/components/CardGrid";

export const getServerSideProps: GetServerSideProps<{
    data: ApartmentGridData;
}> = async () => {
    const responseData = (await fetch(
        "https://giraffe360.com/gapi/share/Av7eeG1/"
    ).then((res) => res.json())) as ApartmentFetchData;
    const data = convertDataKeysToPascal(responseData);
    return { props: { data } };
};

export default function Page({
    data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head>
                <title>Giraffe360 - Dashboard</title>
                <meta
                    name="description"
                    content={`Dashboard for ${data.name}`}
                />
            </Head>

            <main className="max-w-screen-xl mx-auto px-4 xl:px-0">
                <h1 className="my-12 text-5xl">{data.name}</h1>
                <CardGrid gridData={data} />
            </main>
        </>
    );
}
