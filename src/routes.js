import React from "react";
import HomeOld from "./pages/homepage-old/home-old.jsx";
import Login from "./pages/login/";
import Test from "./pages/page-test/";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/index.jsx";
import Main from "./pages/main.jsx";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}
