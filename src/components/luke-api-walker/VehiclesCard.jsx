import { Link } from "react-router-dom";

export const VehiclesCard = ({ result }) => {
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
          <div className="flex-1 text-right">Model:</div>
          <div className="flex-1">{data?.model}</div>
        </div>
        <div className="mt-4 flex w-full space-x-6 pt-4">
          <div className="flex-1 text-right">Manufacturer:</div>
          <div className="flex-1">{data?.manufacturer}</div>
        </div>
        <div className="mt-4 flex w-full space-x-6 pt-4">
          <div className="flex-1 text-right">Class:</div>
          <div className="flex-1">{data?.vehicle_class}</div>
        </div>
      </div>
    </div>
  );
};
