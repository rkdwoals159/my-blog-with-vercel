import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/global.css'
import Category from './components/Category'
import GNB from './components/GNB'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>재민&apos;s dev Blog</title>
        <meta
          name="description"
          content="프론트엔드 개발자 강재민의 개발 블로그입니다."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GNB></GNB>
      <Component {...pageProps} />
    </>
  )
}
