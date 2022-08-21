const Footer = () => {
  return (
    <footer className='w-full left-0 bottom-0 text-center pearl text-blue border-t-2 borderBlue'>
      <div className='py-8  hmd:text-lg text-base container flex flex-wrap mx-auto   justfy-items-center'>
        <div className=' hmd:w-1/4 w-1/2 mx-auto '>
          <h1 className='p-4  font-bold'>Dove siamo</h1>
          <p className='p-2'>
            <a
              className='hover:text-blue-600'
              href='https://www.giardinoliberato.org/'
              target='_blank'
              rel='noreferrer'
            >
              Giardino Liberato di Materdei
            </a>
          </p>
          <p className='p-2'>
            <a
              className='hover:text-blue-600'
              href='https://www.google.it/maps/place/Giardino+Liberato+di+Materdei/@40.8547899,14.2447824,17z/data=!3m1!4b1!4m5!3m4!1s0x133b0867151db6f5:0x582c1b10410660c1!8m2!3d40.8548625!4d14.2468668'
              target='_blank'
              rel='noreferrer'
            >
              Salita S. Raffaele, 3
            </a>
          </p>
          <p className='p-2'>80135 Napoli NA</p>
        </div>
        <div className='hmd:w-1/4 w-1/2 mx-auto '>
          <h1 className='p-4  font-bold '>Contatti</h1>
          <p className='p-2'>
            <b>Telefono: </b>
            <a className='hover:text-blue-600' href='tel:3349281502'>
              +39 334 928 1502
            </a>
          </p>
          <p className='p-2'>
            <b>Email : </b>
            <a
              className='hover:text-blue-600'
              href='mailto:nerafenix@gmail.com'
            >
              nerafenix@gmail.com
            </a>
          </p>
        </div>
        <div className='hmd:w-1/4 w-1/2 mx-auto '>
          <h1 className='p-4  font-bold '>Orari</h1>
          <p className='p-2'>
            <b>Mar:</b> 18:00/20:00
          </p>
          <p className='p-2'>
            <b>Gio:</b> 18:00/20:00
          </p>
        </div>
        <div className='hmd:w-1/4 w-1/2 mx-auto '>
          <h1 className='p-4  font-bold'>Social</h1>
          <p className='p-2'>
            <a
              className='hover:text-blue-600'
              href='https://m.facebook.com/Shuuenkannapolikendo1965/'
              target='_blank'
              rel='noreferrer'
            >
              Facebook
              <br />
            </a>
          </p>
          <p className='p-2'>
            <a
              className='hover:text-blue-600'
              href='https://www.instagram.com/shuuenkannapolikendo1965/'
              target='_blank'
              rel='noreferrer'
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
      <div className='container mx-auto text-left border-t-2 borderBlue'>
        <h1 className='p-6 text-l'>A.S.D. SHUUENKAN NAPOLI KENDO</h1>
      </div>
    </footer>
  );
};

export default Footer;
