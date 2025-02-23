import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  const date = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return (
    <div className="flex items-center justify-between px-5 py-3 ">
      <div className="font-bold underline ">{date}</div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CS</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Profile;
