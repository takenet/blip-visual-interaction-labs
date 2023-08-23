import React from "react";
import {
  BdsGrid,
  BdsIllustration,
  BdsTypo,
  BdsButton,
} from "blip-ds/dist/blip-ds-react/components";
import "./styles.scss";

export default function OfflineError() {
  return (
    <BdsGrid height="100vh" alignItems="center">
      <BdsGrid
        xxs="12"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        padding="3"
        height="fit-content"
      >
        <BdsGrid xxs="7" xs="6" sm="6" justifyContent="center">
          <BdsIllustration type="default" name="robot-2"></BdsIllustration>
        </BdsGrid>
        <BdsGrid
          className="textArea"
          xxs="12"
          xs="6"
          direction="column"
          gap="8"
        >
          <BdsGrid direction="column" gap="2">
            <BdsTypo variant="fs-40" margin={false} bold="bold">
              Você está offline
            </BdsTypo>
            <BdsGrid direction="column">
               <BdsTypo>
              Uma nova tentativa será feita em <strong>X segundos.</strong>
            </BdsTypo>
            <BdsTypo>
              Verifique sua conexão e tente novamente.
            </BdsTypo> 
            </BdsGrid>
            
          </BdsGrid>
          <BdsGrid className="btnArea" direction="column" gap="2">
            <BdsButton>Recarregar a página</BdsButton>
          </BdsGrid>
        </BdsGrid>
      </BdsGrid>
    </BdsGrid>
  );
}
