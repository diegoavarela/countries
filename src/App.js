import "./App.css";
import "./components/header";
import Header from "./components/header";
import Search from "./components/search";
import Filter from "./components/filter";
import data from "./data/data.json";
import Card from "./components/card";
import React, { useState, useEffect } from "react";
import { BrowserRouter , Router, Route, Routes } from "react-router-dom";
import CountryDetail from "./components/countryDetail.js";

function App() {
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
      <BrowserRouter>
        <Routes>
            <Route path="/country/:name" component={CountryDetail} />
            <Route path="/">
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
            </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
