import React from "react";
import Home from "./pages/homepage/home.jsx";
import Login from "./pages/login/login.jsx";
import Test from "./pages/page-test/page-test.jsx";
import { Routes, Route } from "react-router-dom";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/homepage" element={<Home />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}
