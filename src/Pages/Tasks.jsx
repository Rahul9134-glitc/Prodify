import { useState } from "react";
import { FiPlus, FiSearch } from "react-icons/fi";

import TaskModal from "../components/dashboard/TasksModal";
import ViewTaskModal from "../components/dashboard/VeiwTasksModel";
import TasksTable from "./TaskTable/TaskTable";

import { getTasks } from "../services/taskServices";

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

    const matchesFilter =
      filter === "All" || task.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            My Tasks
          </h1>

          <p className="mt-1 text-gray-500 dark:text-gray-400">
            Manage all your daily tasks efficiently.
          </p>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 lg:w-auto"
        >
          <FiPlus />
          Add Task
        </button>

      </div>

      {/* Search & Filter */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        {/* Search */}

        <div className="flex w-full items-center rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-slate-700 dark:bg-[#1E293B] lg:max-w-md">

          <FiSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ml-3 w-full bg-transparent text-gray-800 outline-none placeholder:text-gray-400 dark:text-white"
          />

        </div>

        {/* Filter */}

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-gray-800 shadow-sm outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-[#1E293B] dark:text-white lg:w-56"
        >
          <option>All</option>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

      </div>

      {/* Table */}

      <TasksTable
        tasks={filteredTasks}
        setTasks={setTasks}
        setIsOpen={setIsOpen}
        setEditingTask={setEditingTask}
        setViewTask={setViewTask}
        setIsViewOpen={setIsViewOpen}
      />

      {/* Add/Edit Modal */}

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

      {/* View Modal */}

      <ViewTaskModal
        isOpen={isViewOpen}
        onClose={() => setIsViewOpen(false)}
        task={viewTask}
      />
    </div>
  );
};

export default MyTasks;