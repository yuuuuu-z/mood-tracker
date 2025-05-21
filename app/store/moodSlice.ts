// app/store/moodSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MoodEntry {
  id: string;
  emoji: string;
  label: string;
  note: string;
  date: string;
  userId: string;
}

interface MoodState {
  history: MoodEntry[];
}

const initialState: MoodState = {
  history: [],
};

export const moodSlice = createSlice({
  name: "mood",
  initialState,
  reducers: {
    addMood: (state, action: PayloadAction<Omit<MoodEntry, "id" | "date">>) => {
      const newEntry: MoodEntry = {
        id: Date.now().toString(),
        ...action.payload,
        date: new Date().toISOString(),
      };
      state.history.push(newEntry);
    },
    deleteMood: (state, action: PayloadAction<string>) => {
      state.history = state.history.filter(
        (mood) => mood.id !== action.payload
      );
    },
    clearUserMoods: (state, action: PayloadAction<string>) => {
      state.history = state.history.filter(
        (mood) => mood.userId !== action.payload
      );
    },
  },
});

// Export all action creators
export const { addMood, deleteMood, clearUserMoods } = moodSlice.actions;
export default moodSlice.reducer;
