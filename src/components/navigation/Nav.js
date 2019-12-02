import React from "react";

import NavSignedIn from "./Nav-Signed-In";
import NavSignedOut from "./Nav-Signed-Out";

const Nav = ({ signedIn, signIn }) => {
return(
    signedIn
        ? <NavSignedIn signIn={signIn} />
        : <NavSignedOut signIn={signIn} />
    )
}

export default Nav