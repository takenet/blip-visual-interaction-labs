import React from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./index";

export default function TestRoutes() {
  return (
    <Routes>
      <Route path="test" element={<Test />} />
    </Routes>
  );
}