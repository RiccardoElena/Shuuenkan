import Head from 'next/head';
import Header from '../3-organism/Header';

const Main = ({ children }) => {
  return (
    <>
      <Head>
        <title>Shuuenkan</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap'
          rel='stylesheet'
        />
        <link href='favicon.ico' rel='icon' />
      </Head>
      <main>
        <Header />
        <div className='mt-10'>{children}</div>
      </main>
    </>
  );
};

export default Main;
