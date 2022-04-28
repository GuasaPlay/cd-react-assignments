import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "layouts/DefaultLayout";
import { MainPage } from "pages/MainPage";
import { ApoyaloPage } from "pages/ApoyaloPage";
import { PoniendoTodoJuntoPage } from "pages/PoniendoTodoJuntoPage";
import { GranInversionPage } from "pages/GranInversionPage";
import { FormularioConHooksPage } from "pages/FormularioConHooksPage";
import { GeneradorDeCajaPage } from "pages/GeneradorDeCajaPage";
import { TabsPage } from "pages/TabsPage";
import { ToDoPage } from "pages/ToDoPage";
import { MasFormulariosPage } from "pages/MasFormulariosPage";
import { PokemonApiPage } from "pages/PokemonApiPage";
import { AxiosPokemonApiPage } from "pages/AxiosPokemonApiPage";
import { EnrutamientoPage } from "pages/EnrutamientoPage";
import { IdPage } from "pages/enrutamiento/IdPage";

import { WordColorPage } from "pages/enrutamiento/WordColorPage";
import { HomePage } from "pages/enrutamiento/HomePage";
import { LukeApiWalkerPage } from "pages/LukeApiWalkerPage";
import { ResourcePage } from "pages/ResourcePage";
import { AuthLayout } from "layouts/AuthLayout";
import { LoginPage } from "pages/LoginPage";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<MainPage />} />
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
          <Route path="pokemon-api" element={<PokemonApiPage />} />
          <Route path="axios-pokemon-api" element={<AxiosPokemonApiPage />} />
          <Route path="enrutamiento" element={<EnrutamientoPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path=":id" element={<IdPage />} />
          <Route path=":word/:color1/:color2" element={<WordColorPage />} />
          <Route path="luke-api-walker" element={<LukeApiWalkerPage />} />
          <Route
            path="luke-api-walker/:resource/:resourceId"
            element={<ResourcePage />}
          />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
