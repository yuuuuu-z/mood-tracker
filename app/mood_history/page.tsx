"use client";

import BackBtn from "../components/BackBtn";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { format } from "date-fns";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Trash2, Sparkles } from "lucide-react";
import { deleteMood, clearUserMoods } from "../store/moodSlice";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { Alert, AlertDescription } from "@/components/ui/alert";

// 🔥 Mood-based motivational quotes
const moodQuotes = {
  happy: [
    "Your happiness is contagious! Keep spreading those good vibes ✨",
    "What a wonderful day to be you! 🌟",
    "Your joy is a gift to the world 🎁",
    "Keep shining bright, you're doing amazing! ☀️",
    "This positive energy looks great on you! 💫",
  ],
  sad: [
    "It's okay to feel sad. Your emotions are valid 💙",
    "This feeling will pass. You're stronger than you know 🌈",
    "Tears are healing. Let yourself feel 🤗",
    "You're not alone in this feeling 💫",
    "Tomorrow will bring new possibilities 🌅",
  ],
  depressed: [
    "You matter more than you know 💖",
    "One day at a time, one breath at a time 🌬️",
    "Your life has meaning and value 🌟",
    "This darkness is temporary, you are permanent ✨",
    "Please be gentle with yourself today 🤲",
  ],
  neutral: [
    "Every day doesn't have to be extraordinary 🌤️",
    "Steady progress counts too 🚶",
    "You're exactly where you need to be 🗺️",
    "Sometimes ordinary is perfectly enough ☁️",
    "Your consistency is your strength 💪",
  ],
  default: [
    "You're doing better than you think 🌟",
    "Every step forward is progress 🚶",
    "You deserve kindness — start with yourself 💖",
    "Keep going, your future self is proud of you 💪",
    "One day at a time, you've got this 🌈",
  ],
};

// 🔥 Helper to pick a random quote based on latest mood
const getMoodQuote = (userMoods: any[]): string => {
  if (userMoods.length === 0) {
    const defaults = moodQuotes.default;
    return defaults[Math.floor(Math.random() * defaults.length)];
  }

  // Get the most recent mood (sorted by date)
  const sortedMoods = [...userMoods].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const latestMood = sortedMoods[0];

  const moodLabel = latestMood.label.toLowerCase();

  // Map mood labels to quote categories (matching MoodCard exactly)
  const moodMapping: { [key: string]: keyof typeof moodQuotes } = {
    great: "happy",
    good: "happy",
    okay: "neutral",
    "not good": "sad",
    bad: "sad",
    "very bad": "depressed",
  };

  const quoteCategory = moodMapping[moodLabel] || "default";
  const quotes = moodQuotes[quoteCategory];

  return quotes[Math.floor(Math.random() * quotes.length)];
};

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

  // Quote popup state
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showQuote, setShowQuote] = useState(false);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    if (searchParams.get("showQuote") === "1") {
      const moodBasedQuote = getMoodQuote(userMoods);
      setQuote(moodBasedQuote);
      setShowQuote(true);

      // remove query param so refresh won't reopen
      const newUrl = window.location.pathname;
      router.replace(newUrl);
    }
  }, [searchParams, router, userMoods]);

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
          <p className="text-gray-500 dark:text-white">
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
                  className="px-2 py-4 border rounded-lg shadow-sm bg-white dark:bg-transparent dark:border-white"
                >
                  <div className="flex items-center gap-3 ">
                    <span className="text-2xl">{entry.emoji}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center ">
                        <span className="font-semibold">{entry.label}</span>
                        <span className="text-sm text-gray-500 dark:text-white">
                          {format(
                            new Date(entry.date),
                            "MMM dd, yyyy - h:mm a"
                          )}
                        </span>
                      </div>
                      {entry.note && (
                        <p className="mt-2 text-gray-700 dark:text-white">
                          {entry.note}
                        </p>
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

      {/* Modern motivation popup using Alert */}
      {showQuote && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-md  ">
            <Alert className="border-0 bg-gradient-to-br from-violet-50 to-indigo-100 dark:from-gray-900 dark:to-violet-900/30 shadow-2xl backdrop-blur-sm rounded-3xl p-8">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-purple-600/10 to-indigo-600/10 rounded-3xl animate-pulse" />

              {/* Floating particles effect */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute top-6 left-6 w-2 h-2 bg-violet-400 rounded-full animate-bounce opacity-60" />
                <div className="absolute top-12 right-8 w-1 h-1 bg-indigo-400 rounded-full animate-ping" />
                <div className="absolute bottom-8 left-12 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
              </div>

              <div className="relative z-10 text-center">
                {/* Header with icon */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center shadow-lg animate-bounce">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    Motivation Boost
                  </h2>
                </div>

                {/* Quote container with glassmorphism */}
                <div className="relative mb-8 p-8 rounded-2xl bg-white/40 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-gray-700/30 shadow-inner">
                  <div className="absolute top-4 left-4 text-4xl text-violet-400 opacity-50">
                    "
                  </div>
                  <div className="absolute bottom-4 right-4 text-4xl text-violet-400 opacity-50 rotate-180">
                    "
                  </div>

                  <AlertDescription className="text-xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed px-8 py-4 font-bold">
                    {quote}
                  </AlertDescription>
                </div>

                {/* Action button */}
                <Button
                  onClick={() => setShowQuote(false)}
                  className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-base"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    Got it!
                    <span className="animate-pulse">💚</span>
                  </span>
                </Button>
              </div>
            </Alert>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoodHistory;
