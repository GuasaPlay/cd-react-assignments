import { useParams } from "react-router-dom";

export const IdPage = () => {
  const params = useParams();

  return (
    <div className="mt-12 flex w-full justify-center">
      {/* Verify if is number id param */}
      {Number.isInteger(Number(params.id)) ? (
        <h1 className="text-2xl font-semibold text-slate-700">
          The number is: {params.id}
        </h1>
      ) : (
        <h1 className="text-2xl font-semibold text-slate-700">
          The word is: {params.id}
        </h1>
      )}
    </div>
  );
};
