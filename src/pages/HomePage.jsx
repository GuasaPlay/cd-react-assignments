import { PageTitle } from "components/ui/PageTitle";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="mx-auto mt-20 max-w-[1100px] px-3">
      <PageTitle name="Coding Dojo Assignments - MERN SPANISH" />
      <section className="mt-6">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <li className="w-full">
            <Link
              to="apoyalo"
              className="block h-32 w-full rounded-lg bg-green-600 p-4 font-medium text-white hover:bg-opacity-95"
            >
              12. Apóyalo
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="poniendo-todo-junto"
              className="block h-32 w-full rounded-lg bg-teal-600 p-4 font-medium text-white hover:bg-opacity-95"
            >
              13. Poniendo todo junto
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="gran-inversion"
              className="block h-32 w-full rounded-lg bg-orange-600 p-4 font-medium text-white hover:bg-opacity-95"
            >
              15. Gran inversión
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="formulario-con-hooks"
              className="block h-32 w-full rounded-lg bg-cyan-600 p-4 font-medium text-white hover:bg-opacity-95"
            >
              16. Formulario con Hooks
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="generador-de-caja"
              className="block h-32 w-full rounded-lg bg-amber-600 p-4 font-medium text-white hover:bg-opacity-95"
            >
              19. Generador de caja
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};
