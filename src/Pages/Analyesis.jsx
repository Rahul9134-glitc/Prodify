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
    <div className="space-y-8 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Analytics
        </h1>

        <p className="text-gray-400">
          Track your productivity and task insights.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Tasks"
          value={totalTasks}
          icon={<FiClipboard size={28} className="text-white" />}
          color="bg-blue-500"
        />

        <StatCard
          title="Completed"
          value={completed}
          icon={<FiCheckCircle size={28} className="text-white" />}
          color="bg-green-500"
        />

        <StatCard
          title="Pending"
          value={pending}
          icon={<FiClock size={28} className="text-white" />}
          color="bg-yellow-500"
        />

        <StatCard
          title="In Progress"
          value={progress}
          icon={<FiLoader size={28} className="text-white" />}
          color="bg-purple-500"
        />
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <StatusPieChart />
        <CategoryBarChart />
      </div>

      {/* Priority */}
      <PriorityBarChart />
    </div>
  );
};

export default Analytics;