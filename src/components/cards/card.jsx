import React from "react";
import "./card.scss";
import avatar from '../../assets/blip_logo--light.svg';

function Card() {
  return (
    <div className="card">
      <bds-paper class="card">
        <div className="card-header">
          <div className="status"></div>
          <bds-icon name="more-options-vertical"></bds-icon>
        </div>
        <div className="card-content">
          <bds-avatar thumbnail={avatar} name="Titulo do card"></bds-avatar>
          <bds-typo bold="bold">Titulo do card</bds-typo>
        </div>
        <div className="card-footer">
          <div className="icons-footer">
            <bds-icon type="logo" name="whatsapp"></bds-icon>
            <bds-icon type="logo" name="messenger"></bds-icon>
            <bds-icon type="logo" name="telegram"></bds-icon>
          </div>
          <div className="router-footer">
            <bds-typo variant="fs-12" bold="bold">9</bds-typo>
            <bds-icon name="builder-router"></bds-icon>
          </div>
        </div>
      </bds-paper>
    </div>
  );
}

export default Card;
