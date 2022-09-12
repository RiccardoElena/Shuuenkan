const BigQuote = () => {
  return (
    <div className='xsm:py-3 py-7 text-white'>
      <div
        className={`xsm:w-3/4 w-11/12 xsm:pt-10 pt-2 mx-auto xsm:my-5 xsm:mt-12 rounded-2xl pearlOpacity	`}
      >
        <h1
          className={`hlg:text-7xl hmd:text-6xl sm:text-5xl xsm:text-5xl text-3xl font-bold text-left w-fit mx-auto `}
        >
          IL CONCETTO DI KENDO
        </h1>
        <p className='lg:text-4xl text-2xl text-left lg:mx-16 tracking-wide xsm:mx-8 mx-2 xsm:py-4 py-2'>
          {' '}
          Scopo e pratica
        </p>
        <p className='lg:text-3xl text-lg sm:text-xl italic text-lg md:text-left text-center lg:mx-16 xsm:mx-8 mx-2 xsm:pb-4'>
          &quot;Lo scopo della pratica del Kendo è:
          <br />
          Plasmare la mente e il corpo,
          <br />
          coltivare uno spirito vigoroso,
          <br />
          e, attraverso un corretto e severo addestramento, sforzarsi di
          progredire nell&apos;arte del kendo, <br />
          tenere in considerazione la cortesia e l&apos;onore,
          <br />
          associarsi agli altri con sincerità <br />
          e perseguire sempre il miglioramento di se stesso. <br />
          In questo modo si sarà capaci di: <br />
          contribuire allo sviluppo della cultura
          <br />e promuovere la pace e la prosperità tra i popoli.&quot;
        </p>
        <p className='lg:text-xl text-base text-right lg:mx-16 tracking-wide xsm:mx-8 mx-4'>
          {' '}
          20 marzo 1975, Zennihon Kendo Renmei (ZNKR)
          <br />
          All Japan Kendo Federation
        </p>
      </div>
    </div>
  );
};

export default BigQuote;
