import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "layouts/DefaultLayout";
import { HomePage } from "pages/HomePage";
import { ApoyaloPage } from "pages/ApoyaloPage";
import { PoniendoTodoJuntoPage } from "pages/PoniendoTodoJuntoPage";
import { GranInversionPage } from "pages/GranInversionPage";
import { FormularioConHooksPage } from "pages/FormularioConHooksPage";
import { GeneradorDeCajaPage } from "pages/GeneradorDeCajaPage";
import { TabsPage } from "pages/TabsPage";
import { ToDoPage } from "pages/ToDoPage";
import { MasFormulariosPage } from "pages/MasFormulariosPage";

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
          <Route path="mas-formularios" element={<MasFormulariosPage />} />
          <Route path="generador-de-caja" element={<GeneradorDeCajaPage />} />
          <Route path="tabs" element={<TabsPage />} />
          <Route path="lista-de-tareas" element={<ToDoPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
