import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-white dark:bg-[#0B1120]">

      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="h-full w-72"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar closeSidebar={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col overflow-hidden">

        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="flex-1 overflow-y-auto bg-gray-100 p-4 transition-colors duration-300 dark:bg-[#111827] md:p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default MainLayout;