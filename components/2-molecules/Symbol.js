import Image from 'next/image';

import giardinoImage from '../../public/images/logo.png';

const Garden = () => {
  const image = giardinoImage;
  return (
    <div className="lg:py-15 w-full bg-shuuenkan-blue py-7 md:py-7 hmd:py-10">
      <div className="container mx-auto rounded-md pb-10">
        <h1 className="m-10 text-left text-5xl text-white md:text-7xl">
          Il Simbolo
        </h1>
        <div className="flex w-full flex-wrap rounded text-shuuenkan-blue md:flex-nowrap">
          <div className="m-auto w-3/4 sm:w-1/2">
            <Image alt="Shuuenkan logo" src={image} layout="responsive" />
          </div>
          <div className=" w-fit p-10 text-center text-white">
            <h1 className="p-5 text-center text-3xl xsm:text-4xl">I Kenshi</h1>
            <p className=" text-centerpb-10 text-2xl xsm:text-3xl">
              La figura rappresenta lo scontro interiore ed esteriore del Kenshi
              (praticante di Kendo) che, interiormente lascia ardere vivida la
              fiamma della passione ma esternamente non lascia trasparire nulla,
              se non un&apos;aura di imperturbabile tranquillità.
            </p>
            <h1 className="p-5 text-center text-3xl xsm:text-4xl">Il Kanji</h1>
            <p className=" text-centerpb-10 text-2xl xsm:text-3xl">
              Il Kanji Shuuenkan 修焔館 vuol dire &quot;Luogo in cui si Domina
              la Fiamma&quot;, ideato per noi da Sensei Tani Katsuhiko, 8 Dan
              Hanshi. Questo nome fa riferimento al parallelismo tra i due
              vulcani Fuji e Vesuvio, entrambi importantissimi nella vita e
              nella cultura di Napoli e del sol levante, che rimangono
              imperturbabili all&apos;esterno e ardenti nelle proprie viscere,
              dando esempio ai Kenshi che si devono porre analogamente nel
              confrontarsi nell&apos;arte della spada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Garden;
