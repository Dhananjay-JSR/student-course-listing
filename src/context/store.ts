import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "./reducers/ProfileSlice";

export const store = configureStore({
  reducer: {
    StudentProfile: StudentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
