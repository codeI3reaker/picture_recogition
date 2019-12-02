import React from "react";

const NavSignedIn = ({ signIn }) => { 

    
    return (
        <nav style = {{display:"flex", justifyContent:'flex-end'}}>
            <p
                onClick={()=>signIn(false)}
                className="f3 link dim black underline pa3 pointer">Sign-Out
            </p>
        </nav>
    )
}

export default NavSignedIn