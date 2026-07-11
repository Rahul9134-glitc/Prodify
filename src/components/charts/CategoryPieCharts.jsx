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

const CategoryBarChart = () => {
  const tasks = getTasks();

  const work = tasks.filter(
    (task) => task.category === "Work"
  ).length;

  const study = tasks.filter(
    (task) => task.category === "Study"
  ).length;

  const personal = tasks.filter(
    (task) => task.category === "Personal"
  ).length;

  const data = {
    labels: ["Work", "Study", "Personal"],

    datasets: [
      {
        label: "Tasks",

        data: [work, study, personal],

        backgroundColor: [
          "#3B82F6",
          "#A855F7",
          "#22C55E",
        ],

        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      x: {
        ticks: {
          color: "#E5E7EB",
        },

        grid: {
          display: false,
        },
      },

      y: {
        beginAtZero: true,

        ticks: {
          color: "#E5E7EB",
          stepSize: 1,
        },

        grid: {
          color: "#334155",
        },
      },
    },
  };

  return (
    <div className="rounded-2xl border border-slate-700 bg-[#1E293B] p-6 shadow-lg">
      <h2 className="mb-6 text-xl font-bold text-white">
        Tasks by Category
      </h2>

      <Bar data={data} options={options} />
    </div>
  );
};

export default CategoryBarChart;