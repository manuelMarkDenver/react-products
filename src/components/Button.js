const Button = ({ text, color, addCss, onDeleteAll }) => {
  return (
    <>
      <button className={`py-3 px-3 ${color} rounded-lg mb-5 ${addCss}`}>
        {text}
      </button>
    </>
  );
};

export default Button;
