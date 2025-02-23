"use client";

import React, { useEffect, useState } from "react";
import { addDays, format, startOfWeek } from "date-fns";

const Container = () => {
  const startMonday = startOfWeek(new Date(), { weekStartsOn: 1 });

  const weekDays = Array.from({ length: 7 }, (_, i) =>
    format(addDays(startMonday, i), "E").charAt(0)
  );
  const todayDay = format(new Date(), "E");

  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting("Good Morning ☀️");
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Good Afternoon 🌤️");
    } else if (hour >= 17 && hour < 21) {
      setGreeting("Good Evening 🌆");
    } else {
      setGreeting("Good Night 🌙");
    }
  }, []);

  return (
    <div className="text-center mt-5 space-y-2 font-bold">
      <p className="text-2xl text-purple-500">
        {greeting} <span className="text-black">Tra !</span>
      </p>
      <p className="text-sm">Your emotions, your story. Start tracking now.</p>
      <div className="flex justify-center items-center space-x-3 text-lg font-semibold pt-5 px-2">
        {weekDays.map((day, index) => (
          <span
            className={`flex justify-center items-center w-10 h-10 rounded-full ${
              day === todayDay[0]
                ? "text-white bg-purple-500" // Highlight today
                : "text-purple-500 bg-zinc-200"
            }`}
            key={index}
          >
            {day}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Container;
