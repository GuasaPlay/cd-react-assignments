import { PageTitle } from "components/ui/PageTitle";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="mx-auto mt-20 max-w-[1100px]">
      <PageTitle name="Coding Dojo Assignments - MERN SPANISH" />
      <section className="mt-6">
        <ul className="grid grid-cols-3 gap-3">
          <li className="w-full">
            <Link
              to="apoyalo"
              className="tracking- block h-32 w-full rounded-lg bg-green-600 p-4 font-medium text-white hover:bg-opacity-95"
            >
              12. Apóyalo
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="poniendo-todo-junto"
              className="tracking- block h-32 w-full rounded-lg bg-teal-600 p-4 font-medium text-white hover:bg-opacity-95"
            >
              13. Poniendo todo junto
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="gran-inversion"
              className="tracking- block h-32 w-full rounded-lg bg-orange-600 p-4 font-medium text-white hover:bg-opacity-95"
            >
              15. Gran inversión
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};
