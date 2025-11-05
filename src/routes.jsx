import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import App from "./App";
import Aboutpage from "./pages/Aboutpage";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import BlogsPage from "./pages/BlogsPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blogs/:slug" element={<BlogDetailPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
