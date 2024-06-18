import React from "react";
import { useParams } from "react-router-dom";
import countries from "../data/data.json"; // replace with the path to your JSON file
import Header from "./header";
import "../stylesheets/countryDetail.css";

function CountryDetail() {
  const { name } = useParams();

  var country = countries.find((country) => country.name === name);

  return (
    <div className="outer-container-detail">
      <Header />
      <div className="container-detail">
        <button className="btn-back" onClick={() => window.history.back()}>
          <i class="bi bi-arrow-left"></i> Back
        </button>
        <img src={country.flag} alt={country.name} />
        <h1>{country.name}</h1>
        <div className="country-details">
          <p><span className="country-labels">Native Name:</span> {country.nativeName} </p>
          <p><span className="country-labels">Population:</span> {country.population}</p>
          <p><span className="country-labels">Region:</span> {country.region}</p>
          <p><span className="country-labels">Sub Region:</span> {country.subregion}</p>
          <p><span className="country-labels">Capital:</span> {country.capital}</p>
        </div>
        <div className="country-second-details">
          <p><span className="country-labels">Top Level Domain:</span> {country.topLevelDomain}</p>
          <p><span className="country-labels">Currencies:</span> {country.currencies.name}</p>
          <p>
          <span className="country-labels">Languages:</span>{" "}
            {country &&
              country.languages &&
              country.languages.map((language) => language.name)}
          </p>
          <p>
            {country.borders.length > 0 ? (
              <>
                <span className="border-countries">Border Countries:</span>{" "}
                {country.borders
                  .map((borderCountry) => borderCountry.name)
                  .join(", ")}
              </>
            ) : (
              <p>No border countries.</p>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
