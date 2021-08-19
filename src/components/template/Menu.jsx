import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
    return (
        <ul className="list-inside">
            <MenuItem title="Home"/>
            <MenuItem title="Pagamentos"/>
            <MenuItem title="Login"/>
        </ul>
    );
};

export default Menu;