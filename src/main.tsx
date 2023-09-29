import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TaskListContextProvider } from "./context/TaskListContext.tsx";
import { RouterProvider } from "react-router-dom";
import rootRoutes from "./routes/rootRoutes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TaskListContextProvider>
      <RouterProvider router={rootRoutes} />
    </TaskListContextProvider>
  </React.StrictMode>
);
