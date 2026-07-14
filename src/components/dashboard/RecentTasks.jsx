import React from "react";
import { FiArrowRight, FiClipboard } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { getTasks } from "../../services/taskServices";

const RecentTasks = () => {
  const navigate = useNavigate();

  const tasks = getTasks();

  const recentTasks = [...tasks]
    .sort((a, b) => b.id - a.id)
    .slice(0, 5);

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400";

      case "Pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400";

      case "In Progress":
        return "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400";

      default:
        return "bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-300";
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 dark:border-slate-700 dark:bg-[#1E293B]">

      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Recent Tasks
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Your latest added tasks
          </p>
        </div>

        <button
          onClick={() => navigate("/tasks")}
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
        >
          View All
          <FiArrowRight />
        </button>

      </div>

      {/* Task List */}
      <div className="space-y-4">

        {recentTasks.length > 0 ? (
          recentTasks.map((task) => (
            <div
              key={task.id}
              className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg dark:border-slate-700 dark:bg-[#0F172A] md:flex-row md:items-center md:justify-between"
            >

              {/* Left */}
              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-white">
                  <FiClipboard size={22} />
                </div>

                <div>

                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {task.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 max-w-xl text-sm text-gray-600 dark:text-gray-400">
                    {task.description}
                  </p>

                </div>

              </div>

              {/* Right */}

              <div className="flex items-center justify-between gap-5 md:flex-col md:items-end">

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(
                    task.status
                  )}`}
                >
                  {task.status}
                </span>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  📅 {task.dueDate}
                </p>

              </div>

            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 py-12 dark:border-slate-700">

            <FiClipboard
              size={45}
              className="mb-4 text-gray-400"
            />

            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
              No Recent Tasks
            </h3>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Create your first task to get started.
            </p>

          </div>
        )}

      </div>
    </div>
  );
};

export default RecentTasks;