import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Components } from "./pages/components";

export default function RebradingRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/components" element={<Components />} />
    </Routes>
  );
}