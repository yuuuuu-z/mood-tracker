"use client";

import React, { useEffect, useState } from "react";
import Profile from "./components/Profile";
import Container from "./components/Container";
import MoodCard from "./components/MoodCard";

const page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="max-w-2xl mx-auto h-screen border-x flex justify-center ">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
          <p className="mt-2 text-lg text-gray-600">Loading...</p>
        </div>
      ) : (
        <div className="w-full">
          <Profile />
          <Container />
          <div className="flex justify-center items-center">
            <MoodCard />
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
