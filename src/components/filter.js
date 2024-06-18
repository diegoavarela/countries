import React, {useRef} from "react";
import "../stylesheets/filter.css";

function Filter({onFilter}) {

    const menuRef = useRef(null);

    const showMenu = () => {
        menuRef.current.classList.toggle("visible");
    }

    const handleFilter = (region) => {
        onFilter(region);
        showMenu(); // to hide the menu after selection
      }

  return (
    <div className="container-filter" onClick={showMenu}>
      <label className="filter">Filter by Region</label>
      <button type="button" onClick={showMenu}>
        <i className="bi bi-chevron-down"></i>
      </button>
      <div className="dropdown-content visible" ref={menuRef}>
        <nav>
          <li><a href="#" onClick={() => handleFilter('Africa')}>Africa</a></li>
          <li><a href="#" onClick={() => handleFilter('America')}>America</a></li>
          <li><a href="#" onClick={() => handleFilter('Asia')}>Asia</a></li>
          <li><a href="#" onClick={() => handleFilter('Europe')}>Europe</a></li>
          <li><a href="#" onClick={() => handleFilter('Oceania')}>Oceania</a></li>
        </nav>
      </div>
    </div>
  );
}

export default Filter;
