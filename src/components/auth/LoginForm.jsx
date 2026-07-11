import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../schema/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { loginUser } from "../../services/authServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });


  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const result = loginUser(data.email, data.password);

    if (result.success) {
      toast.success(result.message);
      reset();
      navigate("/welcome");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-white">Welcome Back 👋</h2>

      <p className="mt-2 text-gray-400">
        Login to continue your productivity journey.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
        <div>
          <label className="mb-2 block text-sm text-gray-300">Email</label>

          <div className="flex items-center rounded-xl border border-gray-700 bg-[#131A33] px-4">
            <FiMail className="text-xl text-gray-400" />
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              className="w-full bg-transparent px-3 py-4 text-white outline-none placeholder:text-gray-500"
            />
          </div>
          {errors.email && (
            <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">Password</label>

          <div className="flex items-center rounded-xl border border-gray-700 bg-[#131A33] px-4">
            <FiLock className="text-xl text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Enter your password"
              className="w-full bg-transparent px-3 py-4 text-white outline-none placeholder:text-gray-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-white transition"
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-2 text-sm text-red-400">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-300">
            <input
              type="checkbox"
              {...register("remember")}
              className="h-4 w-4 cursor-pointer"
            />
            Remember me
          </label>

          <button type="button" className="text-blue-400 hover:text-blue-300">
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Logging In..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
