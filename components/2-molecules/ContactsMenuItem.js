import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactsMenuItem = ({ icon, title, lines }) => {
  return (
    <div
      className={` hmd:w-1/4 w-1/2 text-blue mx-auto  ${
        icon ? 'md:h-96 h-60 mb-28' : ' '
      } text-center mb-0 pb-0 relative`}
    >
      {title && <h1 className='p-4  font-bold'>{title}</h1>}
      {icon && (
        <div className='text-base w-1/2 mx-auto absolute bottom-1/2 inset-x-0 '>
          <FontAwesomeIcon icon={icon} />
        </div>
      )}
      <div
        className={` mx-auto  ${icon ? 'absolute top-1/2 mt-10' : ' '}  w-full`}
      >
        {lines.map((line) => (
          <p className='p-2' key={line.key}>
            {line.title && <b>{line.title + ': '}</b>}
            <a
              className={line.href ? 'hover:text-blue-600' : ''}
              href={line.href || ''}
              target='_blank'
              rel='noreferrer'
            >
              {line.text}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
};
export default ContactsMenuItem;
