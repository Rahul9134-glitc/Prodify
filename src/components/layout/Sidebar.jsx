import React from "react";
import {
  FiGrid,
  FiCheckSquare,
  FiCalendar,
  FiBarChart2,
  FiUser,
  FiSettings,
  FiLogOut,
  FiHelpCircle,
} from "react-icons/fi";

import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/authServices";
import { toast } from "react-toastify";
import WeatherCard from "./Weathercard";

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <FiGrid />,
    },
    {
      title: "My Tasks",
      path: "/tasks",
      icon: <FiCheckSquare />,
    },
    {
      title: "Calendar",
      path: "/calendar",
      icon: <FiCalendar />,
    },
    {
      title: "Analytics",
      path: "/analytics",
      icon: <FiBarChart2 />,
    },
    {
      title: "Profile",
      path: "/profile",
      icon: <FiUser />,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <FiSettings />,
    },
  ];

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    const result = logoutUser();

    if (result.success) {
      toast.success(result.message);
      navigate("/");
    }
  };

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-700 bg-[#0F172A]">

      {/* Scroll Area */}
      <div className="flex-1 overflow-y-auto px-5 py-5">

        {/* Logo */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
            P
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              PRODIFY
            </h1>

            <p className="text-sm text-gray-400">
              Productivity App
            </p>
          </div>
        </div>

        {/* Menu */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-400 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.title}</span>
            </NavLink>
          ))}
        </nav>

        {/* Weather */}
        <div className="mt-8">
          <WeatherCard />
        </div>

        {/* Help Card */}
        <div className="mt-6 rounded-2xl bg-slate-800 p-5">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
            <FiHelpCircle />
          </div>

          <h3 className="font-semibold text-white">
            Need Help?
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            FAQs, documentation and support are available here.
          </p>

          <button
            onClick={() => navigate("/help")}
            className="mt-5 w-full rounded-xl bg-blue-600 py-2 text-white transition hover:bg-blue-700"
          >
            Open Help Center
          </button>
        </div>

      </div>

      {/* Logout */}
      <div className="border-t border-slate-700 p-5">
        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-500 py-3 text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          <FiLogOut />
          Logout
        </button>
      </div>

    </aside>
  );
};

export default Sidebar;