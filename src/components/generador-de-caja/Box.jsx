export const Box = ({ color, size = 200 }) => {
  return (
    <div
      className={`mr-3 mb-3 rounded-lg ${color}`}
      style={{ width: size, height: size }}
    ></div>
  );
};
