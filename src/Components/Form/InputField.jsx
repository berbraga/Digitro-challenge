

function InputField({ label, name, type = "text", placeholder, required = false, className = "", min, onChange }) {
  return (
    <div className={`flex flex-col mb-2 ${className}`}>
      {label && <label htmlFor={name} className="mb-1 font-medium 	">{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        min={min}
        className="p-2 border rounded-md bg-white focus:outline-none focus:ring focus:ring-blue-300 "
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
