import Header from "../components/Header";
import { Poppins } from "next/font/google";

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
