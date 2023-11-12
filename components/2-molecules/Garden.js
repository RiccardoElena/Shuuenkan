import Image from "next/image";
import Link from 'next/link';

import { useWindowSize } from '../../hooks';

import giardinoImage from '../../public/images/giardino.jpeg';
import giardinoOriImage from '../../public/images/giardinoOri.jpeg';

const Garden = () => {
  const { width } = useWindowSize();
  const image = width > 768 ? giardinoImage : giardinoOriImage;
  return (
    <div className="hmd:py-15 w-full bg-shuuenkan-blue py-7 md:py-10 lg:py-20">
      <div className="container mx-auto flex rounded-md pb-10">
        <div
          className={` flex w-full flex-wrap rounded text-shuuenkan-blue md:flex-nowrap `}>
          <div className="m-auto w-3/4 md:w-1/2">
            <Image
              alt="Men in Kendo"
              src={image}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
          <div className=" w-fit pt-5 text-white md:my-auto md:p-10 ">
            <h1 className="p-5 text-center  text-5xl font-bold md:text-4xl hmd:text-6xl lg:text-7xl">
              Il Giardino Liberato
            </h1>
            <p className=" mx-auto text-center text-2xl md:text-xl hmd:text-2xl lg:text-3xl">
              Lo Shuuenkan dojo pratica presso il{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/giardinoliberato.dimaterdei"
                className="font-bold text-pearl hover:text-white hover:underline">
                Giardino Liberato di Materdei
              </a>
              , uno stupendo convento del XVIII secolo dichiarato &quot;Bene
              Comune&quot; dall&apos;amministrazione del Comune di Napoli
              diventando sede di un gruppo di associazioni di quartiere che
              gestisce la struttura e le attività interne, tutte a titolo
              gratuito rendendo possibile e sociale in questo modo anche la
              pratica del Kendo, facendolo diventare{' '}
              <Link
                href="/projects"
                passHref
                className="font-bold text-pearl hover:text-white hover:underline">
                
                  il primo progetto italiano completamente gratuito!
                
              </Link>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Garden;
