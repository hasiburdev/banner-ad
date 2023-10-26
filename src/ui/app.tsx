import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  useSearchParams,
} from "react-router-dom";

const HomeScreen = () => {
  return <div>Home Screen</div>;
};
const CurrencyScreen = () => {
  return <div>Add Screen</div>;
};

const MediaScreen = () => {
  return <div>Add Media</div>;
};

const AdvertisementScreen = () => {
  return <div>Add Ads</div>;
};

const AboutScreen = () => {
  return <div>About IntWins</div>;
};

const PresentationScreen = () => {
  return <div>Presentation Page</div>;
};

const PresentationFullScreen = () => {
  return <div>Presentation Page</div>;
};

const DetailsScreen = () => {
  return <div>Details</div>;
};

const SettingsScreen = () => {
  return <div>Settings</div>;
};

const ViewManager = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("page"));
  const currentPage = searchParams.get("page");

  let currentScreen;

  switch (currentPage) {
    case "home":
      currentScreen = <HomeScreen />;
      break;

    case "currency":
      currentScreen = <CurrencyScreen />;
      break;
    case "media":
      currentScreen = <MediaScreen />;
      break;
    case "advertisement":
      currentScreen = <AdvertisementScreen />;
      break;
    case "details":
      currentScreen = <DetailsScreen />;
      break;
    case "settings":
      currentScreen = <SettingsScreen />;
      break;

    case "about":
      currentScreen = <AboutScreen />;
      break;

    case "present":
      currentScreen = <PresentationScreen />;
      break;

    case "present-full":
      currentScreen = <PresentationFullScreen />;
      break;
    default:
      currentScreen = <HomeScreen />;
      break;
  }

  return currentScreen;
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
