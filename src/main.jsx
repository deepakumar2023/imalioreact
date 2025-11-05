import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import AppRoutes from "./routes"; // import the routes file

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Header always on top */}
      <Header />

      {/* All routes handled in one file */}
      <AppRoutes />

    
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
