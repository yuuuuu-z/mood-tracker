import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { GoHistory, GoHome } from "react-icons/go";
import { TiCogOutline } from "react-icons/ti";

const BottomDock = () => {
  const Docks = [
    {
      name: "Home",
      icon: <GoHome />,
      herf: "/",
    },
    {
      name: "History",
      icon: <GoHistory />,
      herf: "/mood_history",
    },
    {
      name: "Settings",
      icon: <TiCogOutline />,
      herf: "/sitting",
    },
  ];

  return (
    <div className="flex justify-center gap-3 py-3 ">
      {Docks.flatMap((dock, index) => (
        <div key={index}>
          <Link
            className="flex font-bold items-center gap-1 rounded-xl border shadow-md p-3 bg-purple-500 text-white hover:bg-white hover:text-purple-500 hover:transition-all  "
            href={dock.herf}
          >
            {dock.icon}
            <p>{dock.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BottomDock;
