import { Link } from "react-router-dom";
import { CardItem } from "./CardItem";

export const PlanetsCard = ({ result }) => {
  const getIdResult = () => result?.data?.url?.split("/")[5];

  const { resource, data } = result;
  return (
    <div className="mt-6 w-1/2 rounded-lg bg-white p-3 shadow-xl">
      <Link
        to={`/luke-api-walker/${resource.value}/${getIdResult()}`}
        className="block text-center text-lg font-semibold text-slate-700 underline"
      >
        {resource.label}: {data?.name}
      </Link>
      <div className="divide-y-2 divide-gray-300">
        <CardItem name="Climate" item={data.climate} />
        <CardItem name="Terrain" item={data.terrain} />
        <CardItem name="Gravity" item={data.gravity} />
      </div>
    </div>
  );
};
