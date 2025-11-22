import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import WatchLater from "./pages/WatchLater.jsx";
import Shimmer from "./pages/Shimmer.jsx";
import { MenuProvider } from "./context/MenuContext.jsx";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";
import Results from "./pages/Results.jsx";

const Watch = lazy(() => import("./pages/Watch.jsx"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "watchlater",
        element: <WatchLater />,
      },
      {
        path: "watch",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Watch />
          </Suspense>
        ),
      },

      {
        path: "results",
        element: <Results />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <MenuProvider>
          <RouterProvider router={appRouter} />
        </MenuProvider>
      </ThemeContextProvider>
    </Provider>
  </StrictMode>
);
