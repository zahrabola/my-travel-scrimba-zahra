import React from 'react';

const Navbar = (imgprop) => {
    return (
        <div className='navcontainer'>
            <div className='navsection'>
                <img src={imgprop.img} className='navimg' alt='navbarlogo'/>
                <span className='navtext'>My Travel Journal</span>
            </div>
        </div>
    );
}

export default Navbar;
