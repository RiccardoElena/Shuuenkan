import Link from 'next/link';
import Button from '../1-atoms/Button';

const KendoText = () => {
  //const [hover, setHover] = useState(false);
  return (
    <>
      <h1 className='pb-5 px-5 mx-auto text-centered text-4xl font-bold text-blue'>
        Il luogo dove si segue la via
      </h1>
      <Link href='kendo'>
        <p className='px-10 pb-4 text-centered text-3xl italic text-blue hover:text-blue-600 leading-loose'>
          Proident enim aute anim mollit aliqua voluptate quis consectetur
          pariatur anim dolor. Ullamco anim officia laboris est cupidatat magna
          qui eiusmod anim. Nisi ad labore culpa irure sit do exercitation
          pariatur Cupidatat incididunt eu eiusmod non eiusmod. Elit elit
          reprehenderit exercitation adipisicing officia nisi ad labore minim
          consequat. Ad dolor in officia culpa veniam in Lorem do proident culpa
          officia pariatur. Sunt aliquip incididunt qui consequat sint excepteur
          ex non ullamco magna. Excepteur et laboris dolore in sit. Magna est
          Lorem veniam Lorem exercitation ea dolore elit. Quis pariatur Lorem ex
          excepteur excepteur veniam ut labore sit <br />
          <Button text='Scopri di più' reverse={false} />
        </p>
      </Link>
    </>
  );
};

export default KendoText;
