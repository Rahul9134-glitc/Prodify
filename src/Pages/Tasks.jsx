import { useState } from "react";
import { FiPlus, FiSearch } from "react-icons/fi";
import TaskModal from "../components/dashboard/TasksModal";
import TasksTable from "./TaskTable/TaskTable";
import { getTasks } from "../services/taskServices";
import ViewTaskModal from "../components/dashboard/VeiwTasksModel";

const MyTasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState(getTasks());
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [editingTask, setEditingTask] = useState(null);
  const [viewTask, setViewTask] = useState(null);
  const [isViewOpen, setIsViewOpen] = useState(false);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter = filter === "All" || task.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">My Tasks</h1>
          <p className="text-gray-400">Manage all your daily tasks</p>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
        >
          <FiPlus />
          Add Task
        </button>
      </div>

      {/* Search + Filter */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex w-full max-w-md items-center rounded-xl bg-[#1E293B] px-4 py-3">
          <FiSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ml-3 w-full bg-transparent text-white outline-none placeholder:text-gray-500"
          />
        </div>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-xl bg-[#1E293B] px-4 py-3 text-white outline-none"
        >
          <option>All</option>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </div>

      {/* Tasks Table */}
      <TasksTable
        tasks={filteredTasks}
        setTasks={setTasks}
        setIsOpen={setIsOpen}
        setEditingTask={setEditingTask}
        setViewTask={setViewTask}
        setIsViewOpen={setIsViewOpen}
      />

      {/* Modal */}
      <TaskModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setEditingTask(null);
        }}
        tasks={tasks}
        setTasks={setTasks}
        editingTask={editingTask}
      />

      <ViewTaskModal
        isOpen={isViewOpen}
        onClose={() => setIsViewOpen(false)}
        task={viewTask}
      />
    </div>
  );
};

export default MyTasks;
