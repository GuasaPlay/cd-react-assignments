import { RegisterForm } from "components/formulario-con-hooks/RegisterForm";
import { PageTitle } from "components/ui/PageTitle";

export const FormularioConHooksPage = () => {
  return (
    <div className="mx-auto mt-20 max-w-[1100px] px-3">
      <PageTitle name="16. Formulario con Hooks" />
      <section className="mt-6 flex w-full justify-center">
        <div className="w-1/2">
          <RegisterForm />
        </div>
      </section>
    </div>
  );
};
