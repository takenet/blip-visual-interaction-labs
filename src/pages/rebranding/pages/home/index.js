import React from "react";
import "./styles.scss";

export function Home() {
  return (
    <bds-grid class="rebranding theme-dark" xxs="12" direction="column">
      {/* Header */}
      <bds-grid padding="3" class="header">
        <bds-grid xxs="4" gap="3" align-items="center">
          <bds-select>
            <bds-select-option value="1">Millie Bobby</bds-select-option>
            <bds-select-option value="2">Finn Wolfhard</bds-select-option>
            <bds-select-option value="3">David Harbour</bds-select-option>
            <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
            <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
            <bds-select-option value="6">Noah Schnapp</bds-select-option>
          </bds-select>
          <bds-typo>Home</bds-typo>
          <bds-typo>Templates</bds-typo>
        </bds-grid>
        <bds-grid xxs="auto">
          <bds-grid xxs="3" xxs-offset="2">
            <bds-illustration
              type="brand"
              name="blip-ballon-blue-white-horizontal"
            ></bds-illustration>
          </bds-grid>
        </bds-grid>
        <bds-grid xxs="3" align-items="center" justify-content="flex-end">
          <bds-button-icon
            icon="bell"
            variant="secondary"
            size="small"
          ></bds-button-icon>
          <bds-grid align-items="center" gap="2">
            <bds-avatar size="small" name="Nome Usuario"></bds-avatar>
            <bds-typo variant="fs-16" bold="bold">
              Nome usuário
            </bds-typo>
          </bds-grid>
        </bds-grid>
      </bds-grid>

      {/* Navbar */}
      <bds-grid padding="x-3" xxs="12" class="header-navbar">
        <bds-grid xxs="3" align-items="center" gap="1">
          <bds-avatar size="small" name="Nome Bot"></bds-avatar>
          <bds-typo>Bot Name</bds-typo>
          <bds-button-icon
            icon="arrow-down"
            variant="secondary"
            size="small"
          ></bds-button-icon>
        </bds-grid>
        <bds-grid xxs="6" align-items="flex-end">
          <bds-tabs>
            <bds-tab group="tab1" label="Atendimento"></bds-tab>
            <bds-tab group="tab2" label="Builder"></bds-tab>
            <bds-tab group="tab3" label="Canais"></bds-tab>
            <bds-tab group="tab4" label="Análise"></bds-tab>
          </bds-tabs>
        </bds-grid>
        <bds-grid
          xxs="3"
          gap="3"
          align-items="center"
          justify-content="flex-end"
        >
          <bds-icon size="small" name="integration"></bds-icon>
          <bds-icon size="small" name="settings-general"></bds-icon>
          <bds-icon size="small" name="team"></bds-icon>
          <bds-icon size="small" name="builder-test-bot"></bds-icon>
        </bds-grid>
      </bds-grid>

      {/* Body */}
      
        <bds-tab-panel group="tab1" class="tab-panel theme-light">
          <bds-grid
        xxs="12"
        margin="auto"
        height="100%"
        class="rebrading-body"
        container
        align-items="center"
      >
          <bds-grid xxs="12" direction="column" gap="2">
            <bds-grid>
              <bds-avatar name="Lu Toys"></bds-avatar>
              <bds-grid direction="column">
                <bds-input-editable value="Lu Toys'n'Games"></bds-input-editable>
                <bds-typo>id: botlutoysngames</bds-typo>
              </bds-grid>
            </bds-grid>
            <bds-grid xxs="12">
              <bds-grid xxs="6">
                <bds-paper height="354px" width="100%">
                  <bds-grid padding="2">
                    <bds-typo variant="fs-20" bold="bold">
                      Primeiros Passos
                    </bds-typo>
                  </bds-grid>
                </bds-paper>
              </bds-grid>
              <bds-grid
                xxs="6"
                direction="column"
                gap="2"
                justify-content="center"
              >
                <bds-grid height="50%" gap="2" padding="none">
                  <bds-paper width="50%">
                    <bds-grid padding="2">
                      <bds-typo variant="fs-20" bold="bold">
                        Canais
                      </bds-typo>
                    </bds-grid>
                  </bds-paper>
                  <bds-paper width="50%">
                    <bds-grid padding="2">
                      <bds-typo variant="fs-20" bold="bold">
                        Equipe
                      </bds-typo>
                    </bds-grid>
                  </bds-paper>
                </bds-grid>
                <bds-paper width="100%" height="50%">
                  <bds-grid padding="2">
                    <bds-typo variant="fs-20" bold="bold">
                      Prefrerências
                    </bds-typo>
                  </bds-grid>
                </bds-paper>
              </bds-grid>
            </bds-grid>
          </bds-grid>
          </bds-grid>
        </bds-tab-panel>

        <bds-tab-panel group="tab2" class="tab-panel theme-dark">
        <bds-grid
        xxs="12"
        margin="auto"
        height="100%"
        class="rebrading-body "
        container
        align-items="center"
      >
          <bds-grid xxs="12" direction="column" gap="2">
            <bds-grid>
              <bds-avatar name="Lu Toys"></bds-avatar>
              <bds-grid direction="column">
                <bds-input-editable value="Lu Toys'n'Games"></bds-input-editable>
                <bds-typo>id: botlutoysngames</bds-typo>
              </bds-grid>
            </bds-grid>
            <bds-grid xxs="12">
              <bds-grid xxs="6">
                <bds-paper height="354px" width="100%">
                  <bds-grid padding="2">
                    <bds-typo variant="fs-20" bold="bold">
                      Primeiros Passos
                    </bds-typo>
                  </bds-grid>
                </bds-paper>
              </bds-grid>
              <bds-grid
                xxs="6"
                direction="column"
                gap="2"
                justify-content="center"
              >
                <bds-grid height="50%" gap="2" padding="none">
                  <bds-paper width="50%">
                    <bds-grid padding="2">
                      <bds-typo variant="fs-20" bold="bold">
                        Canais
                      </bds-typo>
                    </bds-grid>
                  </bds-paper>
                  <bds-paper width="50%">
                    <bds-grid padding="2">
                      <bds-typo variant="fs-20" bold="bold">
                        Equipe
                      </bds-typo>
                    </bds-grid>
                  </bds-paper>
                </bds-grid>
                <bds-paper width="100%" height="50%">
                  <bds-grid padding="2">
                    <bds-typo variant="fs-20" bold="bold">
                      Prefrerências
                    </bds-typo>
                  </bds-grid>
                </bds-paper>
              </bds-grid>
            </bds-grid>
          </bds-grid>
          </bds-grid>
        </bds-tab-panel>


      </bds-grid>
  );
}
