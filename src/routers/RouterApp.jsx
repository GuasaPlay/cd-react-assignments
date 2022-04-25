import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "layouts/DefaultLayout";
import { HomePage } from "pages/HomePage";
import { ApoyaloPage } from "pages/ApoyaloPage";
import { PoniendoTodoJuntoPage } from "pages/PoniendoTodoJuntoPage";
import { GranInversionPage } from "pages/GranInversionPage";
import { FormularioConHooksPage } from "pages/FormularioConHooksPage";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="apoyalo" element={<ApoyaloPage />} />
          <Route
            path="poniendo-todo-junto"
            element={<PoniendoTodoJuntoPage />}
          />
          <Route path="gran-inversion" element={<GranInversionPage />} />
          <Route
            path="formulario-con-hooks"
            element={<FormularioConHooksPage />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
