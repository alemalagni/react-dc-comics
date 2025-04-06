import React from 'react';

const NavItem = ({ label, onClick }) => {
    return (
        <div
            onClick={onClick}
        >
            {label}
        </div>
    );
};

export default NavItem;
