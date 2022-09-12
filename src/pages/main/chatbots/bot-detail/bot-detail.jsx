import React from "react";
import "./bot-detail.scss";
import { Link } from "react-router-dom";
import Header from "../../../../components/header/header";

export function BotDetail() {

    
    return (
      <div>
        <Header icon="robot" title="Detalhes do bot" />
        <Link to="/main/chatbot">
          <bds-button>teste do pagination</bds-button>
        </Link>
        <bds-pagination pages="30"></bds-pagination>
      </div>
    );
    
}
