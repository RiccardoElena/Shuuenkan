import Button from '../1-atoms/Button';

const HeroContent = () => {
  return (
    <div className="xsm:py-auto w-full bg-shuuenkan-blue/60 py-16 md:w-1/2">
      <div className="text-shadow m-0 w-full pt-7 text-center text-[2rem] leading-[3rem] text-white hlg:pt-20">
        <p className="mx-8 py-5 text-left text-xl md:py-12 lg:mx-16 lg:text-2xl">
          {' '}
          Chi siamo
        </p>
        <h1 className="mx-auto w-fit text-center text-5xl font-bold xsm:text-6xl sm:text-left sm:text-8xl md:text-6xl hmd:text-7xl hmd:leading-[5rem] xl:text-8xl xl:leading-[5rem]">
          SHUUENKANDOJO <br />
          NAPOLI KENDO &<br />
          NAGINATA
        </h1>
        <p className="pb-26 mx-8 py-0 text-center text-xl sm:py-12 sm:text-2xl md:text-left lg:mx-16 lg:text-2xl">
          Lo Shuuenkandojo nasce a Napoli nel 2014 e diventa il primo
          esperimento italiano di Kendo Sociale!
        </p>
        <div className="mx-auto flex flex-wrap justify-between py-16 pb-5 sm:mx-14 md:mx-auto md:pb-40">
          <Button text="Social Kendo" reverse={true} href="/projects" />
          <Button
            text="Project Naginata"
            reverse={true}
            href="/projects#naginata"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
