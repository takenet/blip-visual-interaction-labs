import React from 'react';
import Card from '../../../components/cards/card';
import Header from '../../../components/header/header';
import './home.scss';

export default class Home extends React.Component {
    render() {
        return (
            <div>
               <Header icon="robot" title="Chatbots" />
               <div className="header-config">
                    <div className='actions-left'>
                        <bds-button>Criar chatbot</bds-button>
                        <bds-input placeholder="procurar.."></bds-input>
                    </div>
               </div>
            <div className='cards'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div> 
            </div>
            
        )
    }
}