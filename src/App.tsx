import { Route, Routes } from "react-router";
import { HomePage } from "@/pages/Home/HomePage.tsx";
import { Layout } from "@/components/Layout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
