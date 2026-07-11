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

      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-700 bg-[#1E293B] shadow-lg">
      <table className="w-full">
        {/* Table Header */}
        <thead className="bg-[#0F172A]">
          <tr>
            <th className="px-6 py-4 text-left text-gray-300">Title</th>
            <th className="px-6 py-4 text-left text-gray-300">Priority</th>
            <th className="px-6 py-4 text-left text-gray-300">Category</th>
            <th className="px-6 py-4 text-left text-gray-300">Due Date</th>
            <th className="px-6 py-4 text-left text-gray-300">Status</th>
            <th className="px-6 py-4 text-center text-gray-300">Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr
                key={task.id}
                className="border-t border-slate-700 hover:bg-slate-800 transition"
              >
                <td className="px-6 py-4 text-white">{task.title}</td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs text-yellow-400">
                    {task.priority}
                  </span>
                </td>

                <td className="px-6 py-4 text-gray-300">{task.category}</td>

                <td className="px-6 py-4 text-gray-300">{task.dueDate}</td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-400">
                    {task.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3">
                    <button
                      className="text-green-400 hover:text-green-300"
                      onClick={() => {
                        setViewTask(task);
                        setIsViewOpen(true);
                      }}
                    >
                      <FiEye size={18} />
                    </button>

                    <button
                      onClick={() => {
                        setEditingTask(task);
                        setIsOpen(true);
                      }}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <FiEdit size={18} />
                    </button>

                    <button
                      onClick={() => handleDelete(task.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="py-10 text-center text-gray-400">
                No Tasks Available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TasksTable;
