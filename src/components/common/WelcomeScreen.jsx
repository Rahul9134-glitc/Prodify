import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex h-screen items-center justify-center bg-[#0F172A]">

      <div className="text-center">

        <div className="mx-auto mb-6 flex h-24 w-24 animate-bounce items-center justify-center rounded-full bg-blue-600">
          <FiCheckCircle size={50} className="text-white" />
        </div>

        <h1 className="text-5xl font-bold text-white">
          PRODIFY
        </h1>

        <p className="mt-6 text-2xl text-gray-300">
          Welcome,
          <span className="font-semibold text-blue-400">
            {" "}
            {currentUser?.name}
          </span>
        </p>

        <div className="mt-8">
          <div className="mx-auto h-2 w-64 overflow-hidden rounded-full bg-slate-700">
            <div className="h-full w-full animate-pulse bg-blue-500"></div>
          </div>

          <p className="mt-4 animate-pulse text-gray-400">
            Loading Dashboard...
          </p>
        </div>

      </div>

    </div>
  );
};

export default WelcomeScreen;