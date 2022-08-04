import React from "react";
import Card from "../../../../components/cards/card";
import Header from "../../../../components/header/header";
import "./bot-list.scss";
import {Link} from 'react-router-dom';

export default class BotList extends React.Component {
  render() {
    return (
      <div>
        <Header icon="robot" title="Chatbots" />
        <div className="header-config">
          <div className="actions-left">
            <bds-button>Criar chatbot</bds-button>
            <bds-input icon="search" placeholder="procurar.."></bds-input>
          </div>
        </div>
        <div className="cards">
          <Link to="bot-detail">
            <Card />
          </Link>
          <Link to="/main/chatbot/bot-detail">
            <Card />
          </Link>
          <Link to="/main/chatbot/bot-detail">
            <Card />
          </Link>
          <Link to="/main/chatbot/bot-detail">
            <Card />
          </Link>
          <Link to="/main/chatbot/bot-detail">
            <Card />
          </Link>
          <Link to="/main/chatbot/bot-detail">
            <Card />
          </Link>
        </div>
      </div>
    );
  }
}
