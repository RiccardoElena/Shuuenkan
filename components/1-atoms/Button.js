const Button = ({ text, reverse, href, targ }) => {
  const classes = reverse
    ? 'bg-inherit text-white border-2 border-white'
    : 'text-blue hover:text-blue-600 bg-inherit border-2 borderBlue hover:border-blue-600';
  const target = targ ? targ : '_self';
  return (
    <a
      className={`text text-right px-4 py-2 rounded-3xl max-w-xs ${classes}`}
      href={href}
      target={target}
    >
      {text}
    </a>
  );
};

export default Button;
