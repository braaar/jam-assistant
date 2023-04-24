import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import { Jam } from "./jam";
import { About } from "./components/about"
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: '/jam-assistant',
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Jam></Jam>
      },
      {
        path: 'about',
        element: <About></About>
      }
    ]
  }
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
