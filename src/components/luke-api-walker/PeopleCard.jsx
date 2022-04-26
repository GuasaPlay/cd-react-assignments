import { Link } from "react-router-dom";

export const PeopleCard = ({ result }) => {
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
          <div className="flex-1 text-right">Height:</div>
          <div className="flex-1">{data?.height}</div>
        </div>
        <div className="mt-4 flex w-full space-x-6 pt-4">
          <div className="flex-1 text-right">Hair Color:</div>
          <div className="flex-1">{data?.hair_color}</div>
        </div>
        <div className="mt-4 flex w-full space-x-6 pt-4">
          <div className="flex-1 text-right">Birth Year:</div>
          <div className="flex-1">{data?.birth_year}</div>
        </div>
      </div>
    </div>
  );
};
