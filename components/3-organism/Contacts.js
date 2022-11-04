import ContactsMenuItem from '../2-molecules/ContactsMenuItem';
import { motion } from 'framer-motion';
import {
  faMapLocationDot,
  faPhone,
  faCalendarDays,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

const Contacts = () => {
  const items = [
    {
      icon: faMapLocationDot,
      key: 'Location',
      lines: [
        {
          href: 'https://www.giardinoliberato.org/',
          text: 'Giardino Liberato di Materdei',
        },
        {
          href: 'https://www.google.it/maps/place/Giardino+Liberato+di+Materdei/@40.8547899,14.2447824,17z/data=!3m1!4b1!4m5!3m4!1s0x133b0867151db6f5:0x582c1b10410660c1!8m2!3d40.8548625!4d14.2468668',
          text: 'Salita S. Raffaele, 3',
        },
        {
          text: '80135 Napoli Na',
        },
      ],
    },
    {
      icon: faPhone,
      key: 'Contacts',
      lines: [
        {
          title: 'Telefono',
          href: 'tel:00393349281502',
          text: '+39 334-928-1502',
        },
        {
          title: 'Email',
          href: 'mailto:nerafenix@gmail.com',
          text: 'nerafenix@gmail.com',
        },
      ],
    },
    {
      icon: faCalendarDays,
      key: 'Days',
      lines: [
        {
          title: 'Lun',

          text: '19:00-21:00',
        },
        {
          title: 'Mer',

          text: '19:00-21:00',
        },
        {
          title: 'Sab',

          text: '12:00-14:00',
        },
      ],
    },
    {
      icon: faUsers,
      key: 'Social',
      lines: [
        {
          href: 'https://m.facebook.com/Shuuenkannapolikendo1965',
          text: 'Facebook',
        },
        {
          href: 'https://www.instagram.com/shuuenkannapolikendo1965/',
          text: 'Instagram',
        },
        {
          href: 'https://www.youtube.com/channel/UC7MbwwgjWKvTXJ2eRHJOU7g',
          text: 'YouTube',
        },
      ],
    },
  ];
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 1.1 } },
    exit: { opacity: 0 },
  };
  return (
    <>
      <motion.div
        className="container mx-auto my-16 text-5xl font-bold text-shuuenkan-blue sm:text-6xl md:text-7xl lg:text-8xl"
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear' }}>
        <h1 className="text-center sm:text-left">Veniteci a trovare!</h1>
      </motion.div>
      <div className="justfy-items-center container mx-auto mb-20 flex flex-wrap text-2xl   hmd:text-3xl">
        {items.map((item) => (
          <ContactsMenuItem
            key={item.key}
            icon={item.icon}
            lines={item.lines}
          />
        ))}
      </div>
    </>
  );
};

export default Contacts;
