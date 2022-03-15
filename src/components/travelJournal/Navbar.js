import React from "react";
import ReactDOM from "react-dom";
import TravelLogo from "./../../images/logos/Fill213.png"


export default function Navbar() {
    return (
        <nav className="blog--nav">
            <img src={TravelLogo} className="blog--logo"/>
            <h3>my travel journal</h3>
        </nav>
    );
}