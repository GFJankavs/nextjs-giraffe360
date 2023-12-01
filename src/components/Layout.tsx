import { Poppins } from "next/font/google";

import Header from "./Header";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={poppins.className}>
            <Header />
            {children}
        </div>
    );
}
