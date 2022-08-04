import React from 'react';
import './bot-detail.scss';
import {Link} from 'react-router-dom';

export default class BotDetail extends React.Component {
    render() {
        return (
            <div>
               <Link to="/main/chatbot" >
                <bds-button>teste</bds-button>
               </Link>
            </div>
            
        )
    }
}