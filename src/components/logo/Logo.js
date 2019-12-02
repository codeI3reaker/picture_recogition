import React from "react";
import "./logo.css";
import  brain from "./brain.png";

const Logo = () => { 
    return (
        <div className = 'logo'>
            <img src={brain} alt ="brain"/>
        </div>
    )
}

export default Logo;