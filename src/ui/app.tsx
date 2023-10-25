import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  useSearchParams,
} from "react-router-dom";

const HomePage = () => {
  return <div>Home Screen</div>;
};
const AddScreen = () => {
  return <div>Add Screen</div>;
};

const ViewManager = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("page"));
  const currentPage = searchParams.get("page");
  if (currentPage === "home") {
    return <HomePage />;
  } else if (currentPage === "add") {
    return <AddScreen />;
  }
  return <div>View manager</div>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <ViewManager />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
