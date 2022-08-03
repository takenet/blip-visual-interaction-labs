import React from "react";
import Header from "../../components/header/header";
import "./style.scss";

class Test extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="div-test">
          <bds-select value="3">
          <bds-select-option value="1">Millie Bobby</bds-select-option>
          <bds-select-option value="2">Finn Wolfhard</bds-select-option>
          <bds-select-option value="3">David Harbour</bds-select-option>
          <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
          <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
          <bds-select-option value="6">Noah Schnapp</bds-select-option>
        </bds-select>
        <bds-select-chips new-prefix="Create: " chips='["Millie Bobby"]'>
          <bds-select-option value="1">Millie Bobby</bds-select-option>
          <bds-select-option value="2">Finn Wolfhard</bds-select-option>
          <bds-select-option value="3">David Harbour</bds-select-option>
          <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
          <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
          <bds-select-option value="6">Noah Schnapp</bds-select-option>
        </bds-select-chips>
        <bds-input
          placeholder="nome completo"
          label=""
          disabled={false}
          danger={false}
          icon=""
          value="nome teste"
          type=""
          error-message=""
          helper-message=""
          min={null}
          minlength={null}
          max={null}
          maxlength={null}
          readonly={false}
        ></bds-input>
        </div>
        
      </div>
    );
  }
}

export default Test;
