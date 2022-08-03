import React from 'react';
import NavbarItem from './navbar-item/navbar-item';
import './navbar.scss';

function Navbar() {
    return(
        <div className='navbar'>
            <div className='navbar-content'>
                <NavbarItem icon="save-flag" text="Meu plano" />
                <NavbarItem icon="monitoring" text="Painel do contrato" />
                <div className='divisor'></div>
                <NavbarItem icon="message-ballon" text="Criar contato" />
                <NavbarItem icon="folder" text="Criar pasta" />
                <div className='divisor'></div>
                <NavbarItem icon="faq" text="Como criar um chatbot?" />
                <NavbarItem icon="faq" text="Compartilhando arquivos" />
            </div>
                
        </div>
    )
}

export default Navbar;