import Link from "next/link";

const NotFound = () => {
    return (
        <main className="max-w-screen-xl mx-auto md:pt-64 pt-48 p-4">
            <h1 className="text-center md:text-9xl text-6xl font-bold">404</h1>
            <h2 className="text-center md:text-4xl text-2xl font-semibold">
                This page could not be found
            </h2>
            <Link href="/">Go Back To Home</Link>
        </main>
    );
};

export default NotFound;
