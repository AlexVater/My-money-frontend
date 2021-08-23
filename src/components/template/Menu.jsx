import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
    return (
        <ul className="list-inside">
            <MenuItem title="Home" path="/"/>
            <MenuItem title="Pagamentos" path="/billingCycles"/>
        </ul>
    );
};

export default Menu;