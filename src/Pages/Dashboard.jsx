import React from "react";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatCard from "../components/dashboard/StatusCards";
import {
  FiCheckSquare,
  FiCheckCircle,
  FiClock,
  FiCalendar,
  FiClipboard,
  FiLoader,
} from "react-icons/fi";
import RecentTasks from "../components/dashboard/RecentTasks";
import { getTasks } from "../services/taskServices";
import StatusPieChart from "../components/charts/StatusPieCharts";
import CategoryBarChart from "../components/charts/CategoryPieCharts";

const Dashboard = () => {
  const tasks = getTasks();

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed",
  ).length;

  const pendingTasks = tasks.filter((task) => task.status === "Pending").length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress",
  ).length;

  return (
    <div className="space-y-6">
      <WelcomeCard />
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

       <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <StatusPieChart />
        <CategoryBarChart/>
      </div>

      
      <RecentTasks />
     
    </div>
  );
};

export default Dashboard;
