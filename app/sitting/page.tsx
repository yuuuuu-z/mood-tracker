import React from "react";
import BackBtn from "../components/BackBtn";
import { currentUser } from "@clerk/nextjs/server";
import { SignedIn, UserButton, SignIn, SignOutButton } from "@clerk/nextjs";
import { Edit, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import SignOutBtn from "../components/SignOut";

const page = async () => {
  const isUser = await currentUser();
  return (
    <div className="max-w-2xl mx-auto h-screen border-x ">
      <div>
        <BackBtn />
        <p className="text-center mb-10 font-bold text-2xl">Account</p>
      </div>
      <div className="flex justify-center">
        {isUser ? (
          <div className="flex justify-between items-center w-[600px] rounded-xl border shadow-md bg-purple-500 text-white  transition-all py-10 px-5 mx-3">
            <div>
              <UserButton />
              <p>{isUser.fullName}</p>
            </div>
            <div>
              <Edit />
            </div>
          </div>
        ) : null}
      </div>
      <div>
        <SignOutBtn />
      </div>
    </div>
  );
};

export default page;
