import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 2200);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-6 dark:from-[#020617] dark:via-[#0F172A] dark:to-[#111827]">

      <motion.div
        initial={{ opacity: 0, scale: .85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .5 }}
        className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white/80 p-10 text-center shadow-2xl backdrop-blur-xl dark:border-slate-700 dark:bg-white/5"
      >

        {/* Logo */}

        <motion.div
          animate={{
            rotate: [0, 8, -8, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl"
        >
          <FiCheckCircle className="text-5xl text-white" />
        </motion.div>

        {/* Title */}

        <h1 className="text-5xl font-extrabold tracking-wide text-gray-900 dark:text-white">
          PRODIFY
        </h1>

        <p className="mt-3 text-gray-500 dark:text-gray-400">
          Productivity Management System
        </p>

        {/* User */}

        <div className="mt-8 flex flex-col items-center">

          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white shadow-lg">
            {currentUser?.name?.charAt(0).toUpperCase()}
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Welcome Back
          </h2>

          <p className="mt-2 text-lg text-blue-600 dark:text-blue-400">
            {currentUser?.name}
          </p>

        </div>

        {/* Loader */}

        <div className="mt-10">

          <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
            />

          </div>

          <p className="mt-5 text-sm tracking-wide text-gray-500 dark:text-gray-400">
            Preparing your dashboard...
          </p>

        </div>

      </motion.div>

    </div>
  );
};

export default WelcomeScreen;