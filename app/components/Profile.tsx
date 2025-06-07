import {
  ClerkProvider,
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  UserProfile,
} from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { userInfo } from "node:os";
import UserInfo from "./UserInfo";
import { Badge } from "@/components/ui/badge";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Profile = async () => {
  const date = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const isUser = await currentUser();
  console.log("is user : ", isUser);

  return (
    <div className="flex items-center justify-between px-5 py-3">
      <div className="font-bold underline">{date} </div>
      {/* <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" />
    <Av>CS</Av
    atarFallback>
  </Avatar> */}

      {/* <div className="flex">
        <div className="py-2 px-3 bg-black text-sm text-white rounded-lg transform hover:-translate-y-1 transition duration-400">
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>

          <SignedIn>
            <SignOutButton />
          </SignedIn>
        </div>
      </div> */}
      <div>
        {isUser ? (
          <Link href="/upgrade">
            <Badge>
              Upgrade to Pro{" "}
              <span className="pl-2">
                {" "}
                <BadgeCheck color="#0a57f0" size={15} />
              </span>
            </Badge>
          </Link>
        ) : (
          <div className="px-3 py-2 text-sm bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            <SignInButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
