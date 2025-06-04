// "use client";

import React, { useEffect, useState } from "react";
import Profile from "./components/Profile";
import Container from "./components/Container";
import MoodCard from "./components/MoodCard";
import BottomDock from "./components/BottomDock";
import Pwa from "./components/Pwa";
import PwaUpdater from "./components/PwaUpdater";
import InstallNotice from "./components/InstallNotice";

const page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <div>
      {/* {isLoading ? ( */}

      {/* ) : ( */}
      <div className="w-full h-screen">
        <InstallNotice />
        <PwaUpdater />
        <Pwa />
        <Profile />
        {/* <UserInfo /> */}
        <Container />
        <div className="flex justify-center items-center">
          <MoodCard />
        </div>
        <BottomDock />
      </div>
      {/* )} */}
    </div>
  );
};

export default page;
