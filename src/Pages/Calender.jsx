import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import { getTasks } from "../services/taskServices";
import { useState } from "react";
import ViewTaskModal from "../components/dashboard/VeiwTasksModel";

const CalendarPage = () => {
  const tasks = getTasks();
  const [selectedTask, setSelectedTask] = useState(null);
  const [isViewOpen, setIsViewOpen] = useState(false);

  const events = tasks.map((task) => ({
    title: task.title,
    date: task.dueDate,

    color:
      task.priority === "High"
        ? "#ef4444"
        : task.priority === "Medium"
          ? "#f59e0b"
          : "#22c55e",

    extendedProps: {
      task,
    },
  }));

  const upcomingTasks = [...tasks]
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .slice(0, 5);

  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Calendar</h1>

        <p className="text-gray-400">
          Manage your schedule and task deadlines.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {/* Calendar */}
        <div className="xl:col-span-2 rounded-2xl border border-slate-700 bg-[#1E293B] p-6">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            height="650px"
            events={events}
            eventClick={(info) => {
              setSelectedTask(info.event.extendedProps.task);
              setIsViewOpen(true);
            }}
            eventDidMount={(info) => {
              info.el.title = `${info.event.title}
               Priority: ${info.event.extendedProps.task.priority}
               Status: ${info.event.extendedProps.task.status}`;
            }}
          />
        </div>

        {/* Upcoming Tasks */}
        <div className="rounded-2xl border border-slate-700 bg-[#1E293B] p-6">
          <h2 className="mb-5 text-xl font-bold text-white">Upcoming Tasks</h2>

          <div className="space-y-4">
            {upcomingTasks.length ? (
              upcomingTasks.map((task) => (
                <div
                  key={task.id}
                  className="rounded-xl border border-slate-700 bg-[#0F172A] p-4"
                >
                  <h3 className="font-semibold text-white">{task.title}</h3>

                  <p className="mt-1 text-sm text-gray-400">
                    Due : {task.dueDate}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 text-xs ${
                        task.priority === "High"
                          ? "bg-red-500/20 text-red-400"
                          : task.priority === "Medium"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {task.priority}
                    </span>

                    <span className="text-sm text-blue-400">{task.status}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No Upcoming Tasks</p>
            )}
          </div>
        </div>
      </div>
      <ViewTaskModal
        isOpen={isViewOpen}
        onClose={() => setIsViewOpen(false)}
        task={selectedTask}
      />
    </div>
  );
};

export default CalendarPage;
