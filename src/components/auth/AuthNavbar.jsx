import { Link } from "react-router-dom";

const AuthNavbar = () => {
  return (
    <header className="absolute top-6 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-wider text-white"
        >
          PRODIFY
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-300 md:flex">
          <Link to="/dashboard">Home</Link>

          <Link to="/register">Sign Up</Link>

          <Link to="/">Sign In</Link>
        </nav>

        {/* Button */}
        <button className="rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default AuthNavbar;