import React from "react";
import "./bot-detail.scss";
import { Link } from "react-router-dom";
import Header from "../../../../components/header/header";

export default class BotDetail extends React.Component {
  render() {
    return (
      <div>
        <Header icon="robot" title="Detalhes do bot" />
        <Link to="/main/chatbot">
          <bds-button>teste</bds-button>
        </Link>
      </div>
    );
  }
}
