import { PageTitle } from "components/ui/PageTitle";
import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <div className="mx-auto mt-20 max-w-[1100px] px-3">
      <PageTitle name="Coding Dojo Assignments - MERN SPANISH" />
      <section className="mt-6">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <li className="w-full">
            <Link
              to="apoyalo"
              className="block h-24 w-full rounded-lg bg-green-600 p-4 font-medium text-white hover:bg-opacity-95"
            >
              12. Apóyalo
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="poniendo-todo-junto"
              className="block h-24 w-full rounded-lg bg-teal-600 p-4 font-medium text-white hover:bg-opacity-95"
            >
              13. Poniendo todo junto
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="gran-inversion"
              className="block h-24 w-full rounded-lg bg-orange-600 p-4 font-medium text-white hover:bg-opacity-95"
            >
              15. Gran inversión
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="formulario-con-hooks"
              className="block h-24 w-full rounded-lg bg-cyan-600 p-4 font-medium text-white hover:bg-opacity-95"
            >
              16. Formulario con Hooks
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="mas-formularios"
              className="block h-24 w-full rounded-lg bg-rose-600 p-4 font-medium text-white hover:bg-opacity-95"
            >
              17. Mas formularios
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="generador-de-caja"
              className="block h-24 w-full rounded-lg bg-amber-600 p-4 font-medium text-white hover:bg-opacity-95"
            >
              19. Generador de caja
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="tabs"
              className="block h-24 w-full rounded-lg bg-violet-600 p-4 font-medium text-white hover:bg-opacity-95"
            >
              20. Pestañas
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="lista-de-tareas"
              className="block h-24 w-full rounded-lg bg-purple-600 p-4 font-medium text-white hover:bg-opacity-95"
            >
              21. Lista de tareas
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="pokemon-api"
              className="block h-24 w-full rounded-lg bg-zinc-600 p-4 font-medium text-white hover:bg-opacity-95"
            >
              24. Pokemon API
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="axios-pokemon-api"
              className="block h-24 w-full rounded-lg bg-fuchsia-600 p-4 font-medium text-white hover:bg-opacity-95"
            >
              25. Axios Pokemon API
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="enrutamiento"
              className="block h-24 w-full rounded-lg bg-emerald-600 p-4 font-medium text-white hover:bg-opacity-95"
            >
              26. Practica de enrutamiento
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="luke-api-walker"
              className="block h-24 w-full rounded-lg bg-pink-600 p-4 font-medium text-white hover:bg-opacity-95"
            >
              27. Luke APIwalker
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};
