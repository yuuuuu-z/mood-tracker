// "use client";

// import React, { useEffect, useState } from "react";
import { addDays, format, startOfWeek } from "date-fns";
import UserInfo from "./UserInfo";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ClerkProvider,
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  UserProfile,
} from "@clerk/nextjs";

interface UserInfo {
  name: string;
}

const Container = () => {
  const date = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const startMonday = startOfWeek(new Date(), { weekStartsOn: 0 });

  const weekDays = Array.from({ length: 7 }, (_, i) =>
    format(addDays(startMonday, i), "E")
  );
  const todayDay = format(new Date(), "E");

  // const [greeting, setGreeting] = useState("");

  // useEffect(() => {
  //   const hour = new Date().getHours();
  //   if (hour >= 5 && hour < 12) {
  //     setGreeting("Good Morning ☀️");
  //   } else if (hour >= 12 && hour < 17) {
  //     setGreeting("Good Afternoon 🌤️");
  //   } else if (hour >= 17 && hour < 21) {
  //     setGreeting("Good Evening 🌆");
  //   } else {
  //     setGreeting("Good Night 🌙");
  //   }
  // }, []);

  return (
    <div className="text-center mt-5 space-y-2 font-bold">
      <div className="text-[1.2rem] md:text-2xl">
        <UserInfo />
      </div>
      <p className="text-sm">Your emotions Your story. Start tracking now.</p>

      <div className="flex justify-center items-center space-x-3 text-lg font-semibold pt-5 px-2">
        {weekDays.map((day, index) => (
          <span
            className={`flex justify-center items-center w-10 h-10 rounded-full ${
              day === todayDay
                ? "text-white bg-purple-500" // Highlight today
                : "text-purple-500 bg-zinc-200"
            }`}
            key={index}
          >
            {day.charAt(0)}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Container;
