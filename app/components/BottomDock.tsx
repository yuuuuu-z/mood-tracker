"use client";

import { useUser } from "@clerk/nextjs";
import { LucidePackageCheck } from "lucide-react";

import Link from "next/link";
import { GoHome, GoHistory } from "react-icons/go";
import { TiCogOutline } from "react-icons/ti";

export default function Docks() {
  const { user } = useUser();

  const links = [
    { name: "Home", icon: <GoHome />, herf: "/" },
    { name: "Check In", icon: <LucidePackageCheck />, herf: "/check_in" },
    { name: "History", icon: <GoHistory />, herf: "/mood_history" },
    { name: "Settings", icon: <TiCogOutline />, herf: "/sitting" },
  ];

  if (!user) return null;

  return (
    <div className="flex justify-center gap-3 py-3 ">
      {links.map((dock, index) => (
        <Link
          key={index}
          className="flex font-bold  items-center gap-1 rounded-xl border shadow-md p-3 bg-purple-500 text-white hover:bg-white hover:text-purple-500 transition-all"
          href={dock.herf}
        >
          {dock.icon}
          <p>{dock.name}</p>
        </Link>
      ))}
    </div>
  );
}
