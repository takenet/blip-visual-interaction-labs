import React from "react";
import Login from "./pages/login/";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/main.jsx";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main/*" element={<Main />} />
    </Routes>
  );
}
