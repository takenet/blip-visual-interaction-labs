import React from "react";
import { Routes, Route } from "react-router-dom";
import {Home} from "./pages/home";

export default function RebradingRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}