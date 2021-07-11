import Head from "next/head";
import {PAGE_TITLE} from "../../lib/constants";
import TopContainer from "../layout/topcontainer";
import Container from "../../components/container";
import Layout from "../../components/layout";

export default function Testimonials({ preview }) {

    return (
        <>
            <Layout preview={preview}>
                <Head>
                    <title>{PAGE_TITLE}</title>
                </Head>
                <TopContainer/>
                <Container>
                    <div>Testimonials</div>
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps({ preview = false }) {
    return {
        props: { preview },
    }
}
