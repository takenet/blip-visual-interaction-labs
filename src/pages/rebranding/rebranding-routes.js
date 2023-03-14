import React from "react";
import { Routes, Route } from "react-router-dom";
import { ComponentsTest } from "./pages/components";

export default function RebradingRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ComponentsTest />} />
    </Routes>
  );
}