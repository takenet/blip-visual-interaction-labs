import React from "react";
import "./home.scss";
import Header from "../../components/header/header";
import Card from "../../components/cards/card";
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />
        <div className="subheader">
          <div className="name">
            <bds-typo bold="bold" variant="fs-20" margin="false" no-wrap="true">
              Espaço de trabalho de Willian Lomeu Machado
            </bds-typo>
          </div>
          <div className="actions">
            <bds-input icon="search"></bds-input>
            <Link to="/test"><bds-button icon="file-new">Criar roteador</bds-button></Link>
            <bds-button icon="file-new" variant="tertiary">
              Criar chatbot
            </bds-button>
          </div>
        </div>
        <main className="container">
          <div className="actions-box">
            <bds-button>Mover chatbots</bds-button>
          </div>
          <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </main>
      </div>
    );
  }
}
