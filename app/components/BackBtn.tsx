import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const BackBtn = () => {
  return (
    <div className="h-[2000px]">
      <div className="sticky top-0 p-4 z-10">
        <Link href={"/"}>
          <Button className=" bg-purple-500 text-white font-bold hover:bg-gray-200 hover:text-purple-500">
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BackBtn;
