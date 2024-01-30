import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface StudentProfileState {
  ProfImage: string | null;
  FirstName: string | null;
  LastName: string | null;
  Email: string | null;
  Address: string | null;
  Phone: string | null;
  EnrolledCourses: number[];
}

const initialState: StudentProfileState = {
  ProfImage: null,
  FirstName: null,
  LastName: null,
  Email: null,
  Address: null,
  Phone: null,
  EnrolledCourses: [],
};

export const studentProfileSlice = createSlice({
  name: "StudentProfile",
  initialState,
  reducers: {
    updateDetails: (state, action: PayloadAction<StudentProfileState>) => {
      state.FirstName = action.payload.FirstName;
      state.LastName = action.payload.LastName;
      state.Email = action.payload.Email;
      state.Address = action.payload.Address;
      state.Phone = action.payload.Phone;
      state.ProfImage = action.payload.ProfImage;
    },
    EnrollCourse: (state, action: PayloadAction<number>) => {
      const PrevState = state.EnrolledCourses;
      state.EnrolledCourses = [...PrevState, action.payload];
    },
    UnEnrollCourse: (state, action: PayloadAction<number>) => {
      state.EnrolledCourses = state.EnrolledCourses.filter(
        (c) => c !== action.payload
      );
    },
  },
});

export const { EnrollCourse, UnEnrollCourse, updateDetails } =
  studentProfileSlice.actions;

export default studentProfileSlice.reducer;
