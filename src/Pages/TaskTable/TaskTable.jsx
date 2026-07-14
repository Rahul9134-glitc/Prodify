import { FiEdit, FiTrash2, FiEye } from "react-icons/fi";
import { deleteTask } from "../../services/taskServices";
import { toast } from "react-toastify";

const TasksTable = ({
  tasks,
  setTasks,
  setIsOpen,
  setEditingTask,
  setViewTask,
  setIsViewOpen,
}) => {
  const handleDelete = (id) => {
    const result = deleteTask(id);

    if (result.success) {
      toast.success(result.message);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    }
  };

  const statusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400";

      case "Pending":
        return "bg-yellow-500/20 text-yellow-400";

      case "In Progress":
        return "bg-blue-500/20 text-blue-400";

      default:
        return "bg-gray-500/20 text-gray-300";
    }
  };

  const priorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-500/20 text-red-400";

      case "Medium":
        return "bg-yellow-500/20 text-yellow-400";

      case "Low":
        return "bg-green-500/20 text-green-400";

      default:
        return "bg-gray-500/20 text-gray-300";
    }
  };

  return (
    <>
      {/* ================= Desktop ================= */}

      <div className="hidden overflow-hidden rounded-2xl border border-slate-700 bg-[#1E293B] shadow-lg lg:block">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#0F172A]">
              <tr>
                <th className="px-6 py-4 text-left text-gray-300">Title</th>
                <th className="px-6 py-4 text-left text-gray-300">Priority</th>
                <th className="px-6 py-4 text-left text-gray-300">Category</th>
                <th className="px-6 py-4 text-left text-gray-300">Due Date</th>
                <th className="px-6 py-4 text-left text-gray-300">Status</th>
                <th className="px-6 py-4 text-center text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {tasks.length > 0 ? (
                tasks.map((task) => (
                  <tr
                    key={task.id}
                    className="border-t border-slate-700 transition hover:bg-slate-800"
                  >
                    <td className="px-6 py-4 text-white">{task.title}</td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs ${priorityColor(
                          task.priority
                        )}`}
                      >
                        {task.priority}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-gray-300">
                      {task.category}
                    </td>

                    <td className="px-6 py-4 text-gray-300">
                      {task.dueDate}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs ${statusColor(
                          task.status
                        )}`}
                      >
                        {task.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-4">
                        <button
                          onClick={() => {
                            setViewTask(task);
                            setIsViewOpen(true);
                          }}
                          className="text-green-400 hover:text-green-300"
                        >
                          <FiEye />
                        </button>

                        <button
                          onClick={() => {
                            setEditingTask(task);
                            setIsOpen(true);
                          }}
                          className="text-blue-400 hover:text-blue-300"
                        >
                          <FiEdit />
                        </button>

                        <button
                          onClick={() => handleDelete(task.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="py-10 text-center text-gray-400"
                  >
                    No Tasks Available
                  </td>
                </tr>
              )}
            </tbody>

          </table>

        </div>

      </div>

      {/* ================= Mobile ================= */}

      <div className="space-y-4 lg:hidden">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div
              key={task.id}
              className="rounded-2xl border border-slate-700 bg-[#1E293B] p-5 shadow"
            >
              <h3 className="text-lg font-semibold text-white">
                {task.title}
              </h3>

              <div className="mt-4 space-y-2 text-sm text-gray-300">
                <p>
                  <strong>Priority:</strong>{" "}
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${priorityColor(
                      task.priority
                    )}`}
                  >
                    {task.priority}
                  </span>
                </p>

                <p>
                  <strong>Category:</strong> {task.category}
                </p>

                <p>
                  <strong>Due Date:</strong> {task.dueDate}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${statusColor(
                      task.status
                    )}`}
                  >
                    {task.status}
                  </span>
                </p>
              </div>

              <div className="mt-5 flex justify-end gap-5">
                <button
                  onClick={() => {
                    setViewTask(task);
                    setIsViewOpen(true);
                  }}
                  className="text-green-400"
                >
                  <FiEye size={20} />
                </button>

                <button
                  onClick={() => {
                    setEditingTask(task);
                    setIsOpen(true);
                  }}
                  className="text-blue-400"
                >
                  <FiEdit size={20} />
                </button>

                <button
                  onClick={() => handleDelete(task.id)}
                  className="text-red-400"
                >
                  <FiTrash2 size={20} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-2xl bg-[#1E293B] p-10 text-center text-gray-400">
            No Tasks Available
          </div>
        )}
      </div>
    </>
  );
};

export default TasksTable;