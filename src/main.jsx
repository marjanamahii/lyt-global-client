// eslint-disable-next-line no-unused-vars
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom"; // Import the Router

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/routers";
// import "remixicon/fonts/remixicon.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
