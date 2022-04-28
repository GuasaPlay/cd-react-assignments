import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <main>
      <div>
        <nav className="container mx-auto flex w-full justify-between">
          <div>Oscar</div>
          <button>Login</button>
        </nav>
      </div>
      <Outlet />
    </main>
  );
};
