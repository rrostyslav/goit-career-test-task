import { Route, Routes } from "react-router";
import { HomePage } from "@/pages/Home/HomePage.tsx";
import { Layout } from "@/components/Layout";
import { CatalogPage } from "@/pages/Catalog/CatalogPage.tsx";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
      </Route>
    </Routes>
  );
};

export default App;
