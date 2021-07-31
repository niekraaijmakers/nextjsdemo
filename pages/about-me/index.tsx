import Head from "next/head";
import {PAGE_TITLE} from "../../lib/constants";
import TopContainer from "../layout/topcontainer";
import Container from "../../components/container";
import Layout from "../../components/layout";
import Banner from "./banner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Image} from "react-bootstrap";
import Footer from "../layout/footer";
import {getTextImageById} from "../../lib/textimage";
import TextImage from "../../components/textimage";
export default function AboutMe({ preview , textImage}) {

    return (
        <>
            <Layout preview={preview}>
                <Head>
                    <title>{PAGE_TITLE}</title>
                </Head>
                <TopContainer/>
                <Banner/>
                <TextImage {...textImage}/>
                <Footer/>
            </Layout>
        </>
    )
}

export async function getStaticProps({ params, preview = false }) {
    const data = await getTextImageById("ckrjaiia824p20e04rwb1w6c9")
    return {
        props: {
            preview,
            textImage: data
        },
    }
}

