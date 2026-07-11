import React from "react";
import { FiX } from "react-icons/fi";

const ViewTaskModal = ({ isOpen, onClose, task }) => {
  if (!isOpen || !task) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-2xl bg-[#1E293B] p-6 shadow-2xl">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between border-b border-slate-700 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Task Details
            </h2>

            <p className="text-sm text-gray-400">
              View complete information about this task.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 hover:bg-slate-700 hover:text-white"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-5">

          <div>
            <p className="text-sm text-gray-400">Title</p>
            <h3 className="mt-1 text-lg font-semibold text-white">
              {task.title}
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-400">Description</p>
            <p className="mt-1 text-white">
              {task.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">

            <div>
              <p className="text-sm text-gray-400">Priority</p>
              <p className="mt-1 text-white">{task.priority}</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Category</p>
              <p className="mt-1 text-white">{task.category}</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Due Date</p>
              <p className="mt-1 text-white">{task.dueDate}</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Status</p>
              <p className="mt-1 text-white">{task.status}</p>
            </div>

          </div>

          <div>
            <p className="text-sm text-gray-400">Created At</p>
            <p className="mt-1 text-white">
              {new Date(task.createdAt).toLocaleString()}
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-end border-t border-slate-700 pt-5">

          <button
            onClick={onClose}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Close
          </button>

        </div>

      </div>
    </div>
  );
};

export default ViewTaskModal;