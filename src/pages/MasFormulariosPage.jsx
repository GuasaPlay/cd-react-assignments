import { RegisterForm } from "components/mas-formularios/RegisterForm";
import { PageTitle } from "components/ui/PageTitle";

export const MasFormulariosPage = () => {
  return (
    <div className="mx-auto mt-20 max-w-[1100px] px-3">
      <PageTitle name="17. Mas formularios" />
      <section className="mt-6 flex w-full justify-center">
        <div className="w-1/2">
          <RegisterForm />
        </div>
      </section>
    </div>
  );
};
