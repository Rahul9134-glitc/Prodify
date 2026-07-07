import { FiMail, FiLock, FiEye, FiEyeOff, FiUser } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../schema/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Link } from "react-router-dom";


const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    reset();
  };

  return (
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10 shadow-2xl backdrop-blur-xl">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-white tracking-tight">
        Welcome to Register page 👋
      </h2>

      <p className="mt-2 text-sm text-slate-400">
        Register to continue your productivity journey.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
        {/* Name Field */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">Name</label>
          <div className="flex items-center rounded-xl border border-slate-800 bg-slate-950/50 px-4 focus-within:border-blue-500 transition-colors">
            <FiUser className="text-xl text-slate-500" />
            <input
              type="text"
              {...register("name")}
              placeholder="Enter your full name"
              className="w-full bg-transparent px-3 py-3.5 text-white outline-none placeholder:text-slate-600 text-sm"
            />
          </div>
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
          <div className="flex items-center rounded-xl border border-slate-800 bg-slate-950/50 px-4 focus-within:border-blue-500 transition-colors">
            <FiMail className="text-xl text-slate-500" />
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              className="w-full bg-transparent px-3 py-3.5 text-white outline-none placeholder:text-slate-600 text-sm"
            />
          </div>
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">Password</label>
          <div className="flex items-center rounded-xl border border-slate-800 bg-slate-950/50 px-4 focus-within:border-blue-500 transition-colors">
            <FiLock className="text-xl text-slate-500" />
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Enter your password"
              className="w-full bg-transparent px-3 py-3.5 text-white outline-none placeholder:text-slate-600 text-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-slate-500 hover:text-white transition"
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1.5 text-xs text-red-400">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Confirm Password
          </label>
          <div className="flex items-center rounded-xl border border-slate-800 bg-slate-950/50 px-4 focus-within:border-blue-500 transition-colors">
            <FiLock className="text-xl text-slate-500" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              placeholder="Confirm your password"
              className="w-full bg-transparent px-3 py-3.5 text-white outline-none placeholder:text-slate-600 text-sm"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="text-slate-500 hover:text-white transition"
            >
              {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="mt-1.5 text-xs text-red-400">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Options Row (Terms & Login Redirect) */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs pt-1">
          <label className="flex items-center gap-2 text-slate-300 cursor-pointer select-none">
            <input
              type="checkbox"
              {...register("terms")}
              className="h-4 w-4 rounded border-slate-700 bg-slate-950 text-blue-600 focus:ring-blue-500 accent-blue-600 cursor-pointer"
            />
            <span>I agree to Terms & Conditions</span>
          </label>

          <div className="text-slate-400">
            Already have an account?{" "}
            <Link to={"/"} className="text-blue-400 font-medium hover:underline focus:outline-none">
              Login
            </Link>
          </div>
        </div>
        {errors.terms && (
          <p className="mt-1 text-xs text-red-400">{errors.terms.message}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0F172A] disabled:cursor-not-allowed disabled:opacity-50 text-sm"
        >
          {isSubmitting ? "Creating..." : "Create Account"}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;