import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-[#0B1120]">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header title="Dashboard" />

        <main className="flex-1 overflow-y-auto bg-[#111827] p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;