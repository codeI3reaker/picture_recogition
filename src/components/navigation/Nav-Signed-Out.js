import React from "react";
import './nav.css';

import Logo from '../logo/Logo';

const NavSignedOut = ({ signIn }) => { 

    return (
        <nav className='navbar'>
            <div className='nav-container'>
                <div className='nav-left'>
                        <Logo />
                </div>
                <div className = 'nav-right'>
                    <button onClick={signIn}>
                        <p 
                            onClick={()=>signIn(false)}
                            className="f3 link dim black underline pa3 pointer">Sign-In
                        </p>
                    </button> 
                </div>
            </div>
        </nav>
    )
}

export default NavSignedOut