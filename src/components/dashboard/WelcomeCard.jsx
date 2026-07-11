import React, { useEffect, useState } from "react";

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const WelcomeCard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Greeting
  const hour = currentTime.getHours();

  let greeting = "";

  if (hour < 12) {
    greeting = "🌅 Good Morning";
  } else if (hour < 17) {
    greeting = "☀️ Good Afternoon";
  } else if (hour < 21) {
    greeting = "🌇 Good Evening";
  } else {
    greeting = "🌙 Good Night";
  }

  // Date
  const date = currentTime.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Time
  const time = currentTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-8 shadow-xl">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div>
          <h3 className="text-lg font-medium text-blue-100">
            {greeting}
          </h3>

          <h2 className="mt-2 text-4xl font-bold text-white">
            {currentUser?.name}
          </h2>

          <p className="mt-4 max-w-lg text-blue-100">
            Stay productive, complete your goals and make today
            count. Every small task completed brings you closer
            to success.
          </p>
        </div>

        {/* Right */}
        <div className="rounded-2xl bg-white/10 px-8 py-6 text-center backdrop-blur-md">
          <h1 className="text-4xl font-bold tracking-wider text-white">
            {time}
          </h1>

          <p className="mt-3 text-blue-100">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;