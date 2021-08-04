
import Layout from '../components/layout'
import TopContainer from './layout/topcontainer';
import HeroBanner from "../components/hero-banner";
import ServiceCards from "../components/service-cards";
import JumboCarousel from "../components/jumbocarousel";
import SubscribeNewsletterJumbo from "../components/subscribe-newsletter-jumbo";
import Footer from "./layout/footer";
import {getCarouselItemsById} from "../lib/carousel";
import Spacer from "../components/spacer";
import {getBannerById} from "../lib/banner";

export default function Index({ preview,carousel,banner }) {

  return (
    <>
      <Layout preview={preview}>
        <TopContainer/>
        <HeroBanner {...banner} />
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
  const banner = (await getBannerById("ckrxhtsbk6eih0b04w9y23ssj"));
  const carousel = (await getCarouselItemsById("ckres5r0o0yws0b12pgpx4ul8")) || [];
  return {
    props: {  preview, carousel, banner },
  }
}
