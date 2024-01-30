import React from "react";
import ReactDOM from "react-dom/client";
import App, { APPLoaader, CouseDetailScreen, FirstPreview } from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { mockData } from "./utils/MockData.ts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <FirstPreview />,
      },
      {
        path: "/course/:courseId",
        element: <CouseDetailScreen />,
        loader: ({ params }) => {
          const courseId = params.courseId;
          const course = mockData.find(
            (c) => c.id === parseInt(courseId ?? "0")
          );
          return {
            course,
          };
        },
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
