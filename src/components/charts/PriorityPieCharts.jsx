import React from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { getTasks } from "../../services/taskServices";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const PriorityBarChart = () => {
  const tasks = getTasks();

  const high = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  const medium = tasks.filter(
    (task) => task.priority === "Medium"
  ).length;

  const low = tasks.filter(
    (task) => task.priority === "Low"
  ).length;

  const data = {
    labels: ["High", "Medium", "Low"],

    datasets: [
      {
        label: "Tasks",
        data: [high, medium, low],
        backgroundColor: [
          "#EF4444",
          "#FACC15",
          "#22C55E",
        ],
        borderRadius: 8,
      },
    ],
  };

  const options = {
    indexAxis: "y", // Horizontal Bar

    responsive: true,

    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      x: {
        beginAtZero: true,

        ticks: {
          color: "#E5E7EB",
          stepSize: 1,
        },

        grid: {
          color: "#334155",
        },
      },

      y: {
        ticks: {
          color: "#E5E7EB",
        },

        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="rounded-2xl border border-slate-700 bg-[#1E293B] p-6 shadow-lg">
      <h2 className="mb-6 text-xl font-bold text-white">
        Tasks by Priority
      </h2>

      <Bar data={data} options={options} />
    </div>
  );
};

export default PriorityBarChart;