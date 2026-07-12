import React, { useState, useEffect, useRef } from "react";
import {
  FiBell,
  FiMoon,
  FiSearch,
  FiChevronDown,
  FiUser,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/authServices";
import { toast } from "react-toastify";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userName = currentUser?.name || "Guest";
  const firstLetter = userName.charAt(0).toUpperCase();

  const pageTitles = {
    "/dashboard": "Dashboard",
    "/tasks": "My Tasks",
    "/calendar": "Calendar",
    "/analytics": "Analytics",
    "/profile": "Profile",
    "/settings": "Settings",
  };

  const title = pageTitles[location.pathname] || "Dashboard";

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-700 bg-[#111827] px-8">
      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-white">{title}</h1>

        <p className="mt-1 text-sm text-gray-400">
          Home / {title}
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        {/* Search */}
        <div className="hidden items-center gap-3 rounded-xl border border-slate-700 bg-[#1E293B] px-4 py-3 lg:flex">
          <FiSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search tasks..."
            className="w-56 bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
          />
        </div>

        {/* Dark Mode */}
        <button className="rounded-xl p-2 text-gray-400 transition hover:bg-slate-800 hover:text-white">
          <FiMoon size={20} />
        </button>

        {/* Notification */}
        <div className="relative">
          <button className="rounded-xl p-2 text-gray-400 transition hover:bg-slate-800 hover:text-white">
            <FiBell size={20} />
          </button>

          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
            3
          </span>
        </div>

        {/* User Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-slate-800"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
              {firstLetter}
            </div>

            <div className="hidden text-left md:block">
              <p className="font-medium text-white">
                {userName}
              </p>

              <p className="text-xs text-gray-400">
                Productivity User
              </p>
            </div>

            <FiChevronDown
              className={`hidden text-gray-400 transition duration-300 md:block ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isOpen && (
            <div className="absolute right-0 z-50 mt-3 w-64 overflow-hidden rounded-2xl border border-slate-700 bg-[#1E293B] shadow-2xl">

              {/* User Info */}
              <div className="border-b border-slate-700 px-5 py-4">
                <h3 className="font-semibold text-white">
                  {userName}
                </h3>

                <p className="truncate text-sm text-gray-400">
                  {currentUser?.email}
                </p>
              </div>

              {/* Profile */}
              <button
                onClick={() => {
                  navigate("/profile");
                  setIsOpen(false);
                }}
                className="flex w-full items-center gap-3 px-5 py-3 text-gray-300 transition hover:bg-slate-700 hover:text-white"
              >
                <FiUser />
                My Profile
              </button>

              {/* Settings */}
              <button
                onClick={() => {
                  navigate("/settings");
                  setIsOpen(false);
                }}
                className="flex w-full items-center gap-3 px-5 py-3 text-gray-300 transition hover:bg-slate-700 hover:text-white"
              >
                <FiSettings />
                Settings
              </button>

              <div className="border-t border-slate-700"></div>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-3 px-5 py-3 text-red-400 transition hover:bg-red-500 hover:text-white"
              >
                <FiLogOut />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;