import React from "react";
import { getTasks } from "../services/taskServices";

import StatCard from "../components/dashboard/StatusCards";
import StatusPieChart from "../components/charts/StatusPieCharts";
import CategoryBarChart from "../components/charts/CategoryPieCharts";
import PriorityBarChart from "../components/charts/PriorityPieCharts";

import {
  FiClipboard,
  FiCheckCircle,
  FiClock,
  FiLoader,
} from "react-icons/fi";

const Analytics = () => {
  const tasks = getTasks();

  const totalTasks = tasks.length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const progress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          Analytics
        </h1>

        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 sm:text-base">
          Track your productivity and task insights.
        </p>
      </div>

      {/* Stat Cards */}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Total Tasks"
          value={totalTasks}
          icon={<FiClipboard size={28} />}
          color="bg-blue-500"
        />

        <StatCard
          title="Completed"
          value={completed}
          icon={<FiCheckCircle size={28} />}
          color="bg-green-500"
        />

        <StatCard
          title="Pending"
          value={pending}
          icon={<FiClock size={28} />}
          color="bg-yellow-500"
        />

        <StatCard
          title="In Progress"
          value={progress}
          icon={<FiLoader size={28} />}
          color="bg-purple-500"
        />

      </div>

      {/* Charts */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="overflow-hidden rounded-3xl">
          <StatusPieChart />
        </div>

        <div className="overflow-hidden rounded-3xl">
          <CategoryBarChart />
        </div>

      </div>

      {/* Priority Chart */}

      <div className="overflow-hidden rounded-3xl">
        <PriorityBarChart />
      </div>

    </div>
  );
};

export default Analytics;