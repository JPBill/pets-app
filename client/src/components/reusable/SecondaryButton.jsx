const SecondaryButton = ({ onClick, text, btnStyles, ...props }) => {
  return (
    <button
      className={`${btnStyles} px-3 py-2 border-2 border-cyan-600 bg-gray-50 redhat-regular text-sm rounded-md text-black transition-colors hover:bg-cyan-600 hover:text-white`}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
