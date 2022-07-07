import React from "react";
import "./login.scss";
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import logo from "../../assets/take_blip-logo.svg";

function enterBlip() {

}

class Login extends React.Component {
  render() {
    return (
      <main className="login">
        <section className="body">
          <div className="logo">
            <img src={logo} alt="logo take blip" />
          </div>
          <bds-typo tag="h1" variant="fs-40" bold="bold">
            Boa tarde :)
          </bds-typo>
          <bds-typo tag="h4" variant="fs-16">
            Para começar, faça o login na sua conta:
          </bds-typo>
          <bds-button icon="google" type-icon="logo" variant="tertiary">
            Login com Google
          </bds-button>
          <bds-typo>ou</bds-typo>
          <div className="inputs">
            <bds-input label="E-mail *"></bds-input>
            <bds-input label="Senha *"></bds-input>
          </div>
          <Link to="/" className="forgot-password">
            <bds-typo variant="fs-14" bold="bold">Esqueceu sua senha?</bds-typo>
          </Link>
          <div className="actions">
            <bds-button variant="tertiary">Cadastra-se grátis</bds-button>
            <Link to="/homepage">
              <bds-button>Entrar</bds-button>
            </Link>
            
          </div>
        </section>
        <aside className="aside"></aside>
      </main>
    );
  }
}

export default Login;
