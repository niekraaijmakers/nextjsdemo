import Container from "../../components/container";
import Layout from "../../components/layout";
import Head from "next/head";
import {PAGE_TITLE} from "../../lib/constants";
import TopContainer from "../layout/topcontainer";
import Footer from "../layout/footer";


export default function Services({ preview }) {

    return (
        <>
            <Layout preview={preview}>
                <Head>
                    <title>{PAGE_TITLE}</title>
                </Head>
                <TopContainer/>
                <Container>
                    <h1>Services</h1>
                </Container>
                <Footer/>
            </Layout>
        </>
    )
}

export async function getStaticProps({ preview = false }) {
    return {
        props: { preview },
    }
}
