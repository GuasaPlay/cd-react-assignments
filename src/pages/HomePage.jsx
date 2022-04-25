import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="mx-auto mt-24 max-w-[1100px]">
      <h1 className="text-2xl font-semibold text-slate-700">
        Coding Dojo Assigments
      </h1>
      <section className="mt-4">
        <ul className="grid grid-cols-3">
          <li>
            <Link to="prueba" className="">
              asdasd
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};
