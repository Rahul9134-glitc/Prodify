import React from "react";
import { Pie } from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { getTasks } from "../../services/taskServices";

ChartJS.register(ArcElement, Tooltip, Legend);

const StatusPieChart = () => {
  const tasks = getTasks();

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const inProgress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const data = {
    labels: ["Completed", "Pending", "In Progress"],

    datasets: [
      {
        data: [completed, pending, inProgress],

        backgroundColor: [
          "#22C55E",
          "#FACC15",
          "#3B82F6",
        ],

        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "bottom",

        labels: {
          color: "#E5E7EB",
          padding: 20,
        },
      },
    },
  };

  return (
    <div className="rounded-2xl border border-slate-700 bg-[#1E293B] p-6 shadow-lg">
      <h2 className="mb-6 text-xl font-bold text-white">
        Task Status
      </h2>

      <Pie data={data} options={options} />
    </div>
  );
};

export default StatusPieChart;