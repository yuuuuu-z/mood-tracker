import { RedirectToUserProfile } from "@clerk/nextjs";
import BackBtn from "../components/BackBtn";

const UserProfile = () => {
  return (
    <>
      <RedirectToUserProfile />
    </>
  );
};

export default UserProfile;
