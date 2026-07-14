import {
  FiUser,
  FiMail,
  FiClipboard,
  FiCheckCircle,
  FiClock,
  FiLoader,
} from "react-icons/fi";

import { getTasks } from "../services/taskServices";

const Profile = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const tasks = getTasks();

  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const progress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>

        <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          My Profile
        </h1>

        <p className="mt-1 text-gray-500 dark:text-gray-400">
          View your account information.
        </p>

      </div>

      {/* Profile Card */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-[#1E293B]">

        <div className="flex flex-col items-center gap-6 sm:flex-row">

          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-600 text-5xl font-bold text-white shadow-lg">
            {currentUser?.name?.charAt(0).toUpperCase()}
          </div>

          <div className="text-center sm:text-left">

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {currentUser?.name}
            </h2>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              {currentUser?.email}
            </p>

          </div>

        </div>

      </div>

      {/* Personal Information */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-[#1E293B]">

        <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
          Personal Information
        </h2>

        <div className="space-y-6">

          <div className="flex items-center gap-4 rounded-2xl bg-slate-100 p-4 dark:bg-[#0F172A]">

            <div className="rounded-xl bg-blue-600 p-3 text-white">
              <FiUser size={22} />
            </div>

            <div>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Full Name
              </p>

              <h3 className="font-semibold text-gray-900 dark:text-white">
                {currentUser?.name}
              </h3>

            </div>

          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-slate-100 p-4 dark:bg-[#0F172A]">

            <div className="rounded-xl bg-green-600 p-3 text-white">
              <FiMail size={22} />
            </div>

            <div>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Email Address
              </p>

              <h3 className="font-semibold text-gray-900 dark:text-white">
                {currentUser?.email}
              </h3>

            </div>

          </div>

        </div>

      </div>

      {/* Statistics */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-[#1E293B]">

        <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
          Task Statistics
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl bg-slate-100 p-5 transition hover:shadow-lg dark:bg-[#0F172A]">

            <FiClipboard className="mb-3 text-3xl text-blue-500" />

            <p className="text-gray-500 dark:text-gray-400">
              Total Tasks
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
              {total}
            </h2>

          </div>

          <div className="rounded-2xl bg-slate-100 p-5 transition hover:shadow-lg dark:bg-[#0F172A]">

            <FiCheckCircle className="mb-3 text-3xl text-green-500" />

            <p className="text-gray-500 dark:text-gray-400">
              Completed
            </p>

            <h2 className="mt-2 text-3xl font-bold text-green-500">
              {completed}
            </h2>

          </div>

          <div className="rounded-2xl bg-slate-100 p-5 transition hover:shadow-lg dark:bg-[#0F172A]">

            <FiClock className="mb-3 text-3xl text-yellow-500" />

            <p className="text-gray-500 dark:text-gray-400">
              Pending
            </p>

            <h2 className="mt-2 text-3xl font-bold text-yellow-500">
              {pending}
            </h2>

          </div>

          <div className="rounded-2xl bg-slate-100 p-5 transition hover:shadow-lg dark:bg-[#0F172A]">

            <FiLoader className="mb-3 text-3xl text-purple-500" />

            <p className="text-gray-500 dark:text-gray-400">
              In Progress
            </p>

            <h2 className="mt-2 text-3xl font-bold text-purple-500">
              {progress}
            </h2>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;