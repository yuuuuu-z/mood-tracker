"use client";

import React, { useEffect, useState } from "react";
import BackBtn from "../components/BackBtn";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function AppearancePage() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  // Prevent rendering on server
  useEffect(() => {
    setMounted(true);
  }, []);

  const themeOptions = [
    {
      name: "Light Mode",
      icon: <Sun />,
      value: "light",
    },
    {
      name: "Dark Mode",
      icon: <Moon />,
      value: "dark",
    },
  ];

  if (!mounted) return null; // Or a loading spinner if you'd like

  return (
    <div className="p-4">
      <BackBtn />
      <p className="text-center mb-10 font-bold text-2xl">
        Appearance Preferences
      </p>

      <div className="flex flex-col items-center gap-4">
        <div className="text-lg">
          The current theme is: <strong>{theme}</strong>
        </div>
        <div className="flex gap-4">
          {themeOptions.map((option) => (
            <Button
              key={option.value}
              onClick={() => setTheme(option.value)}
              variant={theme === option.value ? "default" : "outline"}
            >
              {option.icon}
              <span className="ml-2">{option.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
