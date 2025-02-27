"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Sun } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const MoodCard = () => {
  const router = useRouter();
  // Save mood to localStorage
  const saveMood = (mood: string, message: string) => {
    const newEntry = { date: new Date().toISOString(), mood, message };
    const existingEntries = JSON.parse(
      localStorage.getItem("moodHistory") || "[]"
    );
    localStorage.setItem(
      "moodHistory",
      JSON.stringify([...existingEntries, newEntry])
    );
  };

  const [selectedMood, setSelectedMood] = useState<{
    emoji: string;
    label: string;
  } | null>(null);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleMoodClick = (mood: { emoji: string; label: string }) => {
    setSelectedMood(mood);
    setShowModal(true);
  };

  const handleSubmit = () => {
    console.log(`Mood: ${selectedMood}, Message: ${message}`);
    setShowModal(false);
    toast("Mood Saved ✅", {
      description: message ? `Note: ${message}` : "No additional notes.",
      duration: 3000,
      // action: message ? `Note: ${message}` : "No additional notes.",
    });

    router.push("/mood_history");
    setMessage("");
  };
  const moods = [
    { emoji: "😊", label: "Great" },
    { emoji: "🙂", label: "Good" },
    { emoji: "😐", label: "Okay" },
    { emoji: "🙁", label: "Not Great" },
    { emoji: "😞", label: "Bad" },
    { emoji: "😢", label: "Very Bad" },
  ];
  return (
    <div className="flex flex-col justify-center items-center text-center w-[350px] h-auto rounded-3xl my-10 border shadow-md">
      <div className="w-full h-[150px] relative">
        <Image
          src={"/good_vibes.avif"}
          alt="bg"
          layout="fill"
          objectFit="cover"
          className="rounded-t-3xl"
        />
      </div>

      <div className="flex flex-col py-8 items-center w-full h-full">
        <div className="flex gap-2 text-purple-500 font-bold text-base">
          <span>
            <Sun size={20} />
          </span>
          <p>Daily Journal</p>
        </div>
        <p className="font-bold">How are you feeling today?</p>
        <div className="grid grid-cols-3  gap-2 px-2 my-5  ">
          {moods.map((mood, label): any => (
            <Button
              key={label}
              variant={"outline"}
              className="px-5 rounded-full"
              onClick={() => handleMoodClick(mood)}
            >
              {mood.emoji} {mood.label}
            </Button>
          ))}
        </div>

        {showModal && selectedMood && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
              <h3 className="text-lg font-semibold mb-2">
                Are you feeling {selectedMood.label} {selectedMood.emoji} today?
              </h3>

              <textarea
                className="w-full p-2 border rounded-md"
                placeholder="Write a short message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="flex justify-end mt-4 font-bold">
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-lg mr-2"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-purple-500 text-white rounded-lg "
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoodCard;
