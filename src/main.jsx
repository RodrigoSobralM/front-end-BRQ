import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from './views/home/App'
import Logado from './views/Logado/Logado'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/logado",
    element: <Logado />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
