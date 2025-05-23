"use client"; // Required for interactivity (SignOutButton is a client component)

import { SignedIn, SignOutButton } from "@clerk/nextjs";

const SignOutBtn = () => {
  return (
    <div className="flex justify-center sticky bottom-1  p-2">
      <SignedIn>
        <SignOutButton>
          {/* Custom button styling */}
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition-colors">
            Sign Out
          </button>
        </SignOutButton>
      </SignedIn>
    </div>
  );
};

export default SignOutBtn;
