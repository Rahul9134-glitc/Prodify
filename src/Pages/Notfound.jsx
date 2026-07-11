import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0F172A] px-6 text-center">

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-8xl font-extrabold text-blue-500"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .3 }}
        className="mt-4 text-3xl font-bold text-white"
      >
        Oops! Page Not Found
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .5 }}
        className="mt-4 max-w-lg text-gray-400"
      >
        The page you're looking for doesn't exist or has been moved.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .8 }}
      >
        <Link
          to="/dashboard"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <FiArrowLeft />
          Back to Dashboard
        </Link>
      </motion.div>

    </div>
  );
};

export default NotFound;