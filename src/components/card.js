import React from "react";
import "../stylesheets/card.css";

function Card({country}) {
  return (
    <div className="country">
      <img src={country.flag} alt="flag" />
      <h3>{country.name}</h3>
      <p>
        <strong>Population:</strong> {country.population}
      </p>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
    </div>
  );
}

export default Card;
