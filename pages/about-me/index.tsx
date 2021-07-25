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

export default function AboutMe({ preview }) {

    return (
        <>
            <Layout preview={preview}>
                <Head>
                    <title>{PAGE_TITLE}</title>
                </Head>
                <TopContainer/>
                <Banner/>
                <Container>

                    <Row>
                        <Col md={4}>
                            <Image src={'/cards/card-1.png'} fluid/>
                        </Col>

                        <Col>
                            <div>
                                <p>Hi, I am Olivia! I was born and raised in Jakarta, Indonesia. Now, I live in Germany after living in The Netherlands for 7 years with my husband and our two cats: Kiitos and Kolombo. I have been an expat for 6 years now (and counting). I founded PALMY Coaching in 2021 after years of struggling with anxiety, orthorexia and burn-out. As a Certified Personal Trainer, Certified Nutrition Coach and being triple accredited as a Life Coach, I am here to help you GET FIT Wholefully!</p>
                                <p>PALMY means a prosperous, thriving, successful and triumphant*. In the past, the palm branch symbolized a victory*. PALMY Coaching stands that whenever you are in life, with the right mindset,  you can be a winner. I understand that life is stressful, time is stretching, and other priorities seem to drag you away from taking good care of yourself - who has time for exercising, eating well or processing emotions anyway? I know, I've been there. My experiences and education have shown me over and over again that mind, movement and meal are intertwined. Therefore, I am keen to be qualified in fitness, nutrition and life coaching.</p>
                                <p>When you work with me, you will have an accountable partner who relates with you and is able to foresee your long term winning. I believe in no shortcut and overcomplexity does not always yield results. With my coaching program, I will provide you with strategic tools/plans that are simple, executable and work!</p>
                                <p>PALMY approach is as follows:</p>

                                <ul>
                                    <li>Progression over perfection</li>
                                    <li>Attainable goals</li>
                                    <li>Lasting lifestyle</li>
                                    <li>Mind over matter</li>
                                    <li>YOU as the anchor.</li>
                                </ul>
                                <p>If you are ready to make a positive change in your life, you can apply below or book a 15 min call with me to find out if we are the right match (no obligation follows).</p>
                            </div>
                        </Col>

                    </Row>

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
