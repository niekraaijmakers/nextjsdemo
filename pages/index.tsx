
import Layout from '../components/layout'
import Head from 'next/head'
import { PAGE_TITLE } from '../lib/constants'
import TopContainer from './layout/topcontainer';
import HeroBanner from "../components/hero-banner";
import ServiceCards from "../components/service-cards";
import JumboCarousel from "../components/jumbocarousel";
import SubscribeNewsletterJumbo from "../components/subscribe-newsletter-jumbo";
import Footer from "./layout/footer";
import {getCarouselItemsById} from "../lib/carousel";
import Spacer from "../components/spacer";
import 'node-source-han-sans/SourceHanSans-Regular-all.css';

export default function Index({ preview,carousel }) {

  return (
    <>
      <Layout preview={preview}>
        <Head>

          <title>{PAGE_TITLE}</title>

          <meta name="viewport" content="initial-scale=1, maximum-scale=1"/>
        </Head>
        <TopContainer/>
        <HeroBanner />
        <Spacer/>
        <ServiceCards />
        <Spacer/>
        <JumboCarousel {...carousel} />
        <SubscribeNewsletterJumbo/>
        <Footer/>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const carousel = (await getCarouselItemsById("ckres5r0o0yws0b12pgpx4ul8")) || [];
  return {
    props: {  preview, carousel },
  }
}
