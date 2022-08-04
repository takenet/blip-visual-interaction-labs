import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Test from "./page-test/";
import "./style.scss";
import { Routes, Route } from "react-router-dom";
import BotList from "./chatbots/bot-list/bot-list";
import BotDetail from "./chatbots/bot-detail/bot-detail";

export default class Main extends React.Component {
  render() {
    return (
      <div className="container-main">
        <Sidebar />
        <Navbar />
        <div className="pages-routes">
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
            <Route path="test" element={<Test />} />
          </Routes>
        </div>
      </div>
    );
  }
}
