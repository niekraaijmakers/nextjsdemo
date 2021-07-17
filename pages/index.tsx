
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/graphcms'
import Head from 'next/head'
import { PAGE_TITLE } from '../lib/constants'
import TopContainer from './layout/topcontainer';
import HeroBanner from "../components/hero-banner";
import ServiceCards from "../components/service-cards";
import HomeCarousel from "../components/homecarousel";
import SubscribeNewsletterJumbo from "../components/subscribe-newsletter-jumbo";


export default function Index({ posts, preview }) {

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{PAGE_TITLE}</title>
          <meta name="viewport" content="initial-scale=1, maximum-scale=1"/>
        </Head>
        <TopContainer/>
        <HeroBanner />
        <ServiceCards />
        <HomeCarousel/>
        <SubscribeNewsletterJumbo/>
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
