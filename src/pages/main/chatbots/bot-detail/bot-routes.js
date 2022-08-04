import React from "react";
import { Routes, Route } from "react-router-dom";
import BotDetail from "./bot-detail";

export default function BotRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BotDetail />} />
    </Routes>
  );
}
