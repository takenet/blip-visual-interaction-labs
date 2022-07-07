import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/blip_logo--light.svg";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  return (
    <div className="header">
      <div className="links">
        <bds-select></bds-select>
        <Link to="/">Home</Link>
        <Link to="/">Templates</Link>
      </div>
      <div className="logo">
        <img src={logo} alt="logo da take blip" />
      </div>
      <div className="actions">
        <bds-icon id="notification" name="bell"onClick={() => setOpenNotification(!openNotification)}></bds-icon>
        <bds-menu
            id="menu01"
            menu="notification"
            open={openNotification}
            position="bottom"
          >
            <bds-menu-exibition
              value="Você não possui nenhuma notificação"
            ></bds-menu-exibition>
          </bds-menu>
        <div className="user">
          <bds-avatar size="small"></bds-avatar>
          <bds-typo>Willian Lomeu Machado</bds-typo>
          <bds-icon
            name="arrow-down"
            id="menuList"
            onClick={() => setOpenMenu(!openMenu)}
          ></bds-icon>
          <bds-menu
            id="menu01"
            menu="menuList"
            open={openMenu}
            position="bottom"
          >
            <bds-menu-exibition
              avatar-name="Willian Lomeu Machado"
              avatar-thumbnail=""
              avatar-size="small"
              subtitle="willian.lomeu@take.net"
              value="Willian Lomeu Machado"
            ></bds-menu-exibition>
            <bds-menu-action button-text="Minha conta"></bds-menu-action>
            <bds-menu-action button-text="Minhas preferências"></bds-menu-action>
            <bds-menu-separation size="default"></bds-menu-separation>
            <bds-menu-action button-text="Help Center"></bds-menu-action>
            <bds-menu-action button-text="Blip Academy"></bds-menu-action>
            <bds-menu-action button-text="Blip Ideas"></bds-menu-action>
            <bds-menu-action button-text="Fórum"></bds-menu-action>
            <bds-menu-separation size="default"></bds-menu-separation>
            <bds-menu-action button-text="Sair" lipstick></bds-menu-action>
          </bds-menu>
        </div>
      </div>
    </div>
  );
}

export default Header;
