import { Link } from "react-router-dom";

export const FilmsCard = ({ result }) => {
  const getIdResult = () => result?.data?.url?.split("/")[5];

  const { resource, data } = result;
  return (
    <div className="mt-6 w-1/2 rounded-lg bg-white p-3 shadow-xl">
      <Link
        to={`/luke-api-walker/${resource.value}/${getIdResult()}`}
        className="block text-center text-lg font-semibold text-slate-700 underline"
      >
        {resource.label}: {data?.title}
      </Link>
      <div className="divide-y-2 divide-gray-300">
        <div className="mt-4 flex w-full space-x-6">
          <div className="flex-1 text-right">Director:</div>
          <div className="flex-1">{data?.director}</div>
        </div>
        <div className="mt-4 flex w-full space-x-6 pt-4">
          <div className="flex-1 text-right">Producer:</div>
          <div className="flex-1">{data?.director}</div>
        </div>
        <div className="mt-4 flex w-full space-x-6 pt-4">
          <div className="flex-1 text-right">Release date:</div>
          <div className="flex-1">{data?.release_date}</div>
        </div>
      </div>
    </div>
  );
};
