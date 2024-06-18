import React from "react";

function CountryDetail({ country }) {
  return (
    <div>
      <button className="btn-back" onClick={() => window.history.back()}>
        Back
      </button>
      <h1>{country.name}</h1>
      <img src={country.flag} alt={country.name} />
      <div className="country-details">
        <p>Native Name: {country.nativeName} </p>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Sub Region: {country.subregion}</p>
        <p>Capital: {country.capital}</p>
      </div>
      <div className="country-second-details">
        <p>Top Level Domain: {country.topLevelDomain}</p>
        <p>Currencies:{country.currency.name}</p>
        <p>Languages: {country.languages.map((language) => language.name)}</p>
        <p>
          Border Countries:{" "}
          {country.borders
            .map((borderCountry) => borderCountry.name)
            .join(", ")}
        </p>
      </div>
    </div>
  );
}

export default CountryDetail;
