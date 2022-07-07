import React from "react";
import "./card.scss";

function Card() {
  return (
    <div className="card">
      <bds-paper className="card">
        <bds-avatar></bds-avatar>
        <bds-typo bold="bold">Titulo do card</bds-typo>
        <bds-typo variant="fs-14">subtitulo do card</bds-typo>
      </bds-paper>
    </div>
  );
}

export default Card;