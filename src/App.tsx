import { Route, Routes } from "react-router";
import { Provider as ReduxProvider } from "react-redux";
import { HomePage } from "@/pages/Home/HomePage.tsx";
import { Layout } from "@/components/Layout";
import { CatalogPage } from "@/pages/Catalog/CatalogPage.tsx";
import { store } from "@/redux/store.ts";

export const App = () => {
  return (
    <ReduxProvider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
        </Route>
      </Routes>
    </ReduxProvider>
  );
};

export default App;
