import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import Header from "../components/Header";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "Giraffe 360 - Dashboard",
    description: "Giraffe 360 test task dashboard",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
