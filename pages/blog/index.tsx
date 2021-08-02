import HeroPost from "../../components/hero-post";
import MoreStories from "../../components/more-stories";
import Container from "../../components/container";
import Layout from "../../components/layout";
import Head from "next/head";
import {PAGE_TITLE} from "../../lib/constants";
import TopContainer from "../layout/topcontainer";
import {getAllPostsForHome} from "../../lib/graphcms";
import Footer from "../layout/footer";



export default function Testimonials({ posts, preview }) {

    const heroPost = posts[0]
    const morePosts = posts.slice(1)

    return (
        <>
            <Layout preview={preview}>
                <Head>
                    <title>{PAGE_TITLE}</title>
                </Head>
                <TopContainer/>
                <Container>
                    {heroPost && (
                        <HeroPost
                            title={heroPost.title}
                            coverImage={heroPost.coverImage}
                            date={heroPost.date}
                            author={heroPost.author}
                            slug={heroPost.slug}
                            excerpt={heroPost.excerpt}
                        />
                    )}
                    {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                </Container>
                <Footer/>
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
