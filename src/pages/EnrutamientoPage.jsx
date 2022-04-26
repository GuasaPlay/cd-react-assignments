import { PageTitle } from "components/ui/PageTitle";
import { Link } from "react-router-dom";

export const EnrutamientoPage = () => {
  return (
    <div className="mx-auto mt-20 max-w-[1100px] px-3">
      <PageTitle name="26. Practica de enrutamiento" />
      <section className="mt-8 flex w-full flex-col items-center">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-slate-700">
            Paginas disponibles
          </h3>
        </div>
        <div className="mt-8 grid w-2/5 grid-cols-1 gap-6 sm:grid-cols-2">
          <Link
            to="/home"
            className="flex h-48 items-center justify-center rounded-lg bg-gray-300 transition-all duration-300 hover:shadow-xl"
          >
            <p>Home</p>
          </Link>
          <Link
            to="/4"
            className="flex h-48 items-center justify-center rounded-lg bg-gray-300 transition-all duration-300 hover:shadow-xl"
          >
            <p>Number</p>
          </Link>
          <Link
            to="/hello"
            className="flex h-48 items-center justify-center rounded-lg bg-gray-300 transition-all duration-300 hover:shadow-xl"
          >
            <p>Word</p>
          </Link>
          <Link
            to="/hello/azul/rojo"
            className="flex h-48 items-center justify-center rounded-lg bg-gray-300 transition-all duration-300 hover:shadow-xl"
          >
            <p>Palabra with color</p>
          </Link>
        </div>
      </section>
    </div>
  );
};
