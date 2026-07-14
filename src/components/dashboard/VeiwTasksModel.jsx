import React from "react";
import { FiX } from "react-icons/fi";

const ViewTaskModal = ({ isOpen, onClose, task }) => {
  if (!isOpen || !task) return null;

  const priorityColor = {
    High: "bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400",
    Medium:
      "bg-yellow-100 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-400",
    Low: "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400",
  };

  const statusColor = {
    Completed:
      "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400",
    Pending:
      "bg-yellow-100 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-400",
    "In Progress":
      "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-700 dark:bg-[#1E293B] sm:max-w-2xl">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-700">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Task Details
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Complete information about this task.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-gray-500 transition hover:bg-slate-200 hover:text-black dark:hover:bg-slate-700 dark:hover:text-white"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-6">

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Title
            </p>

            <h3 className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
              {task.title}
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Description
            </p>

            <p className="mt-2 leading-7 text-gray-700 dark:text-gray-300">
              {task.description || "No description available."}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Priority
              </p>

              <span
                className={`mt-2 inline-block rounded-full px-4 py-1 text-sm font-semibold ${
                  priorityColor[task.priority]
                }`}
              >
                {task.priority}
              </span>
            </div>

            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Category
              </p>

              <p className="mt-2 font-medium text-gray-900 dark:text-white">
                {task.category}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Due Date
              </p>

              <p className="mt-2 font-medium text-gray-900 dark:text-white">
                {task.dueDate}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Status
              </p>

              <span
                className={`mt-2 inline-block rounded-full px-4 py-1 text-sm font-semibold ${
                  statusColor[task.status]
                }`}
              >
                {task.status}
              </span>
            </div>

          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Created At
            </p>

            <p className="mt-2 text-gray-900 dark:text-white">
              {task.createdAt
                ? new Date(task.createdAt).toLocaleString()
                : "Not Available"}
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-end border-t border-slate-200 pt-5 dark:border-slate-700">

          <button
            onClick={onClose}
            className="rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-blue-700"
          >
            Close
          </button>

        </div>

      </div>
    </div>
  );
};

export default ViewTaskModal;