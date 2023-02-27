import React from "react";
import Login from "./pages/login/";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/main.jsx";
import Template from "./pages/componentList/Template";
import Homepage from "./pages/Homepage";
import { Rebranding } from "./pages/rebranding/pages/rebrading";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/blip-ds-test-react" element={<Template />} />
      <Route path="/login-portal" element={<Login />} />
      <Route path="/main/*" element={<Main />} />
      <Route path="/rebranding/*" element={<Rebranding />} />
    </Routes>
  );
}
