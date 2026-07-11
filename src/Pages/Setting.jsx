import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { changePassword } from "../services/authServices";

const Settings = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // Profile Form
  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: currentUser.name,
      email: currentUser.email,
    },
  });

  // Password Form
  const {
    register: registerPassword,
    handleSubmit: handlePasswordSubmit,
    reset: resetPassword,
  } = useForm();

  // Update Profile
  const onSubmit = (data) => {
    const updatedUser = {
      ...currentUser,
      name: data.name,
    };

    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

    toast.success("Profile Updated Successfully");
  };

  // Update Password
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
    <div className="space-y-8 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Account Settings
        </h1>

        <p className="text-gray-400">
          Manage your account preferences.
        </p>
      </div>

      {/* Profile */}
      <div className="rounded-2xl bg-[#1E293B] p-6">
        <h2 className="mb-6 text-xl font-semibold text-white">
          Profile Information
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <div>
            <label className="text-gray-300">Name</label>

            <input
              {...register("name")}
              className="mt-2 w-full rounded-xl bg-[#0F172A] p-3 text-white outline-none"
            />
          </div>

          <div>
            <label className="text-gray-300">Email</label>

            <input
              {...register("email")}
              disabled
              className="mt-2 w-full rounded-xl bg-[#0F172A] p-3 text-gray-500"
            />
          </div>

          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      </div>

      {/* Password */}
      <div className="rounded-2xl bg-[#1E293B] p-6">
        <h2 className="mb-6 text-xl font-semibold text-white">
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
            className="w-full rounded-xl bg-[#0F172A] p-3 text-white outline-none"
          />

          <input
            type="password"
            placeholder="New Password"
            {...registerPassword("newPassword")}
            className="w-full rounded-xl bg-[#0F172A] p-3 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            {...registerPassword("confirmPassword")}
            className="w-full rounded-xl bg-[#0F172A] p-3 text-white outline-none"
          />

          <button
            type="submit"
            className="rounded-xl bg-green-600 px-6 py-3 text-white hover:bg-green-700"
          >
            Update Password
          </button>
        </form>
      </div>

      {/* Theme */}
      <div className="rounded-2xl bg-[#1E293B] p-6">
        <h2 className="mb-6 text-xl font-semibold text-white">
          Appearance
        </h2>

        <div className="flex items-center justify-between">
          <span className="text-white">Dark Mode</span>

          <input type="checkbox" checked readOnly />
        </div>
      </div>
    </div>
  );
};

export default Settings;