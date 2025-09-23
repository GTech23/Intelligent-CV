import { FiTrash } from "react-icons/fi";
const TextInput = ({ type = "text", name, placeholder, ref }) => {
  return (
    <input
      type={type}
      name={name}
      id={name}
      ref={ref}
      placeholder={placeholder}
      className={`w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
    />
  );
};

export const InputWithTrash = ({
  type = "text",
  name,
  placeholder,
  handleCertificationChange,
  value,
}) => {
  return (
    <div className="relative w-full mb-3">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleCertificationChange}
        placeholder={placeholder}
        className="w-full px-6 pr-12 py-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
      />

      <button
        type="button"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 hover:text-red-700"
      >
        <FiTrash size={18} />
      </button>
    </div>
  );
};

export default TextInput;
