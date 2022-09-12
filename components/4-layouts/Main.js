import Head from 'next/head';
import Footer from '../3-organism/Footer';
import Header from '../3-organism/Header';
import { motion } from 'framer-motion';

const Main = ({ children, className }) => {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 0.9 } },
    exit: { opacity: 0 },
  };
  return (
    <>
      <Head>
        <title>Shuuenkan</title>
        <meta property='og:title' content='Shuuenkan' key='title' />
        <meta
          name='description'
          content='Lo Shuuenkandojo nasce a Napoli nel 2014 e diventa il primo esperimento italiano di Social Kendo'
        ></meta>
        <meta
          name='keywords'
          content='kendo, sport, napoli, social, giappone, scherma, samurai, CIK, EKF, JKF, FIK, ZNKR, Dojo, arti marziali, via della spada, kenshi, kenjitsu '
        />
        <meta name='robots' content='index, follow, snippet, noarchive'></meta>

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Aboreto&family=Barlow+Condensed:ital,wght@0,400;0,700;1,400&display=swap'
          rel='stylesheet'
        ></link>

        <link href='favicon.ico' rel='icon' />

        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='/apple-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-icon-180x180.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/android-icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff'></meta>
      </Head>
      <main>
        <Header />
        <div className={` ${className}`}>{children}</div>
        <Footer />
      </main>
    </>
  );
};

export default Main;
