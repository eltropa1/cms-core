import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import DashboardPage from "../pages/DashboardPage";
import PostsPage from "../pages/PostsPage";
import CategoriesPage from "../pages/CategoriesPage";
import NotFoundPage from "../pages/NotFoundPage";

import PostEditorPage from "@/pages/PostEditorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "posts",
        element: <PostsPage />,
      },
      {
        path: "categories",
        element: <CategoriesPage />,
      },
      {
        path: "/posts/new",
        element: <PostEditorPage />,
      },
      {
        path: "/posts/:id",
        element: <PostEditorPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
