import React from "react";
import "../stylesheets/header.css";

function Header() {
    return (
        <div className="header">
            <h3>Where in the world?</h3>
            <button type="button"><i class="bi bi-moon"></i> Dark Mode</button>
        </div>
    )
}

export default Header;