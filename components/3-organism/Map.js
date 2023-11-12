import { useWindowSize } from '../../hooks';

const Map = () => {
  const { width } = useWindowSize();

  const mapScale = width > 768 ? 1 : 1.5;

  return (
    <div className="mt-28 lg:mt-36">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.776874859209!2d14.244422875550253!3d40.85482232886059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b092e0c3b78ab%3A0xc6eb1278722134cb!2sShuuenkan%20Dojo%20-%20Social%20Kendo%20Napoli!5e0!3m2!1sit!2sit!4v1699803750476!5m2!1sit!2sit"
        width="100%"
        height={(width * 14 * mapScale) / 47 || 400}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default Map;
