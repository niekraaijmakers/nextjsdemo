import Head from 'next/head';
import '../styles/index.scss'

function MyApp({ Component, pageProps }) {

  return <>

    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

    </Head>
    <Component {...pageProps} />

    </>
}

export default MyApp
