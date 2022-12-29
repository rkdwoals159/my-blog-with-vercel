import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/global.css'
import GNB from './components/GNB'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>재민&apos;s 개발 Blog</title>
        <meta
          name="description"
          content="프론트엔드 개발자 강재민의 개발 블로그입니다."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jaemin-devblog.ml/" />
        <meta property="og:title" content="재민's 개발 Blog" />
        {/* <meta property="og:image" content="https://example.com/image.jpg" /> */}
        <meta property="og:site_name" content="재민's 개발 Blog" />
        <meta property="og:locale" content="ko_KR" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GNB></GNB>
      <Component {...pageProps} />
    </>
  )
}
