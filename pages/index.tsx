
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/graphcms'
import Head from 'next/head'
import { PAGE_TITLE } from '../lib/constants'
import TopContainer from './layout/topcontainer';
import Container from "react-bootstrap/Container";
import {Button, Jumbotron} from "react-bootstrap";
import Image from 'next/image'

function HeroBanner() {
  return (
      <Jumbotron className={"main-hero min-vh-10"}>

            <Image src={"https://redaktion.original-boot.camp/site/assets/files/21839/outdoor-bootcamp-training-essen.jpg"} layout={"fill"}/>
            <div className={"img-overlay"}></div>
            <Container className={"main-hero-container"}>
                <p>Start living up to your potential!</p>
                <p>
                    <Button variant="primary">Get Started</Button>
                </p>
            </Container>

      </Jumbotron>
    );
}

export default function Index({ posts, preview }) {

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{PAGE_TITLE}</title>
        </Head>
        <TopContainer/>
        <HeroBanner />
        <Container>


        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const posts = (await getAllPostsForHome(preview)) || []
  return {
    props: { posts, preview },
  }
}
