import React from "react";
import {
  FiClipboard,
  FiCheckCircle,
  FiClock,
  FiLoader,
} from "react-icons/fi";

import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatCard from "../components/dashboard/StatusCards";
import RecentTasks from "../components/dashboard/RecentTasks";
import StatusPieChart from "../components/charts/StatusPieCharts";
import CategoryBarChart from "../components/charts/CategoryPieCharts";

import { getTasks } from "../services/taskServices";

const Dashboard = () => {
  const tasks = getTasks();

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  return (
    <div className="space-y-8">

      {/* Welcome */}
      <WelcomeCard />

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Tasks"
          value={totalTasks}
          icon={<FiClipboard />}
          color="bg-blue-500"
        />

        <StatCard
          title="Completed"
          value={completedTasks}
          icon={<FiCheckCircle />}
          color="bg-green-500"
        />

        <StatCard
          title="Pending"
          value={pendingTasks}
          icon={<FiClock />}
          color="bg-yellow-500"
        />

        <StatCard
          title="In Progress"
          value={inProgressTasks}
          icon={<FiLoader />}
          color="bg-purple-500"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <StatusPieChart />
        <CategoryBarChart />
      </div>

      {/* Recent Tasks */}
      <RecentTasks />

    </div>
  );
};

export default Dashboard;