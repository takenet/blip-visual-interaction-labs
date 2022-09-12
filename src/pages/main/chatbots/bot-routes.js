import React from "react";
import { Routes, Route } from "react-router-dom";
import BotList from "./bot-list/bot-list";
import {BotDetail} from "./bot-detail/bot-detail";

export default function BotRoutes() {
  return (
    <Routes>
      <Route path="chatbot" element={<BotList />} />
      <Route path="chatbot/bot-detail" element={<BotDetail />} />
      <Route path="chatbot/builder" element={<BotDetail />} />
      <Route path="chatbot/atendimento" element={<BotDetail />} />
      <Route path="chatbot/analise" element={<BotDetail />} />
      <Route path="chatbot/ia" element={<BotDetail />} />
      <Route path="chatbot/contatos" element={<BotDetail />} />
      <Route path="chatbot/growth" element={<BotDetail />} />
      <Route path="chatbot/conteudo" element={<BotDetail />} />
      <Route path="chatbot/log" element={<BotDetail />} />
      <Route path="chatbot/pagamentos" element={<BotDetail />} />
      <Route path="chatbot/extensoes" element={<BotDetail />} />
    </Routes>
  );
}