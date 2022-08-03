import React from "react";
import "./header.scss";

function Header(props) {
  return (
    <div className="header">
      <div className="header-title">
          <bds-icon size="x-large" name={props.icon}></bds-icon>
          <bds-typo variant="fs-24" bold="bold" margin="false">{props.title}</bds-typo>
      </div>
      <div className="header-config"></div>
    </div>
  );
}

export default Header;
