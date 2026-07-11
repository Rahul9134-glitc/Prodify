import React from "react";
import { FiX } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { addTask } from "../../services/taskServices";
import { toast } from "react-toastify";
import { taskSchema } from "../../schema/TaskSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { updateTask } from "../../services/taskServices";

const TaskModal = ({ isOpen, onClose, tasks, setTasks, editingTask }) => {
  if (!isOpen) return null;

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(taskSchema),
  });

  useEffect(() => {
    if (editingTask) {
      setValue("title", editingTask.title);
      setValue("description", editingTask.description);
      setValue("priority", editingTask.priority);
      setValue("category", editingTask.category);
      setValue("dueDate", editingTask.dueDate);
      setValue("status", editingTask.status);
    } else {
      reset();
    }
  }, [editingTask, setValue, reset]);

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (editingTask) {
      const result = updateTask({
        ...editingTask,
        ...data,
      });

      if (result.success) {
        toast.success(result.message);

        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === result.task.id ? result.task : task,
          ),
        );

        reset();
        onClose();
      }
    } else {
      const result = addTask(data);

      if (result.success) {
        toast.success(result.message);

        setTasks((prevTasks) => [...prevTasks, result.task]);

        reset();
        onClose();
      } else {
        toast.error(result.message);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-2xl bg-[#1E293B] p-6 shadow-2xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between border-b border-slate-700 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-white">
              {" "}
              {editingTask ? "Edit Task" : "Add New Task"}
            </h2>

            <p className="text-sm text-gray-400">
              {editingTask
                ? "Update your task details."
                : "Create a new task for your productivity."}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 hover:bg-slate-700 hover:text-white"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Title */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Task Title
            </label>

            <input
              type="text"
              {...register("title")}
              placeholder="Enter task title"
              className="w-full rounded-xl border border-slate-700 bg-[#0F172A] px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>
          {errors.title && (
            <p className="mt-2 text-sm text-red-400">{errors.title.message}</p>
          )}

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Description
            </label>

            <textarea
              {...register("description")}
              rows="4"
              placeholder="Enter task description"
              className="w-full rounded-xl border border-slate-700 bg-[#0F172A] px-4 py-3 text-white outline-none focus:border-blue-500"
            ></textarea>
          </div>
          {errors.description && (
            <p className="mt-2 text-sm text-red-400">
              {errors.description.message}
            </p>
          )}

          {/* Priority + Category */}
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Priority
              </label>

              <select
                {...register("priority")}
                className="w-full rounded-xl border border-slate-700 bg-[#0F172A] px-4 py-3 text-white outline-none"
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              {errors.priority && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.priority.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Category
              </label>

              <select
                {...register("category")}
                className="w-full rounded-xl border border-slate-700 bg-[#0F172A] px-4 py-3 text-white outline-none"
              >
                <option value="">Select Category</option>
                <option value="Work">Work</option>
                <option value="Study">Study</option>
                <option value="Personal">Personal</option>
              </select>
              {errors.category && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.category.message}
                </p>
              )}
            </div>
          </div>

          {/* Due Date + Status */}
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Due Date
              </label>

              <input
                type="date"
                {...register("dueDate")}
                className="w-full rounded-xl border border-slate-700 bg-[#0F172A] px-4 py-3 text-white outline-none"
              />
              {errors.dueDate && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.dueDate.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">Status</label>

              <select
                {...register("status")}
                className="w-full rounded-xl border border-slate-700 bg-[#0F172A] px-4 py-3 text-white outline-none"
              >
                <option value="">Select Status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
              {errors.status && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.status.message}
                </p>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-4 border-t border-slate-700 pt-5">
            <button
              type="button"
              onClick={() => {
                reset();
                onClose();
              }}
              className="rounded-xl border border-slate-600 px-6 py-3 text-white hover:bg-slate-700"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              {isSubmitting
                ? editingTask
                  ? "Updating..."
                  : "Saving..."
                : editingTask
                  ? "Update Task"
                  : "Save Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
