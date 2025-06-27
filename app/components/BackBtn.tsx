"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

import { useRouter } from "next/navigation";
import React from "react";

const BackBtn = () => {
  const router = useRouter();
  const backHandle = () => {
    router.back();
  };
  return (
    <div className="">
      <div className="sticky top-0  p-4 z-10">
        <Button
          onClick={backHandle}
          className=" bg-purple-500 text-white font-bold hover:bg-gray-200 hover:text-purple-500"
        >
          <ArrowLeft />
        </Button>
      </div>
    </div>
  );
};

export default BackBtn;
