import React, { useState, useEffect } from "react";
import Header from "./header";
import Search from "./search";
import Filter from "./filter";
import Card from "./card";
import data from "../data/data.json";
import "../App.css";

function Home() {

    const [countries, setCountries] = useState(data); // Assuming 'data' is your initial data
    const [searchTerm, setSearchTerm] = useState("");
  
    useEffect(() => {
      const result = data.filter((country) =>
        country.region.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCountries(result);
    }, [searchTerm]);
  
    const handleSearch = (term) => {
      setSearchTerm(term);
    };
  
    const handleFilter = (filterCondition) => {
      // Update searchTerm based on filter condition
      setSearchTerm(filterCondition);
    };


    return (
        <div className="App">
        <Header />
        <div className="search-filter">
          <Search onSearch={handleSearch} />
          <Filter onFilter={handleFilter} />
        </div>
        <div className="countries">
          {countries.map((country) => {
            return <Card country={country} />;
          })}
        </div>
      </div>
    )
}

export default Home;