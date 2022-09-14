import Head from 'next/head';
import Footer from '../3-organism/Footer';
import Header from '../3-organism/Header';
import { motion } from 'framer-motion';

const Main = ({ children, className, secondTitle }) => {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 0.9 } },
    exit: { opacity: 0 },
  };
  return (
    <>
      <Head>
        <title>{secondTitle}</title>
        <meta
          property='og:title'
          content={`Kendo Napoli Shuuenkan | ${secondTitle}`}
          key='title'
        />
        <meta
          name='description'
          content='Lo Shuuenkandojo nasce a Napoli nel 2014 e diventa il primo esperimento italiano di Social Kendo'
        ></meta>
        <meta
          name='keywords'
          content='kendo, napoli, kendo napoli, kendo cik, kendo sport, social, giappone napoli, scherma, samurai napoli, arti marziali, via della spada, kenshi, kenjitsu, iaido, mushin '
        />
        <meta name='robots' content='index, follow, snippet, noarchive'></meta>
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
