import { Link } from "react-router-dom";
import { CardItem } from "./CardItem";

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
        <CardItem name="Director" item={data.director} />
        <CardItem name="Producer" item={data.producer} />
        <CardItem name="Release date" item={data.release_date} />
      </div>
    </div>
  );
};
