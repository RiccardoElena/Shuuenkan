import { useWindowSize } from '../../hooks';
import styles from './Map.module.css';

const Map = () => {
  const { width, height } = useWindowSize();

  const mapScale = width > 768 ? 1 : 1.5;

  const items = [{}];

  return (
    <div className={`${styles.mapouter} lg:mt-36 mt-28`}>
      <div className={`${styles.mapouter}`}>
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
    </div>
  );
};

export default Map;
