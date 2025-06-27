"use client";

import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMood } from "@/app/store/moodSlice";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

interface Mood {
  emoji: string;
  label: string;
}

const MoodCard = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useUser();
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [note, setNote] = useState("");

  const moods: Mood[] = [
    { emoji: "😊", label: "Great" },
    { emoji: "🙂", label: "Good" },
    { emoji: "😐", label: "Okay" },
    { emoji: "🙁", label: "Not Good" },
    { emoji: "😞", label: "Bad" },
    { emoji: "😢", label: "Very Bad" },
  ];

  const handleMoodClick = (mood: Mood) => {
    setSelectedMood(mood);
    setShowModal(true);
  };

  const handleSubmit = () => {
    if (selectedMood && user) {
      dispatch(
        addMood({
          emoji: selectedMood.emoji,
          label: selectedMood.label,
          note,
          userId: user.id,
        })
      );
      setShowModal(false);
      setNote("");
      router.push("/mood_history");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center text-center w-[350px] rounded-3xl my-10 border shadow-md">
        <div className="w-full h-[150px] relative">
          <Image
            src="/good_vibes.avif"
            alt="background"
            fill
            className="rounded-t-3xl object-cover"
          />
        </div>

        <div className="flex flex-col py-8 items-center w-full h-full">
          <div className="flex gap-2 text-purple-500 font-bold text-base">
            <Sun size={20} />
            <p>Daily Journal</p>
          </div>
          <p className="font-bold">How are you feeling today?</p>

          <div className="grid grid-cols-3 gap-2 px-2 my-5">
            {moods.map((mood, index) => (
              <Button
                key={index}
                variant="outline"
                className="px-5 rounded-full"
                onClick={() => handleMoodClick(mood)}
              >
                {mood.emoji} {mood.label}
              </Button>
            ))}
          </div>

          {showModal && selectedMood && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg w-80 dark:text-white">
                <h3 className="text-lg font-semibold mb-2 dark:text-white">
                  Are you feeling {selectedMood.label} {selectedMood.emoji}{" "}
                  today?
                </h3>
                <textarea
                  className="w-full p-2 border rounded-md"
                  placeholder="Write a short message..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
                <div className="flex justify-end mt-4 font-bold">
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg mr-2"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-purple-500 text-white rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoodCard;
