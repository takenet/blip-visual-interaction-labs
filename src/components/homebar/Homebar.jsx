import React from "react";
import { Link } from "react-router-dom";
import "./Homebar.scss";

function Homebar() {
  return (
    <bds-grid
      xxs="12"
      padding="2"
      direction="row"
      justify-content="space-between"
    >
      <bds-grid>
        <bds-illustration name="sherlock" type="blip-solid"></bds-illustration>
      </bds-grid>
      <bds-grid align-items="center">
        <Link to="/">
          <bds-grid align-items="center" gap="1">
            <bds-icon size="medium" name="home"></bds-icon>
            <bds-typo
              variant="fs-16"
              bold="bold"
              margin="false"
              line-height="none"
            >
              Homepage
            </bds-typo>
          </bds-grid>
        </Link>
      </bds-grid>
    </bds-grid>
  );
}

export default Homebar;
