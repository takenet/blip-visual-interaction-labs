import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import "./style.scss";
import BotRoutes from "./chatbots/bot-routes";
import AccountRoutes from "./account/account-routes";

export default class Main extends React.Component {
  render() {
    return (
      <div className="container-main">
        <Sidebar />
        <Navbar />
        <div className="pages-routes">
            <BotRoutes />
            <AccountRoutes />
        </div>
      </div>
    );
  }
}
