import { useWindowSize } from '../../hooks';

const Map = () => {
  const { width } = useWindowSize();

  const mapScale = width > 768 ? 1 : 1.5;

  return (
    <div className='lg:mt-36 mt-28'>
      <iframe
        width='100%'
        height={(width * 14 * mapScale) / 47}
        id='gmap_canvas'
        src='https://maps.google.com/maps?q=Giardino%20Liberato&t=&z=15&ie=UTF8&iwloc=&output=embed'
        frameBorder='0'
        loading='lazy'
        scrolling='no'
        marginHeight='0'
        marginWidth='0'
      ></iframe>
    </div>
  );
};

export default Map;
