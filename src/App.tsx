import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import Home from "pages/Home.tsx";
import Error from "pages/Error.tsx";
import Conversation from "./pages/Conversation/Conversation.tsx";
import Root from "layout/Root.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/conversation",
        element: <Conversation />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
