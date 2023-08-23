import React from "react";
import {
  BdsGrid,
  BdsIllustration,
  BdsTypo,
  BdsButton,
} from "blip-ds/dist/blip-ds-react/components";
import './styles.scss';

export default function DefaultError() {
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
          <BdsIllustration type="default" name="atention"></BdsIllustration>
        </BdsGrid>
        <BdsGrid className="textArea" xxs="12" xs="6" direction="column" gap="8">
          <BdsGrid direction="column" gap="2">
            <BdsTypo variant="fs-40" margin={false} bold="bold">
              Algo deu errado
            </BdsTypo>
            <BdsTypo>
              Não conseguimos exibir essa página no momento. Por favor, tente
              novamente.
            </BdsTypo>
          </BdsGrid>
          <BdsGrid className="btnArea" direction="column" gap="2">
            <BdsButton>Recarregar a página</BdsButton>
            <BdsTypo>Confira a disponibilidade da plataforma </BdsTypo>
          </BdsGrid>
        </BdsGrid>
      </BdsGrid>
    </BdsGrid>
  );
}
