import React from "react";
import {
  BdsGrid,
  BdsIllustration,
  BdsTypo,
  BdsButton,
} from "blip-ds/dist/blip-ds-react/components";
import "./styles.scss";

export default function PageNotFoundError() {
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
          <BdsIllustration type="default" name="search-2"></BdsIllustration>
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
              Página não encontrada
            </BdsTypo>
            <BdsTypo>
              A página que você procura não foi encontrada. Verifique se o
              endereço está correto ou volte para a página principal do Blip.
            </BdsTypo>
          </BdsGrid>
          <BdsGrid className="btnArea" direction="column" gap="2">
            <BdsButton>Ir para a página principal</BdsButton>
          </BdsGrid>
        </BdsGrid>
      </BdsGrid>
    </BdsGrid>
  );
}
