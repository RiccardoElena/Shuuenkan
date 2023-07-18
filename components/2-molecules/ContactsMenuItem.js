import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactsMenuItem = ({ icon, title, lines }) => {
  return (
    <div
      className={` mx-auto w-1/2 text-shuuenkan-blue hmd:w-1/4  ${
        icon ? 'mb-28 h-60 md:h-96' : 'mb-0 '
      } relative pb-0 text-center`}>
      {title && <h1 className="p-4  font-bold">{title}</h1>}
      {icon && (
        <div className="absolute inset-x-0 bottom-1/2 mx-auto w-fit text-8xl ">
          <FontAwesomeIcon icon={icon} />
        </div>
      )}
      <div
        className={` mx-auto  ${
          icon ? 'absolute top-1/2 mt-10' : ' '
        }  w-full`}>
        {lines.map((line) => (
          <p className="p-2" key={line.key}>
            {line.title && <b>{line.title + ': '}</b>}
            <a
              className={line.href ? 'hover:text-blue-600' : ''}
              href={line.href || ''}
              target="_blank"
              rel="noreferrer">
              {line.text}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
};
export default ContactsMenuItem;
