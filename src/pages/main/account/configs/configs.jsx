import React from "react";
import "./configs.scss";
import { Link } from "react-router-dom";
import Header from "../../../../components/header/header";

export default class Config extends React.Component {
  render() {
    return (
      <div>
        <Header icon="robot" title="Configuração da conta" />
        <Link to="/main/chatbot">
          <bds-button>teste</bds-button>
        </Link>
      </div>
    );
  }
}
