import { currentUser } from "@clerk/nextjs/server";
import { DateTime } from "luxon";

const UserInfo = async () => {
  const userObj = await currentUser();

  const hour = DateTime.now().setZone("Asia/Phnom_Penh").hour;

  let greeting = "";
  if (hour >= 5 && hour < 12) {
    greeting = "Good morning ☀️";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good afternoon 🌤️";
  } else if (hour >= 17 && hour < 21) {
    greeting = "Good evening 🌇";
  } else {
    greeting = "Good night 🌙";
  }

  return (
    <div>
      {userObj ? (
        <p>
          <span className=" text-purple-500">{greeting} </span>
          <span>{userObj.lastName} !</span>
        </p>
      ) : (
        <>
          Please sign in to{" "}
          <span className="md:text-2xl text-purple-500">start tracking!</span>
        </>
      )}
    </div>
  );
};

export default UserInfo;
