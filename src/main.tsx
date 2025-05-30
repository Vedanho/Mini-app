import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthPage from "./pages/AuthPage";
import { Pages } from "./pages";
import HomePage from "./pages/HomePage";
import MainLayout from "./Layout/MainLayout";
import { HeroProvider } from "./context/HeroContext";
import LayoutWithPoints from "./Layout/LayoutWithPoints";
import Shop from "./pages/ShopPage";
import AnimatedOutlet from "./Layout/AnimatedLayout";
import RatingPage from "./pages/RatingPage";
import DiscountPage from "./pages/DiscountPage";
import RegistPage from "./pages/RegistPage";

const router = createBrowserRouter([
  {
    element: <AnimatedOutlet />,
    children: [
      {
        path: Pages.auth,
        element: <AuthPage />,
      },
      {
        path: Pages.regist,
        element: <RegistPage />,
      },
      {
        element: <MainLayout />,
        children: [
          {
            path: Pages.main,
            element: <HomePage />,
          },
          {
            element: <LayoutWithPoints />,
            children: [
              {
                path: Pages.shop,
                element: <Shop />,
              },
              {
                path: Pages.rating,
                element: <RatingPage />,
              },
              {
                path: Pages.discount,
                element: <DiscountPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroProvider>
      <RouterProvider router={router} />
    </HeroProvider>
  </StrictMode>
);
