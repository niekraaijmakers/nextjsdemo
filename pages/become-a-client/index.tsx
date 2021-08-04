import Container from "../../components/container";
import Layout from "../../components/layout";
import Head from "next/head";
import {PAGE_TITLE} from "../../lib/constants";
import TopContainer from "../layout/topcontainer";
import Footer from "../layout/footer";
import {getBannerById} from "../../lib/banner";
import HeroBanner from "../../components/hero-banner";


export default function BecomeAClient({ preview, banner}) {

    return (
        <>
            <Layout preview={preview}>
                <Head>
                    <title>{PAGE_TITLE}</title>
                </Head>
                <TopContainer/>
                <HeroBanner {...banner} />
                <Container>

                    <h1>Become a client</h1>
                </Container>
                <Footer/>
            </Layout>
        </>
    )
}

export async function getStaticProps({ preview = false }) {
    const banner = (await getBannerById("ckrxiy9406qmq0b04x0i0died"));
    return {
        props: { banner, preview },
    }
}
