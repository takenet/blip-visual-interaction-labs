import React from "react";
import { Routes, Route } from "react-router-dom";
import Config from "./configs/configs";

export default function AccountRoutes() {
  return (
    <Routes>
      <Route path="account/config" element={<Config />} />
    </Routes>
  );
}