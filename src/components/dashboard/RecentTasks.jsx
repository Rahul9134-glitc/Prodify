import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { getTasks } from "../../services/taskServices";

const RecentTasks = () => {
  const navigate = useNavigate();

  const tasks = getTasks();

  const recentTasks = [...tasks]
    .sort((a, b) => b.id - a.id)
    .slice(0, 5);

  return (
    <div className="mt-8 rounded-2xl border border-slate-700 bg-[#1E293B] p-6 shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Recent Tasks
          </h2>

          <p className="text-sm text-gray-400">
            Your latest added tasks
          </p>
        </div>

        <button
          onClick={() => navigate("/tasks")}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
        >
          View All
          <FiArrowRight />
        </button>
      </div>
      
      <div className="space-y-4">
        {recentTasks.length > 0 ? (
          recentTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between rounded-xl border border-slate-700 bg-[#0F172A] p-4 transition hover:border-blue-500"
            >
              <div>
                <h3 className="font-semibold text-white">
                  {task.title}
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  {task.description}
                </p>
              </div>

              <div className="text-right">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    task.status === "Completed"
                      ? "bg-green-500/20 text-green-400"
                      : task.status === "Pending"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {task.status}
                </span>

                <p className="mt-2 text-xs text-gray-500">
                  {task.dueDate}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-xl border border-slate-700 bg-[#0F172A] py-10 text-center text-gray-400">
            No Recent Tasks Available
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentTasks;