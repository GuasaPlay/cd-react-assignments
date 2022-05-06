import { Link } from "react-router-dom";
import { CardItem } from "./CardItem";

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
        <CardItem name="Language" item={data?.language} />
        <CardItem name="Designation" item={data?.designation} />
        <CardItem name="Classification" item={data?.classification} />
      </div>
    </div>
  );
};
