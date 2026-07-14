import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

import { getTasks } from "../services/taskServices";
import ViewTaskModal from "../components/dashboard/VeiwTasksModel";

const CalendarPage = () => {
  const tasks = getTasks();

  const [selectedTask, setSelectedTask] = useState(null);
  const [isViewOpen, setIsViewOpen] = useState(false);

  const [calendarHeight, setCalendarHeight] = useState("650px");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCalendarHeight("450px");
      } else if (window.innerWidth < 1024) {
        setCalendarHeight("550px");
      } else {
        setCalendarHeight("650px");
      }

      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <div className="space-y-6">

      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Calendar
        </h1>

        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Manage your schedule and task deadlines.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">

        {/* Calendar */}

        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-700 dark:bg-[#1E293B] xl:col-span-2">

          <FullCalendar
            plugins={[
              dayGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}

            initialView={isMobile ? "listWeek" : "dayGridMonth"}

            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: isMobile
                ? "listWeek"
                : "dayGridMonth,listWeek",
            }}

            buttonText={{
              today: "Today",
              month: "Month",
              list: "List",
            }}

            height={calendarHeight}

            events={events}

            selectable={true}

            editable={false}

            nowIndicator={true}

            dayMaxEvents={2}

            displayEventTime={false}

            eventDisplay="block"

            dateClick={(info) => {
              console.log("Selected Date :", info.dateStr);

              // Future:
              // Open Add Task Modal
            }}

            eventClick={(info) => {
              setSelectedTask(info.event.extendedProps.task);
              setIsViewOpen(true);
            }}

            eventDidMount={(info) => {
              info.el.title = `${info.event.title}
Priority : ${info.event.extendedProps.task.priority}
Status : ${info.event.extendedProps.task.status}`;
            }}
          />

        </div>

        {/* Upcoming Tasks */}

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-[#1E293B]">

          <h2 className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
            Upcoming Tasks
          </h2>

          <div className="space-y-4">

            {upcomingTasks.length ? (
              upcomingTasks.map((task) => (
                <div
                  key={task.id}
                  className="rounded-2xl border border-slate-200 bg-gray-50 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-[#0F172A]"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {task.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    📅 Due : {task.dueDate}
                  </p>

                  <div className="mt-4 flex items-center justify-between">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        task.priority === "High"
                          ? "bg-red-500/20 text-red-400"
                          : task.priority === "Medium"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {task.priority}
                    </span>

                    <span
                      className={`text-sm font-medium ${
                        task.status === "Completed"
                          ? "text-green-500"
                          : task.status === "Pending"
                          ? "text-yellow-500"
                          : "text-blue-500"
                      }`}
                    >
                      {task.status}
                    </span>

                  </div>

                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 py-10 text-center text-gray-500 dark:border-slate-700 dark:text-gray-400">
                No Upcoming Tasks
              </div>
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