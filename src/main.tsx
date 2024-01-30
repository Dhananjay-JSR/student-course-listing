import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./context/store.ts";
import Layout from "./layouts/Layout.tsx";
import { LoginScreen } from "./screen/LoginScreen.tsx";
import CourseScreen from "./screen/CourseScreen.tsx";
import CourseViewer from "./screen/CourseViewer.tsx";
import Dashboard from "./screen/Dashboard.tsx";
import ProfileScreen from "./screen/ProfileScreen.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <ProfileScreen />,
      },
      {
        path: "course",
        element: <CourseScreen />,
      },
      {
        path: "course/:courseId",
        loader: ({ params }) => {
          const courseId = params.courseId;
          return { courseId };
        },
        element: <CourseViewer />,
      },
    ],
  },
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
