const PrimaryButton = ({ onClick, text, btnStyles, ...props }) => {
  return (
    <button
      className={`${btnStyles} px-3 py-2 border-2 border-cyan-600 bg-cyan-500 redhat-regular text-sm rounded-md text-white transition-colors hover:bg-cyan-600`}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
