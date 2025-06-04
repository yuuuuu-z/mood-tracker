import React from "react";
import BackBtn from "../components/BackBtn";
import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import { Edit} from "lucide-react";

import { Button } from "@/components/ui/button";
import SignOutBtn from "../components/SignOut";
import Link from "next/link";

const page = async () => {
  const userButtonAppearance = {
    elements: {
      userButtonAvatarBox: "w-20 h-20", // Custom width and height
      userButtonPopoverCard: "bg-blue-100", // Custom background for the popover card
      // userButtonPopoverActionButton: "text-red-600", // Custom text color for action buttons
    },
  };
  const isUser = await currentUser();
  const userId = isUser?.id.slice(-5);

  return (
    <div className="max-w-2xl mx-auto h-screen border-x ">
      <div>
        <BackBtn />
        <p className="text-center mb-10 font-bold text-2xl">Account</p>
      </div>
      <div className="flex justify-center">
        {isUser ? (
          <div className="flex justify-between items-center w-[600px] rounded-xl border shadow-md bg-purple-500 text-white  transition-all py-10 px-3 mx-3">
            <div className="flex gap-2 font-bold">
              <UserButton appearance={userButtonAppearance} />
              <div className="flex flex-col justify-center gap-1">
                <p className="text-lg">{isUser.fullName}</p>
                <p className="text-sm text-gray-300"> UID : {userId}</p>
              </div>
            </div>

            <Button variant="ghost" asChild>
              <Link target="_blank" href="/user-profile">
                <Edit />
              </Link>
            </Button>
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
