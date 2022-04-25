import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="mx-auto mt-24 max-w-[1100px]">
      <h1 className="text-2xl font-semibold text-slate-700">
        Coding Dojo Assignments - MERN SPANISH
      </h1>
      <section className="mt-6">
        <ul className="grid grid-cols-3 gap-3">
          <li className="w-full">
            <Link
              to="apoyalo"
              className="tracking- block h-32 w-full rounded-lg bg-green-600 p-4 font-medium text-white"
            >
              12. Apóyalo
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="poniendo-todo-junto"
              className="tracking- block h-32 w-full rounded-lg bg-teal-600 p-4 font-medium text-white"
            >
              13. Poniendo todo juntop
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};
