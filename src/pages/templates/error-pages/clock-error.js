import React from "react";
import {
  BdsGrid,
  BdsIllustration,
  BdsTypo,
  BdsButton,
} from "blip-ds/dist/blip-ds-react/components";
import './styles.scss';

export default function ClockError() {
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
          <BdsIllustration type="spots" name="clock-2"></BdsIllustration>
        </BdsGrid>
        <BdsGrid className="textArea" xxs="12" xs="6" direction="column" gap="8">
          <BdsGrid direction="column" gap="2">
            <BdsTypo variant="fs-40" margin={false} bold="bold">
            O horário do seu computador está desconfigurado
            </BdsTypo>
            <BdsTypo>
            Ajuste o relógio do seu sistema operacional e tente novamente.
            </BdsTypo>
          </BdsGrid>
          <BdsGrid className="btnArea" direction="column" gap="2">
          <BdsButton>Recarregar a página</BdsButton>
          <BdsTypo>Saiba como ajustar o horário no Windows</BdsTypo>
              <BdsTypo>Saiba como ajustar o horário no Macbook</BdsTypo>
          </BdsGrid>
        </BdsGrid>
      </BdsGrid>
    </BdsGrid>
  );
}