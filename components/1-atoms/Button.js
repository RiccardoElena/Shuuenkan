const Button = ({ text, reverse }) => {
  const classes = reverse
    ? 'bg-inherit text-white border-2 border-white'
    : 'text-blue hover:text-blue-600 bg-inherit border-2 borderBlue hover:border-blue-600';

  return (
    <a
      className={`text text-right px-4 py-2 rounded-3xl max-w-xs ${classes}`}
      href=''
    >
      {text}
    </a>
  );
};

export default Button;
