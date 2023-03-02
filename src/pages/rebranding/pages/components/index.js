import React, { useState } from "react";
import "./styles.scss";

export function Components() {
  const [themeSelected, setThemeSelected] = useState('white');
  const r = document.querySelector(':root');
  const toggleComponent = (id) => {
    const elementToClose = document.getElementById(id);
    elementToClose.open = !elementToClose.open;
  }
  const toggleSidebar = (id) => {
    const elementToClose = document.getElementById(id);
    elementToClose.isOpen = !elementToClose.isOpen;
  }
  const changeColor = () => {
    if (themeSelected === 'white') {
      r.style.setProperty('--color-brand', '#0096FA');
      r.style.setProperty('--color-primary', '#1E6BF1');
      r.style.setProperty('--color-secondary', '#0096FA');
      r.style.setProperty('--color-surface-1', '#292929');
      r.style.setProperty('--color-surface-2', '#1f1f1f');
      r.style.setProperty('--color-surface-3', '#141414');
      r.style.setProperty('--color-surface-4', '#0A0A0A');
      r.style.setProperty('--color-content-default', '#ffffff');
      r.style.setProperty('--color-content-disable', '#a3a3a3');
      r.style.setProperty('--color-content-ghost', '#666666');
      r.style.setProperty('--color-info', '#FFFFFF');
      r.style.setProperty('--color-system', '#99d5fd');
      r.style.setProperty('--color-focus', '#c525ff');
      r.style.setProperty('--color-success', '#84EBBC');
      r.style.setProperty('--color-warning', '#FDE99B');
      r.style.setProperty('--color-error', '#F67979');
      r.style.setProperty('--color-delete', '#E60F0F');
      setThemeSelected('dark');
    } else if (themeSelected === 'dark') {
      r.style.setProperty('--color-brand', '#0096fa');
      r.style.setProperty('--color-primary', '#1968f0');
      r.style.setProperty('--color-secondary', '#1f1f1f');
      r.style.setProperty('--color-surface-1', '#ffffff');
      r.style.setProperty('--color-surface-2', '#f3f6fa');
      r.style.setProperty('--color-surface-3', '#e7edf4');
      r.style.setProperty('--color-surface-4', '#202c44');
      r.style.setProperty('--color-content-default', '#292929');
      r.style.setProperty('--color-content-disable', '#666666');
      r.style.setProperty('--color-content-ghost', '#a3a3a3');
      r.style.setProperty('--color-info', '#c5d9fb');
      r.style.setProperty('--color-system', '#99d5fd');
      r.style.setProperty('--color-focus', '#c226fb');
      r.style.setProperty('--color-success', '#84ebbc');
      r.style.setProperty('--color-warning', '#fde99b');
      r.style.setProperty('--color-error', '#f67979');
      r.style.setProperty('--color-delete', '#e60f0f');
      setThemeSelected('white');
    }
  }
  return (
    <div class="page">
      <bds-button class="bt-theme" onClick={() => changeColor()}> Change theme </bds-button>
      <bds-grid class="content" container direction="column">
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2" direction="column">
          <bds-accordion>
            <bds-accordion-header accordion-title="Title accordion" icon="" avatar-name="" avatar-thumb="">
            </bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16"> Lorem ipsum dolor sit amet... </bds-typo>
            </bds-accordion-body>
          </bds-accordion>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2">
          <bds-button onClick={() => toggleComponent('system')} variant="primary">Alert system</bds-button>
          <bds-button onClick={() => toggleComponent('error')} variant="primary">Alert error</bds-button>
          <bds-button onClick={() => toggleComponent('warning')} variant="primary">Alert warning</bds-button>
          <bds-button onClick={() => toggleComponent('delete')} variant="primary">Alert delete</bds-button>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2">
          <bds-autocomplete>
            <bds-select-option value="1">Millie Bobby</bds-select-option>
            <bds-select-option value="2">Finn Wolfhard</bds-select-option>
            <bds-select-option value="3">David Harbour</bds-select-option>
            <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
            <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
            <bds-select-option value="6">Noah Schnapp</bds-select-option>
          </bds-autocomplete>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2">
          <bds-avatar name="Michael Scott" size="standard" upload="false"> </bds-avatar>
          <bds-avatar name="Michael Scott" size="standard" upload="false"> </bds-avatar>
          <bds-avatar name="Michael Scott" size="standard" upload="false"> </bds-avatar>
          <bds-avatar name="Michael Scott" size="standard" upload="true"> </bds-avatar>
          <bds-avatar size="standard" upload="true"> </bds-avatar>
          <bds-avatar name="Michael Scott" size="standard" upload="true"> </bds-avatar>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2" direction="column">
          <bds-banner variant="system"> Instabilidade na plataforma? Não se preocupe, já estamos resolvendo! </bds-banner>
          <bds-banner variant="warning">
            Todos as informações aqui são sigilosas. Tenha cuidado, não divulgue está tela!
          </bds-banner>
          <bds-banner variant="info">
            Sua empresa precisa realizar a migração dos bots para o novo contrato até 01/03!
          </bds-banner>
          <bds-banner variant="error"> Ops, ocorreu um erro! O servidor está fora do ar. </bds-banner>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2">
          <bds-button variant="primary">Button primary</bds-button>
          <bds-button variant="secondary">Button secondary</bds-button>
          <bds-button variant="tertiary">Button tertiary</bds-button>
          <bds-button variant="ghost">Button ghost</bds-button>
          <bds-button variant="delete">Button delete</bds-button>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2">
          <bds-chip-tag color="default">default</bds-chip-tag>
          <bds-chip-tag color="info">info</bds-chip-tag>
          <bds-chip-tag color="success">success</bds-chip-tag>
          <bds-chip-tag color="warning">warning</bds-chip-tag>
          <bds-chip-tag color="danger">danger</bds-chip-tag>
          <bds-chip-tag color="outline">outline</bds-chip-tag>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2">
          <bds-chip-clickable color="default">default</bds-chip-clickable>
          <bds-chip-clickable color="info">info</bds-chip-clickable>
          <bds-chip-clickable color="success">success</bds-chip-clickable>
          <bds-chip-clickable color="warning">warning</bds-chip-clickable>
          <bds-chip-clickable color="danger">danger</bds-chip-clickable>
          <bds-chip-clickable color="outline">outline</bds-chip-clickable>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2">
          <bds-chip-selected color="default">chip default</bds-chip-selected>
          <bds-chip-selected color="info">chip info</bds-chip-selected>
          <bds-chip-selected color="success">chip success</bds-chip-selected>
          <bds-chip-selected color="warning">chip warning</bds-chip-selected>
          <bds-chip-selected color="danger">chip danger</bds-chip-selected>
          <bds-chip-selected color="outline">chip outline</bds-chip-selected>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2">
          <bds-checkbox id="check1" checked></bds-checkbox>
          <bds-checkbox id="check2"></bds-checkbox>
          <bds-checkbox id="check1" checked disabled></bds-checkbox>
          <bds-checkbox id="check2" disabled></bds-checkbox>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2">
          <bds-datepicker
            type-of-date="period"
            start-date-limit="01/01/2023"
            end-date-limit="31/12/2023"
          ></bds-datepicker>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2" direction="column">
          <bds-input maxlength="30" counter-length></bds-input>
          <bds-input maxlength="30" counter-length icon="email"></bds-input>
          <bds-input maxlength="30" counter-length label="Name"></bds-input>
          <bds-input maxlength="30" counter-length icon="email" label="Name"></bds-input>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2" direction="column">
          <bds-input-chips type="email"></bds-input-chips>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2">
          <bds-input-editable value="Storybook"></bds-input-editable>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2" direction="column">
          <bds-input-password label="Senha" value="designsystem"></bds-input-password>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2">
          <bds-input-phone-number label="Phone number"></bds-input-phone-number>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2">
          <bds-list type-list="radio">
            <bds-list-item value="01" text="Text"></bds-list-item>
            <bds-list-item value="02" text="Text" secondary-text="Secondary Text"></bds-list-item>
            <bds-list-item value="03" text="Text" secondary-text="Secondary Text" icon="blip-ideas"></bds-list-item>
            <bds-list-item
              value="04"
              text="Text"
              secondary-text="Secondary Text"
              avatar-name="Alvare Horta"
            ></bds-list-item>
          </bds-list>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2" direction="column">
          <bds-loading-bar size="small" text="Texto para aplicar no componente" percent="48"> </bds-loading-bar>
          <bds-loading-bar size="default" text="Texto para aplicar no componente" percent="48"> </bds-loading-bar>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2">
          <bds-loading-spinner size="extra-small" color="main"></bds-loading-spinner>
          <bds-loading-spinner size="small" color="main"></bds-loading-spinner>
          <bds-loading-spinner size="standard" color="main"></bds-loading-spinner>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2">
          <bds-button onClick={() => toggleComponent('modal')} variant="primary">Open Modal</bds-button>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2">
          <bds-button id="menuList" onClick={() => toggleComponent('menu')} variant="primary">Open Menu</bds-button>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2">
          <bds-radio-group>
            <bds-radio value="radio1" label="Radio 1"></bds-radio>
            <bds-radio value="radio2" label="Radio 2"></bds-radio>
            <bds-radio value="radio3" label="Radio 3"></bds-radio>
          </bds-radio-group>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2">
          <bds-pagination pages="30"></bds-pagination>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2" direction="column">
          <bds-select>
            <bds-select-option value="1">Millie Bobby</bds-select-option>
            <bds-select-option value="2">Finn Wolfhard</bds-select-option>
            <bds-select-option value="3">David Harbour</bds-select-option>
            <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
            <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
            <bds-select-option value="6">Noah Schnapp</bds-select-option>
          </bds-select>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2" direction="column">
          <bds-select-chips new-prefix="Create: ">
            <bds-select-option value="1">Millie Bobby</bds-select-option>
            <bds-select-option value="2">Finn Wolfhard</bds-select-option>
            <bds-select-option value="3">David Harbour</bds-select-option>
            <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
            <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
            <bds-select-option value="6">Noah Schnapp</bds-select-option>
          </bds-select-chips>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2">
          <bds-button onClick={() => toggleSidebar('sidebar')} variant="primary">Open Sidebar</bds-button>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2">
          <bds-stepper>
            <bds-step active="true">Step one 1</bds-step>
            <bds-step>Step two 2</bds-step>
            <bds-step>Step three 3</bds-step>
          </bds-stepper>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2">
          <bds-switch name="string" disabled="false" checked="true"></bds-switch>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2" direction="column">
          <bds-tabs>
            <bds-tab group="tab1" label="12"></bds-tab>
            <bds-tab group="tab2" label="Advanced settings"></bds-tab>
            <bds-tab group="tab3" label="Very advanced settings"></bds-tab>
          </bds-tabs>
          <bds-tab-panel group="tab1" class="text-content">Basic settings</bds-tab-panel>
          <bds-tab-panel group="tab2" class="text-content">Advanced settings</bds-tab-panel>
          <bds-tab-panel group="tab3" class="text-content">Very advanced settings</bds-tab-panel>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2" direction="column">
          <bds-tooltip position="left-center" tooltip-text="tooltip">
            <bds-button>Hover me</bds-button>
          </bds-tooltip>
          <bds-tooltip position="left-center" tooltip-text="tooltip">
            <bds-icon name="user-default" class="text-content">Hover me</bds-icon>
          </bds-tooltip>
        </bds-grid>
        <bds-grid justify-content="center" xxs="12" padding="3" gap="2" direction="column">
          <bds-upload title-name="Title uploader" subtitle="Description uploades, only one file"> </bds-upload>
        </bds-grid>
      </bds-grid>

      
      <bds-alert id="system">
        <bds-alert-header variant="system" icon="info"> Atenção! </bds-alert-header>
        <bds-alert-body class="text-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corporis eligendi cumque ratione nulla a quos
          error!
        </bds-alert-body>
        <bds-alert-actions>
          <bds-button variant="secondary" bold="true">Cancelar</bds-button>
          <bds-button onClick={() => toggleComponent('system')} variant="secondary" bold="true">Confirmar</bds-button>
        </bds-alert-actions>
      </bds-alert>
      <bds-alert id="error">
        <bds-alert-header variant="error" icon="error"> Atenção! </bds-alert-header>
        <bds-alert-body class="text-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corporis eligendi cumque ratione nulla a quos
          error!
        </bds-alert-body>
        <bds-alert-actions>
          <bds-button variant="secondary" bold="true">Cancelar</bds-button>
          <bds-button onClick={() => toggleComponent('error')} variant="secondary" bold="true">Confirmar</bds-button>
        </bds-alert-actions>
      </bds-alert>
      <bds-alert id="warning">
        <bds-alert-header variant="warning" icon="warning"> Atenção! </bds-alert-header>
        <bds-alert-body class="text-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corporis eligendi cumque ratione nulla a quos
          error!
        </bds-alert-body>
        <bds-alert-actions>
          <bds-button variant="secondary" bold="true">Cancelar</bds-button>
          <bds-button onClick={() => toggleComponent('warning')} variant="secondary" bold="true">Confirmar</bds-button>
        </bds-alert-actions>
      </bds-alert>
      <bds-alert id="delete">
        <bds-alert-header variant="delete" icon="trash"> Atenção! </bds-alert-header>
        <bds-alert-body class="text-content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corporis eligendi cumque ratione nulla a quos
          error!
        </bds-alert-body>
        <bds-alert-actions>
          <bds-button variant="secondary" bold="true">Cancelar</bds-button>
          <bds-button onClick={() => toggleComponent('delete')} variant="secondary" bold="true">Confirmar</bds-button>
        </bds-alert-actions>
      </bds-alert>
      <bds-modal id="modal" close-button="true">
        <div>
          <div>
            <bds-typo class="text-content" variant="fs-20" bold="semi-bold">
              O que é o Histórico de tickets?
            </bds-typo>
            <bds-typo class="text-content" variant="fs-14" bold="regular">
              É o local onde você pode acessar todo o histórico dos tickets abertos. Além disso, é possível salvar os
              dados de atendimento em planilhas de acordo com os filtros escolhidos. Você também consegue exportar
              documentos em PDF com a transcrição completa de cada conversa.
            </bds-typo>
          </div>
        </div>
        <bds-modal-action>
          <bds-button icon="video" variant="secondary">Tutorial</bds-button>
          <bds-button>Ok, entendi</bds-button>
        </bds-modal-action>
      </bds-modal>
      <bds-menu id="menu" menu="menuList" position="right">
        <bds-menu-action button-text="texto" sub-menu="true" iconleft="edit" lipstick="false">
          <bds-menu-action button-text="texto 1" sub-menu="false"></bds-menu-action>
          <bds-menu-action button-text="texto 2" sub-menu="false" icon-left="edit"></bds-menu-action>
          <bds-menu-action button-text="texto 3" sub-menu="false" icon-left="close" lipstick="true"></bds-menu-action>
        </bds-menu-action>
        <bds-menu-separation size="default" value="Divisor"> </bds-menu-separation>
        <bds-menu-exibition avatar-name="Michael Scott" avatar-size="standard" value="Michael Scott" subtitle="Manager">
        </bds-menu-exibition>
        <bds-menu-exibition avatar-name="Dwight Schrute" avatar-size="small" value="Dwight Schrute" subtitle="co-Manager">
        </bds-menu-exibition>
        <bds-menu-exibition avatarName="Jim Halpert" avatar-size="extra-small" value="Jim Halpert" subtitle="Seller">
        </bds-menu-exibition>
      </bds-menu>
      <bds-sidebar sidebar-position="right">
        <div slot="header">
          <bds-typo class="text-content"> "Insira o seu conteúdo aqui" </bds-typo>
        </div>
        <div slot="body">
          <bds-typo class="text-content"> "Insira o seu conteúdo aqui" </bds-typo>
        </div>
        <div slot="footer">
          <bds-typo class="text-content"> "Insira o seu conteúdo aqui" </bds-typo>
        </div>
      </bds-sidebar>
    </div>
  );
}