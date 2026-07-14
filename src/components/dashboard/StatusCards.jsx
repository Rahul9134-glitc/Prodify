import React from "react";

const StatCard = ({
  title,
  value,
  icon,
  color,
  growth,
}) => {
  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-slate-700
      bg-white
      p-6
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-blue-500
      hover:shadow-2xl
      dark:bg-[#1E293B]
    "
    >
      <div className="flex items-start justify-between">

        {/* Left */}
        <div>

          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {title}
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
            {value}
          </h2>

          {growth && (
            <div className="mt-4 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600 dark:bg-green-500/20 dark:text-green-400">
              {growth}
            </div>
          )}

        </div>

        {/* Right Icon */}

        <div
          className={`
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            text-3xl
            text-white
            shadow-lg
            transition-all
            duration-300
            group-hover:scale-110
            ${color}
          `}
        >
          {icon}
        </div>

      </div>
    </div>
  );
};

export default StatCard;