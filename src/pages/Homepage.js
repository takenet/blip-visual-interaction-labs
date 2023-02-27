import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Homepage.scss";

function Homepage() {
  const AlturaCard = {
    height: "100%",
  };
  const TemplateTeste = {
    width: "200px",
    height: "200px",
    cursor: "pointer"
  };

  const [openModal, setOpenModal] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 function modal() {
    setOpenModal(true);
    console.log('clicou', openModal);
  }

  // function validation() {
  //   if(email === 'visual' && password === 'visual') {
  //     setDisabled(false);
  //   }
  // }

  React.useEffect(() => {
    const email = document.getElementById('email');
    email.addEventListener('bdsChange', (event) => {
      console.log(event.detail.value);
      setEmail(event.detail.value);
    })
    
    const password = document.getElementById('password');
    password.addEventListener('bdsInputPasswordChange', (event) => {
      console.log(event.detail.value);
      setPassword(event.detail.value);
    })
  },[])

  React.useEffect(() => {
      if(email === 'visual' && password === 'visual') {
            setDisabled(false);
         }
         else {
          setDisabled(true);
         }
  },[email, password])

  return (
    <>
    <bds-grid
    class="homepage"
      xxs="12"
      align-items="center"
      direction="column"
    >
      <bds-grid class="homepage-banner" xxs="12" padding="3" justify-content="flex-start" align-items="center">
        <bds-typo bold="bold" variant="fs-40">
          Visual & Interaction Labs
        </bds-typo>
      </bds-grid>
      <bds-grid
        xxs="12"
        justify-content="center"
        align-items="center"
        gap="4"
        flex-wrap="wrap"
        margin="t-12"
      >
        {/* Card for rebranding */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="/rebranding">
            <bds-paper style={TemplateTeste}>
              <bds-grid
                style={AlturaCard}
                xxs="12"
                align-items="center"
                justify-content="center"
              >
                <bds-typo bold="bold">Rebranding</bds-typo>
              </bds-grid>
            </bds-paper>
          </Link>
        </motion.div>

        {/* Card for blip-ds-test-react */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="/blip-ds-test-react">
            <bds-paper style={TemplateTeste}>
              <bds-grid
                style={AlturaCard}
                xxs="12"
                align-items="center"
                justify-content="center"
              >
                <bds-typo bold="bold">Blip-DS Test React</bds-typo>
              </bds-grid>
            </bds-paper>
          </Link>
        </motion.div>

        {/* Card for Plataform Labs */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <bds-paper style={TemplateTeste} onClick={modal}>
              <bds-grid
                style={AlturaCard}
                xxs="12"
                align-items="center"
                justify-content="center"
              >
                <bds-typo bold="bold">Plataform Labs</bds-typo>
              </bds-grid>
            </bds-paper>
        </motion.div>

        {/* Card for Blip-ds-test-angular */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="/">
            <bds-paper style={TemplateTeste}>
              <bds-grid
                style={AlturaCard}
                xxs="12"
                align-items="center"
                justify-content="center"
              >
                <bds-typo bold="bold">Blip-DS Test Angular</bds-typo>
              </bds-grid>
            </bds-paper>
          </Link>
        </motion.div>
      </bds-grid>
    </bds-grid>
    <bds-modal open={openModal} close-button="false">

    <bds-grid direction="column" gap="2" xxs="6" margin="auto">
      <bds-typo bold="bold" variant="fs-24">Acesso ao portal labs</bds-typo>
      <bds-input type="email" label="E-mail" id="email"></bds-input>
      <bds-input-password label="Password" id="password"></bds-input-password>
    </bds-grid>
    <bds-modal-action>
      <bds-grid xxs="12" justify-content="flex-end">
        <bds-button variant="secondary" onClick={() => setOpenModal(false)}>
        Cancelar
      </bds-button>
      <bds-button disabled={disabled}><Link to="/login-portal">Entrar</Link></bds-button>
      </bds-grid>
      
    </bds-modal-action>
  </bds-modal>
  </>
  );
}

export default Homepage;
