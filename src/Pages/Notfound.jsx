import { Link } from "react-router-dom";
import { FiArrowLeft, FiHome } from "react-icons/fi";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-6 dark:bg-[#0B1120]">

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-2xl dark:border-slate-700 dark:bg-[#1E293B]"
      >
        {/* 404 */}

        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 10,
          }}
          className="text-8xl font-extrabold text-blue-600"
        >
          404
        </motion.h1>

        {/* Heading */}

        <h2 className="mt-5 text-3xl font-bold text-gray-900 dark:text-white">
          Oops! Page Not Found
        </h2>

        {/* Description */}

        <p className="mt-4 text-gray-500 dark:text-gray-400">
          The page you're looking for doesn't exist,
          has been moved, or the URL is incorrect.
        </p>

        {/* Button */}

        <Link
          to="/dashboard"
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-700"
        >
          <FiHome />
          Back to Dashboard
        </Link>

        {/* Footer */}

        <p className="mt-8 text-sm text-gray-400">
          Prodify • Productivity Management System
        </p>
      </motion.div>

    </div>
  );
};

export default NotFound;