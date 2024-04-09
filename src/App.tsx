import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import Root from "layout/Root.tsx";
import ConversationPage from "./pages/ConversationPage.tsx";
import ErrorPage from "pages/ErrorPage.tsx";
import HomePage from "pages/HomePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/conversation",
        element: <ConversationPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
