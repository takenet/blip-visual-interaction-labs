import React from "react";
import Header from "../../../components/header/header";

const align = {
  display: "flex",
  gap: "32px",
  with: "100%",
  height: "800px",
  justifyContent: "center",
  marginTop: '32px'
};

const data = [
  {
    id: "1",
    title: "convidado",
    description: "Apenas visualiza informações do contrato.",
  },
  {
    id: "2",
    title: "Membro",
    description:
      "Cria e edita chatbots, mas não gerencia os membros do contrato.",
  },
  {
    id: "3",
    title: "Admin",
    description:
      "Edita todos os dados do contrato, gerencia membros, cria e edita chatbots.",
  },
];

class Test extends React.Component {
  renderOptions() {
    console.log(data);
    data.forEach((el) => {
      <bds-select-option value={el.id} title={el.title}>
        {el.description}
      </bds-select-option>;
    });
  }
  render() {
    return (
      <div>
        <Header title="Página de teste" />
        <bds-select
          options='[{"value": "Cat", "label": "Meow"}, {"value": "Dog", "label": "Woof"}]'
          placeholder="selecione"
          label="render permissão"
        ></bds-select>
        {this.renderOptions()}
        <div style={align}>
          <bds-select placeholder="Selecione" label="Permissão">
            <bds-select-option
              value="1"
              slot-align="flex-start"
              title-text="Convidado"
            >
              <bds-icon
                slot="input-left"
                name="eye-open"
                size="medium"
              ></bds-icon>
              Apenas visualiza informações do contrato.
            </bds-select-option>
            <bds-select-option
              value="2"
              slot-align="flex-start"
              title-text="Membro"
            >
              <bds-icon slot="input-left" name="edit" size="medium"></bds-icon>
              Cria e edita chatbots, mas não gerencia os membros do contrato.
            </bds-select-option>
            <bds-select-option
              value="3"
              slot-align="flex-start"
              title-text="Admin"
            >
              <bds-icon
                slot="input-left"
                name="avatar-user"
                size="medium"
              ></bds-icon>
              Edita todos os dados do contrato, gerencia membros, cria e edita
              chatbots.
            </bds-select-option>
          </bds-select>
          <bds-select-chips label="Canais *" error-message="Esse campo é obrigatório" danger="true" new-prefix="Create: ">
            <bds-select-option color="danger" value="1">Millie Bobby</bds-select-option>
            <bds-select-option value="2">Finn Wolfhard</bds-select-option>
            <bds-select-option value="3">David Harbour</bds-select-option>
            <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
            <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
            <bds-select-option value="6">Noah Schnapp</bds-select-option>
          </bds-select-chips>
          <bds-paper elevation="secondary">
          <bds-datepicker
        type-of-date="single"
        start-date-limit="01/01/2022"
        end-date-limit="31/12/2022"
      ></bds-datepicker>
	<bds-tabs>
		<bds-tab group="tab1" label="12"></bds-tab>
        <bds-tab group="tab2" label="Advanced settings"></bds-tab>
        <bds-tab group="tab3" label="Very advanced settings"></bds-tab>
    </bds-tabs>
    <bds-tab-panel group="tab1">
    <bds-datepicker
        type-of-date="single"
        start-date-limit="01/01/2022"
        end-date-limit="31/12/2022"
      ></bds-datepicker>
    </bds-tab-panel>
    <bds-tab-panel group="tab2">Advanced settings</bds-tab-panel>
    <bds-tab-panel group="tab3">Very advanced settings</bds-tab-panel>
</bds-paper>
        </div>
      </div>
    );
  }
}

export default Test;
