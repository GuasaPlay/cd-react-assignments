import { colors } from "utils/general";

export const ValidColors = () => {
  return (
    <div className="mb-6">
      <h3 className="text-center text-slate-700">Nombres de colores válidos</h3>
      <ul className="flex flex-wrap">
        {colors.map(({ name, code }) => (
          <li key={code}>
            <span className={`mr-2 mb-2 rounded text-white ${code}`}>
              <span className="rounded-full px-2 py-1">
                <span className="font-medium">{name}</span>
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
