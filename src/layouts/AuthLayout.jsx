import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <main>
      <div>
        <nav className="container mx-auto flex w-full justify-between">
          <div className="font-bold">Layout para la Auth</div>
        </nav>
      </div>
      <Outlet />
    </main>
  );
};
