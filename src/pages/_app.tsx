import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import "../styles/globals.css";

const Layout = dynamic(() => import("../components/Layout"), {
    ssr: false,
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default MyApp;
