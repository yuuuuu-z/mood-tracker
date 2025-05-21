"use client";
import React, { useEffect } from "react";
import BackBtn from "../components/BackBtn";
import { useRouter } from "next/navigation";

const page = () => {
  return (
    <div className="max-w-2xl mx-auto h-screen border-x flex">
      <div>
        <BackBtn />
      </div>
    </div>
  );
};

export default page;
