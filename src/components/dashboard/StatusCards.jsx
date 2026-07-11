import React from "react";

const StatCard = ({
  title,
  value,
  icon,
  color,
  growth,
}) => {
  return (
    <div className="rounded-2xl border border-slate-700 bg-[#1E293B] p-6 shadow-lg transition hover:shadow-blue-500/10 hover:border-blue-500">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm font-medium text-gray-400">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            {value}
          </h2>

          {growth && (
            <p className="mt-3 text-sm font-medium text-green-400">
              {growth}
            </p>
          )}
        </div>

        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl text-white ${color}`}
        >
          {icon}
        </div>

      </div>
    </div>
  );
};

export default StatCard;