import React from "react";
import "../stylesheets/search.css";

function Search() {
    return (
        <div className="container-search"> 
            <button type="button"><i class="bi bi-search"></i></button>
            <input type="text" placeholder="Search for a country ..." className="search-box"></input>
        </div>
    )
}

export default Search;