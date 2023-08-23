import React from "react";
import {
  BdsGrid,
  BdsIllustration,
  BdsTypo,
  BdsButton,
} from "blip-ds/dist/blip-ds-react/components";
import "./styles.scss";

export default function AuthenticationError() {
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
          <BdsIllustration type="spots" name="lock-2"></BdsIllustration>
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
              Acesso não Permitido
            </BdsTypo>
            <BdsTypo>
              Sua conta, <strong>email@email.com</strong>, não está autorizada a visualizar essa
              página. Você pode solicitar acesso à pessoa responsável pelo
              contrato do Blip.
            </BdsTypo>
          </BdsGrid>
          <BdsGrid className="btnArea" direction="column" gap="2">
            <BdsButton>Voltar</BdsButton>
            <BdsTypo>Entenda os níveis de acesso</BdsTypo>
          </BdsGrid>
        </BdsGrid>
      </BdsGrid>
    </BdsGrid>
  );
}
