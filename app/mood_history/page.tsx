// app/mood_history/page.tsx
"use client";

import BackBtn from "../components/BackBtn";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { format } from "date-fns";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { deleteMood, clearUserMoods } from "../store/moodSlice";

const MoodHistory = () => {
  const { user } = useUser();
  const dispatch = useDispatch();
  const allMoods = useSelector((state: RootState) => state.mood.history);
  const userMoods = allMoods.filter((mood) => mood.userId === user?.id);

  const handleDelete = (id: string) => {
    dispatch(deleteMood(id));
  };

  const handleClearAll = () => {
    if (user) {
      dispatch(clearUserMoods(user.id));
    }
  };

  return (
    <div className="max-w-2xl mx-auto h-screen border-x flex flex-col">
      <div className="p-4">
        <BackBtn />
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold mt-4">Your Mood History</h1>
          {userMoods.length > 0 && (
            <Button variant="destructive" size="sm" onClick={handleClearAll}>
              Clear All
            </Button>
          )}
        </div>

        {userMoods.length === 0 ? (
          <p className="text-gray-500">
            No mood entries yet. Track your first mood!
          </p>
        ) : (
          <div className="space-y-4">
            {[...userMoods]
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map((entry) => (
                <div
                  key={entry.id}
                  className="px-2 py-4 border rounded-lg shadow-sm bg-white"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{entry.emoji}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold ">{entry.label}</span>
                        <span className="text-sm text-gray-500 ">
                          {format(
                            new Date(entry.date),
                            "MMM dd, yyyy - h:mm a"
                          )}
                        </span>
                      </div>
                      {entry.note && (
                        <p className="mt-2 text-gray-700">{entry.note}</p>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(entry.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MoodHistory;
