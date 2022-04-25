export const Input = ({
  value,
  onChange,
  type = "text",
  name,
  errorMessage,
}) => {
  return (
    <div className="flex w-full flex-col">
      <input
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        id={name}
        className="w-full rounded-md border-2 border-gray-300 py-1 px-2 text-slate-700 transition-colors focus:border-cyan-500 focus:outline-none"
      />
      {errorMessage && (
        <span className="mt-0.5 text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};
