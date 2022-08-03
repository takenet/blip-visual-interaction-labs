import React from 'react';
import './navbar-item.scss';

function NavbarItem(props) {
    return(
        <div className='navbar-item'>
            <div className='navbar-elements'>
                <bds-icon name={props.icon}></bds-icon>
                <bds-typo variant="fs-14">{props.text}</bds-typo>
            </div>
        </div>
    )
}

export default NavbarItem;