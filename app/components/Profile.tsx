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

const Profile = async () => {
  const date = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const isUser = await currentUser();

  return (
    <div className="flex items-center justify-between px-5 py-3">
      <div className="font-bold underline">{date} </div>
      {/* <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" />
    <Av>CS</Av
    atarFallback>
  </Avatar> */}

      <div className="flex">
        <div className="py-2 px-3 bg-black text-sm text-white rounded-lg transform hover:-translate-y-1 transition duration-400">
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>

          <SignedIn>
            <SignOutButton />
          </SignedIn>
        </div>

        {/* {isUser && (
          <div className="flex pl-3">
            <UserButton />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Profile;
