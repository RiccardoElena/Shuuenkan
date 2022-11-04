import boguImage from '../../public/images/bogu.jpeg';
import swordsImage from '../../public/images/swords.jpeg';
import swordsOriImage from '../../public/images/swordsOri.jpeg';
import hakamaGiImage from '../../public/images/hakamaGiImage.png';
import Card from '../2-molecules/Card';
import { useWindowSize } from '../../hooks';

const Content = () => {
  const { width } = useWindowSize();

  const items = [
    {
      alt: 'Bogu',
      src: boguImage,
      title: 'Il Bogu',
      text: (
        <span className="text-2xl sm:text-3xl md:text-4xl">
          Le protezioni usate nel Kendo comprendono un elmo che comprende testa
          e gola (<b>Men</b>), un corpetto per l&apos;addome (<b>Do</b>) e dei
          guantoni per i polsi (<b>Kote</b>). Si utilizzano inoltre un
          fazzoletto per assorbire il sudore (<b>Tenugui</b>), una protezione
          per i fianchi (<b>Tare</b>) ed un&apos;iscrizione da applicarvici col
          nome del dojo d&apos;appartenenza (<b>Zekken</b>)
        </span>
      ),
      id: 'bogu',
    },
    {
      alt: 'Shinai and Bokken',
      src: width > 768 ? swordsImage : swordsOriImage,
      title: 'Le Spade',
      text: (
        <span className="text-2xl sm:text-3xl md:text-4xl">
          {' '}
          Nella pratica del Kendo si utilizzano 3 tipi di spade: <br />
          Le <b>Shinai</b>: una spada composta da 4 stecche di bamboo (take) e
          parti in pelle (tsuka, naka-yui e saki-gawa), tenute insieme da un
          filo in tensione (tsuru) e completata da un’elsa (tsuba). <br /> I{' '}
          <b>Bokken</b> e i <b>Kodachi</b>: delle esatte rappresentazioni in
          legno delle spade tradizionali giapponesi. Il bokken è la spada lunga,
          mentre il kodachi è quella corta
        </span>
      ),
      imgSize: width > 768 ? 'w-1/2' : 'w-full',
      id: 'swords',
    },
    {
      alt: 'Hakame and Gi',
      src: hakamaGiImage,
      title: 'Hakama e Kendogi',
      text: (
        <span className="text-2xl sm:text-3xl md:text-4xl">
          {' '}
          La divisa di pratica è costituita da una giacca (<b>Kendogi</b>) e da
          ampi pantaloni (<b>Hakama</b>), solitamente di colore blu ma,
          occasionalmente, alcuni praticanti, in base al grado, al sesso ed
          all&apos;anzianità, possono utilizzarli bianchi.
        </span>
      ),
      id: 'gi',
    },
  ];

  return (
    <div className="bg-shuuenkan-blue py-0 md:py-20 ">
      <div className="container mx-auto pt-5 xsm:py-10">
        <div className="float-center w-full">
          <p className="p-5 text-center text-6xl font-bold text-pearl md:p-10 md:text-7xl">
            Vestiario e Armi per la Pratica
          </p>
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap rounded-md pb-10">
        {items.map((item) => (
          <Card
            alt={item.alt}
            src={item.src}
            key={item.title}
            title={item.title}
            text={item.text}
            imgSize={item.imgSize}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
