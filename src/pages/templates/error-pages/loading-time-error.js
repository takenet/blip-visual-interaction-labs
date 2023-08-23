import React from "react";
import {
  BdsGrid,
  BdsIllustration,
  BdsTypo,
  BdsButton,
} from "blip-ds/dist/blip-ds-react/components";
import "./styles.scss";

export default function LoadingTimeError() {
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
          <BdsIllustration type="default" name="time"></BdsIllustration>
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
              Está demorando mais do que o esperado
            </BdsTypo>
            <BdsTypo>
              Um erro impediu que essa página fosse carregada. Por favor,
              recarregue a página e tente novamente.
            </BdsTypo>
          </BdsGrid>
          <BdsGrid className="btnArea" direction="column" gap="2">
            <BdsButton>Recarregar a página</BdsButton>
          </BdsGrid>
        </BdsGrid>
      </BdsGrid>
    </BdsGrid>
  );
}
