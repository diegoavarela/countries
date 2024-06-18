import React from "react";
import "../stylesheets/filter.css";

function Filter() {
    return (
        <div className="container-filter">
            <label className="filter">Filter by Region</label>
            <button type="button"><i class="bi bi-chevron-down"></i></button>
        </div>
    )
}

export default Filter;