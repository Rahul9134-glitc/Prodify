import React from "react";
import {
  FiBell,
  FiMoon,
  FiSearch,
  FiChevronDown,
} from "react-icons/fi";

const Header = ({ title = "Dashboard" }) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userName = currentUser?.name || "Guest";
  const firstLetter = Array.from(userName)

  return (
    <header className="flex h-20 items-center justify-between px-8">
      <div>

        <h1 className="mt-1 text-3xl font-bold text-white">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-6">

        <div className="hidden lg:flex items-center gap-2 rounded-xl border border-slate-700 bg-[#111827] px-4 py-2">
          <FiSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Type here..."
            className="bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
          />
        </div>
        <button className="text-gray-400 transition hover:text-white">
          <FiMoon size={20} />
        </button>

        <button className="text-gray-400 transition hover:text-white">
          <FiBell size={20} />
        </button>

        <button className="flex items-center gap-2 text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold">
            {firstLetter[0]}
          </div>

          <span className="hidden md:block">
          {userName}
          </span>

          <FiChevronDown className="hidden md:block" />
        </button>

      </div>
    </header>
  );
};

export default Header;