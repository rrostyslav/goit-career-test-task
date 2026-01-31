import { Header } from "@/components/Header";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <Outlet />
    </div>
  );
};
