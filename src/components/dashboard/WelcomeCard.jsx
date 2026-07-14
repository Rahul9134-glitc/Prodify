import React, { useEffect, useState } from "react";

const WelcomeCard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("currentUser"))
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const updateUser = () => {
      setUser(JSON.parse(localStorage.getItem("currentUser")));
    };

    window.addEventListener("userUpdated", updateUser);

    return () => {
      window.removeEventListener("userUpdated", updateUser);
    };
  }, []);

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

  const date = currentTime.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const time = currentTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-6 shadow-2xl transition-all duration-300 hover:scale-[1.01] md:p-8">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}
        <div className="flex-1">

          <span className="inline-flex rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white backdrop-blur-md">
            {greeting}
          </span>

          <h2 className="mt-5 text-3xl font-bold text-white md:text-5xl">
            Welcome,
            <span className="ml-2 text-yellow-300">
              {user?.name || "Guest"} 👋
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-blue-100 md:text-base">
            Stay productive and accomplish your goals today.
            Every completed task is one step closer to success.
            Keep pushing forward and make every moment count.
          </p>

        </div>

        {/* Right */}

        <div className="rounded-3xl border border-white/20 bg-white/10 px-8 py-6 text-center shadow-lg backdrop-blur-xl">

          <h1 className="text-3xl font-bold tracking-wider text-white md:text-5xl">
            {time}
          </h1>

          <div className="my-4 h-px bg-white/20"></div>

          <p className="text-sm text-blue-100 md:text-base">
            {date}
          </p>

        </div>

      </div>
    </div>
  );
};

export default WelcomeCard;