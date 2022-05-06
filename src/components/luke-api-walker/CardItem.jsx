export const CardItem = ({ name, item }) => {
  return (
    <div className="mt-4 flex w-full space-x-6">
      <div className="flex-1 text-right">{name}:</div>
      <div className="flex-1">{item}</div>
    </div>
  );
};
