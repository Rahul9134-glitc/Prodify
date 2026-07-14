import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { changePassword } from "../services/authServices";

const Settings = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // ---------------- Profile Form ----------------

  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name: currentUser?.name,
      email: currentUser?.email,
    },
  });

  // ---------------- Password Form ----------------

  const {
    register: registerPassword,
    handleSubmit: handlePasswordSubmit,
    reset: resetPassword,
  } = useForm();

  // ---------------- Theme ----------------

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // ---------------- Update Profile ----------------

  const onSubmit = (data) => {
    const updatedUser = {
      ...currentUser,
      name: data.name,
    };

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map((user) =>
      user.id === currentUser.id ? updatedUser : user
    );

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    localStorage.setItem(
      "currentUser",
      JSON.stringify(updatedUser)
    );

    window.dispatchEvent(new Event("userUpdated"));

    reset(updatedUser);

    toast.success("Profile Updated Successfully");
  };

  // ---------------- Password ----------------

  const onPasswordSubmit = (data) => {
    const result = changePassword(
      data.currentPassword,
      data.newPassword,
      data.confirmPassword
    );

    if (result.success) {
      toast.success(result.message);
      resetPassword();
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Account Settings
        </h1>

        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Manage your account preferences.
        </p>
      </div>

      {/* Profile */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-[#1E293B]">

        <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
          Profile Information
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <div>
            <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Full Name
            </label>

            <input
              {...register("name")}
              className="mt-2 w-full rounded-xl border border-slate-300 bg-gray-100 p-3 text-gray-900 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-[#0F172A] dark:text-white"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Email Address
            </label>

            <input
              {...register("email")}
              disabled
              className="mt-2 w-full rounded-xl border border-slate-300 bg-gray-200 p-3 text-gray-500 dark:border-slate-700 dark:bg-[#0F172A]"
            />
          </div>

          <button
            type="submit"
            className="rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      </div>

      {/* Password */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-[#1E293B]">

        <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
          Change Password
        </h2>

        <form
          onSubmit={handlePasswordSubmit(onPasswordSubmit)}
          className="space-y-4"
        >
          <input
            type="password"
            placeholder="Current Password"
            {...registerPassword("currentPassword")}
            className="w-full rounded-xl border border-slate-300 bg-gray-100 p-3 text-gray-900 outline-none dark:border-slate-700 dark:bg-[#0F172A] dark:text-white"
          />

          <input
            type="password"
            placeholder="New Password"
            {...registerPassword("newPassword")}
            className="w-full rounded-xl border border-slate-300 bg-gray-100 p-3 text-gray-900 outline-none dark:border-slate-700 dark:bg-[#0F172A] dark:text-white"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            {...registerPassword("confirmPassword")}
            className="w-full rounded-xl border border-slate-300 bg-gray-100 p-3 text-gray-900 outline-none dark:border-slate-700 dark:bg-[#0F172A] dark:text-white"
          />

          <button
            type="submit"
            className="rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-green-700"
          >
            Update Password
          </button>
        </form>
      </div>

      {/* Appearance */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-[#1E293B]">

        <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
          Appearance
        </h2>

        <div className="flex items-center justify-between">

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Dark Mode
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Switch between light and dark theme.
            </p>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`relative h-8 w-16 rounded-full transition ${
              darkMode ? "bg-blue-600" : "bg-gray-400"
            }`}
          >
            <span
              className={`absolute top-1 h-6 w-6 rounded-full bg-white transition ${
                darkMode ? "left-9" : "left-1"
              }`}
            />
          </button>

        </div>

      </div>

    </div>
  );
};

export default Settings;