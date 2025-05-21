// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import moodReducer from "./moodSlice";

const persistConfig = {
  key: "mood",
  storage,
};

const persistedReducer = persistReducer(persistConfig, moodReducer);

export const store = configureStore({
  reducer: {
    mood: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
