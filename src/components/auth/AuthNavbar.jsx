import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const AuthNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="absolute top-6 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl md:px-8">
        <div className="flex items-center justify-between">
          
          <Link
            to="/"
            className="text-xl font-bold tracking-wider text-white z-50"
          >
            PRODIFY
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-300 md:flex lg:gap-8">
            <Link to="/dashboard" className="transition hover:text-white">Home</Link>
            <Link to="/register" className="transition hover:text-white">Sign Up</Link>
            <Link to="/" className="transition hover:text-white">Sign In</Link>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <button className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
              Get Started
            </button>
          </div>

          <button
            onClick={toggleMenu}
            className="z-50 flex items-center justify-center rounded-xl p-2 text-gray-300 transition hover:bg-white/10 hover:text-white md:hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md transition-opacity duration-300 md:hidden"
          onClick={toggleMenu}
        />
      )}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-[280px] border-l border-white/10 bg-[#0f172a]/95 p-6 pt-28 shadow-2xl backdrop-blur-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 text-lg font-medium text-gray-300">
          <Link to="/dashboard" onClick={toggleMenu} className="transition hover:text-white">
            Home
          </Link>
          <Link to="/register" onClick={toggleMenu} className="transition hover:text-white">
            Sign Up
          </Link>
          <Link to="/" onClick={toggleMenu} className="transition hover:text-white">
            Sign In
          </Link>
          
          <hr className="my-2 border-white/10" />
          
          <button 
            onClick={toggleMenu}
            className="w-full rounded-xl bg-blue-600 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Get Started
          </button>
        </nav>
      </div>
    </>
  );
};

export default AuthNavbar;