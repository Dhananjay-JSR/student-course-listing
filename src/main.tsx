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
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { mockData } from "./utils/MockData.ts";
import { Provider } from "react-redux";
import { store } from "./context/store.ts";
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

          // const course = mockData.filter(
          //   (c) => c.id === parseInt(courseId ?? "0")
          // );

          // if (!course) {
          //   console.error(
          //     `Course with id ${parseInt(courseId ?? "0")} not found`
          //   );
          //   return { course: null };
          // }

          return { courseId };
        },
        element: <CouseDetailScreen />,
      },
    ],
  },
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {/* <App /> */}
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
