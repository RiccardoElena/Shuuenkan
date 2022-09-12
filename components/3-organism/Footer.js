import ContactsMenuItem from '../2-molecules/ContactsMenuItem';

const Footer = () => {
  const items = [
    {
      key: 1,
      title: 'Dove Siamo',
      lines: [
        {
          href: 'https://www.giardinoliberato.org/',
          text: 'Giardino Liberato di Materdei',
          key: 1,
        },
        {
          href: 'https://www.google.it/maps/place/Giardino+Liberato+di+Materdei/@40.8547899,14.2447824,17z/data=!3m1!4b1!4m5!3m4!1s0x133b0867151db6f5:0x582c1b10410660c1!8m2!3d40.8548625!4d14.2468668',
          text: 'Salita S. Raffaele, 3',
          key: 2,
        },
        {
          text: '80135 Napoli Na',
          key: 3,
        },
      ],
    },
    {
      key: 2,
      title: 'Contatti',
      lines: [
        {
          title: 'Telefono',
          href: 'tel:00393349281502',
          text: '+39 334-928-1502',
          key: 1,
        },
        {
          title: 'Email',
          href: 'mailto:nerafenix@gmail.com',
          text: 'nerafenix@gmail.com',
          key: 2,
        },
      ],
    },
    {
      key: 3,
      title: 'Orari',
      lines: [
        {
          title: 'Lun',

          text: '19:00-21:00',
          key: 1,
        },
        {
          title: 'Mer',
          key: 2,
          text: '19:00-21:00',
        },
        {
          title: 'Sab',

          text: '12:00-14:00',
          key: 3,
        },
      ],
    },
    {
      key: 4,
      title: 'Social',
      lines: [
        {
          href: 'https://m.facebook.com/Shuuenkannapolikendo1965',
          text: 'Facebook',
          key: 1,
        },
        {
          href: 'https://www.instagram.com/shuuenkannapolikendo1965/',
          text: 'Instagram',
          key: 2,
        },
        {
          href: 'https://www.youtube.com/channel/UC7MbwwgjWKvTXJ2eRHJOU7g',
          text: 'YouTube',
          key: 3,
        },
      ],
    },
  ];

  return (
    <footer className='w-full left-0 bottom-0 text-center pearl text-blue border-t-2 borderBlue'>
      <div className='py-8  hmd:text-lg text-base container flex flex-wrap mx-auto   justfy-items-center'>
        {items.map((item) => (
          <ContactsMenuItem
            title={item.title}
            lines={item.lines}
            key={item.key}
          />
        ))}
      </div>
      <div className='container mx-auto text-left border-t-2 borderBlue'>
        <h1 className='p-6 text-l'>A.S.D. SHUUENKAN NAPOLI KENDO</h1>
      </div>
    </footer>
  );
};

export default Footer;
