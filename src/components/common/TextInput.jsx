const TextInput = ({ data: { type, name, placeholder } }) => {
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className={`w-full px-6 border-gray-300 bg-white py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
    />
  );
};

export default TextInput;
