import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ImageVariants } from "../../screen/LoginScreen";

export interface StudentProfileState {
  ProfImage: (typeof ImageVariants)[number] | null;
  FirstName: string | null;
  LastName: string | null;
  Email: string | null;
  Address: string | null;
  Phone: string | null;
  EnrolledCourses: {
    duration: string;
    encrolledDate: string;
    id: number;
    status: boolean[];
  }[];
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
    EnrollCourse: (
      state,
      action: PayloadAction<{
        id: number;
        numberofWeeks: number;
        duration: string;
        encrolledDate: string;
      }>
    ) => {
      const PrevState = state.EnrolledCourses;

      const NewState = [
        ...PrevState,
        {
          id: action.payload.id,
          status: Array.from({
            length: action.payload.numberofWeeks,
          }).map(() => false),
          duration: action.payload.duration,
          encrolledDate: action.payload.encrolledDate,
        },
      ];
      state.EnrolledCourses = NewState;
    },

    UnEnrollCourse: (state, action: PayloadAction<number>) => {
      state.EnrolledCourses = state.EnrolledCourses.filter(
        (course) => course.id !== action.payload
      );
    },
    UpdateCouseStatus(
      state,
      action: PayloadAction<{
        id: number;
        week: number;
        status: boolean;
      }>
    ) {
      const PrevState = state.EnrolledCourses;
      const NewState = PrevState.map((course) => {
        if (course.id === action.payload.id) {
          course.status[action.payload.week] = action.payload.status;
        }
        return course;
      });
      state.EnrolledCourses = NewState;
    },
  },
});

export const {
  EnrollCourse,
  UnEnrollCourse,
  updateDetails,
  UpdateCouseStatus,
} = studentProfileSlice.actions;

export default studentProfileSlice.reducer;
