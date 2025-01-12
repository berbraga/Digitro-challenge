import PropTypes from "prop-types";

function Button({ 
  children, 
  type = "button", 
  onClick, 
  className = "", 
  disabled = false 
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md text-white font-medium transition duration-200 
                  ${disabled 
                    ? "bg-gray-400 cursor-not-allowed" 
                    : "bg-blue-500 hover:bg-blue-600 focus:ring focus:ring-blue-300"} 
                  ${className}`}
    >
      {children}
    </button>
  );
}

// Definindo os tipos das props (opcional, mas recomendado)
Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
