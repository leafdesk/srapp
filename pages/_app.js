import '../styles/globals.css';
import Head from 'next/head';
import Top from '../src/components/top';
import BookProvider from '../src/components/bibleProvider';
import HomeBar from '../src/components/HomeBar';

export default function MyApp({ Component, pageProps }) {

  const touchStart = () => {
    let homeBar = document.getElementById('home_bar');
    homeBar.className = 'on';
  }

  const touchMove = () => {
    let homeBar = document.getElementById('home_bar');
    homeBar.className = 'on';
  }

  const touchEnd = () => {
    setTimeout(() => {
      let homeBar = document.getElementById('home_bar');
      homeBar.className = '';
    }, 4000);
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <meta name="theme-color" content="#317EFB" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <title>SRAPP</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" href="/images/splash_test.jpg"></link>
      </Head>
      <BookProvider>
        <Top />
        <div
          onTouchStart={touchStart}
          onTouchEnd={touchEnd}
          onTouchMove={touchMove}
        >
          <Component {...pageProps} />
        </div>
        <HomeBar />
      </BookProvider>
    </>
  )
}
