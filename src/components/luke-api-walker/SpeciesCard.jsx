import { Link } from "react-router-dom";

export const SpeciesCard = ({ result }) => {
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
          <div className="flex-1 text-right">Language:</div>
          <div className="flex-1">{data?.language}</div>
        </div>
        <div className="mt-4 flex w-full space-x-6 pt-4">
          <div className="flex-1 text-right">Designation:</div>
          <div className="flex-1">{data?.designation}</div>
        </div>
        <div className="mt-4 flex w-full space-x-6 pt-4">
          <div className="flex-1 text-right">Classification:</div>
          <div className="flex-1">{data?.classification}</div>
        </div>
      </div>
    </div>
  );
};
