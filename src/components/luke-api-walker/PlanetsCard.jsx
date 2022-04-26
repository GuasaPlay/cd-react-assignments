import { Link } from "react-router-dom";

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
        <div className="mt-4 flex w-full space-x-6">
          <div className="flex-1 text-right">Climate:</div>
          <div className="flex-1">{data?.climate}</div>
        </div>
        <div className="mt-4 flex w-full space-x-6 pt-4">
          <div className="flex-1 text-right">Terrain:</div>
          <div className="flex-1">{data?.terrain}</div>
        </div>
        <div className="mt-4 flex w-full space-x-6 pt-4">
          <div className="flex-1 text-right">Gravity:</div>
          <div className="flex-1">{data?.gravity}</div>
        </div>
      </div>
    </div>
  );
};
