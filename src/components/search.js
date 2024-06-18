import React, {useRef} from "react";
import "../stylesheets/search.css";

function Search({onSearch}) {

const searchRef = useRef(null);
  

    return (
        <div className="container-search"> 
            <button type="button" onClick={() => onSearch(searchRef.current.value)}><i className="bi bi-search"></i></button>
            <input type="text" placeholder="Search for a country ..." className="search-box" ref={searchRef}></input>
        </div>
    )
}

export default Search;