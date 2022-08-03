import React from "react";
import "./sidebar.scss";
import {Link} from 'react-router-dom';
import Logo from '../../assets/blip_logo--blue.svg';

function Sidebar() {
  return (
    <div>
      <div className="sidebar-container">
          <div className="sidebar-content">
            <div className="sidebar-logo">
            <img src={Logo} alt="logo take blip"/>
          </div>
          <div className="sidebar-user sidebar-item">
            <div className="user-name">
              <bds-avatar size="small" name="Rafaella Soares Santos Ribeiro Lima" thumbnail="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"></bds-avatar>
              <bds-typo class="hidden item-primary" variant="fs-14" bold="bold">Rafaella Soares Santos Ribeiro Lima</bds-typo>
              <bds-icon class="hidden" size="x-small" name="settings-general"></bds-icon>
            </div>
            <div className="config-user">
              <bds-typo class="hidden" variant="fs-10" bold="regular">Configuração da conta</bds-typo>
            </div>
          </div>
          <Link to="/main/" className="sidebar-item">
            <bds-icon name="robot"></bds-icon>
            <bds-typo class="hidden item-primary" variant="fs-14" bold="regular">Chatbots</bds-typo>
            <bds-typo no-wrap="true" class="hidden" variant="fs-10" bold="regular">Portal</bds-typo>
          </Link>
          <Link to="/main/test" className="sidebar-item">
            <bds-icon name="agent"></bds-icon>
            <bds-typo class="hidden item-primary" variant="fs-14" bold="regular">Atendimento</bds-typo>
            <bds-typo no-wrap="true" class="hidden" variant="fs-10" bold="regular">Desk</bds-typo>
          </Link>
          <div className="sidebar-item">
            <bds-icon name="business"></bds-icon>
            <bds-typo no-wrap="true" class="hidden item-primary" variant="fs-14" bold="regular">Contratos</bds-typo>
          </div>
          <div className="sidebar-item">
            <bds-icon name="bell"></bds-icon>
            <bds-typo no-wrap="true" class="hidden item-primary" variant="fs-14" bold="regular">Notificações</bds-typo>
          </div>
          <div className="sidebar-item">
            <bds-icon name="question"></bds-icon>
            <bds-typo no-wrap="true" class="hidden item-primary" variant="fs-14" bold="regular">Help Center</bds-typo>
          </div>
          </div>
          <div className="sidebar-item">
            <bds-icon size="medium" class="logout" name="status"></bds-icon>
            <bds-typo no-wrap="true" class="hidden item-primary" variant="fs-14" bold="regular">Sair do sistema</bds-typo>
          </div>
        </div>
        <div className="back-area"></div>
    </div>
        
  );
}

export default Sidebar;