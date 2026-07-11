import { FiUser, FiMail, FiCheckCircle } from "react-icons/fi";
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
    <div className="space-y-8 p-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          My Profile
        </h1>

        <p className="text-gray-400">
          View your account information.
        </p>
      </div>

      {/* Profile Card */}
      <div className="rounded-2xl border border-slate-700 bg-[#1E293B] p-8">

        <div className="flex items-center gap-6">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-4xl font-bold text-white">
            {currentUser.name.charAt(0).toUpperCase()}
          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              {currentUser.name}
            </h2>

            <p className="mt-2 text-gray-400">
              {currentUser.email}
            </p>

          </div>

        </div>

      </div>

      {/* Personal Info */}

      <div className="rounded-2xl border border-slate-700 bg-[#1E293B] p-6">

        <h2 className="mb-5 text-xl font-bold text-white">
          Personal Information
        </h2>

        <div className="space-y-5">

          <div className="flex items-center gap-4">
            <FiUser className="text-blue-400" />

            <div>
              <p className="text-sm text-gray-400">
                Full Name
              </p>

              <h3 className="text-white">
                {currentUser.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FiMail className="text-blue-400" />

            <div>
              <p className="text-sm text-gray-400">
                Email
              </p>

              <h3 className="text-white">
                {currentUser.email}
              </h3>
            </div>
          </div>

        </div>

      </div>

      {/* Statistics */}

      <div className="rounded-2xl border border-slate-700 bg-[#1E293B] p-6">

        <h2 className="mb-6 text-xl font-bold text-white">
          Task Statistics
        </h2>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-xl bg-[#0F172A] p-5">
            <p className="text-gray-400">
              Total Tasks
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              {total}
            </h2>
          </div>

          <div className="rounded-xl bg-[#0F172A] p-5">
            <p className="text-gray-400">
              Completed
            </p>

            <h2 className="mt-2 text-3xl font-bold text-green-400">
              {completed}
            </h2>
          </div>

          <div className="rounded-xl bg-[#0F172A] p-5">
            <p className="text-gray-400">
              Pending
            </p>

            <h2 className="mt-2 text-3xl font-bold text-yellow-400">
              {pending}
            </h2>
          </div>

          <div className="rounded-xl bg-[#0F172A] p-5">
            <p className="text-gray-400">
              In Progress
            </p>

            <h2 className="mt-2 text-3xl font-bold text-blue-400">
              {progress}
            </h2>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;