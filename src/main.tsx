import React from "react";
import ReactDOM from "react-dom/client";
import App, {
  APPLoaader,
  CourseData,
  CouseDetailScreen,
  FirstPreview,
  LoadingScreen,
} from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { mockData } from "./utils/MockData.ts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoadingScreen />,
    // children: [
    //   {
    //     path: "/dashboard",
    //     element: <FirstPreview />,
    //   },
    //   {
    //     path: "/course/:courseId",
    //     element: <CouseDetailScreen />,
    //     loader: ({ params }) => {
    //       const courseId = params.courseId;
    //       const course = mockData.find(
    //         (c) => c.id === parseInt(courseId ?? "0")
    //       );
    //       return {
    //         course,
    //       };
    //     },
    //   },
    // ],
  },
  {
    path: "/dashboard",
    element: <App />,
    children: [
      {
        index: true,
        element: <FirstPreview />,
      },
      {
        path: "course",
        loader: () => {
          return { courses: mockData };
        },
        element: <CourseData />,
      },
      {
        path: "course/:courseId",
        loader: ({ params }) => {
          const courseId = params.courseId;

          const course = mockData.filter(
            (c) => c.id === parseInt(courseId ?? "0")
          );

          if (!course) {
            console.error(
              `Course with id ${parseInt(courseId ?? "0")} not found`
            );
            return { course: null };
          }

          return { course: course[0] };
        },
        element: <CouseDetailScreen />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
