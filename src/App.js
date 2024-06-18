import "./App.css";
import "./components/header";
import Header from "./components/header";
import Search from "./components/search";
import Filter from "./components/filter";
import data from "./data/data.json";
import Card from "./components/card";

function App() {


  console.log(data);

  return (
    <div className="App">
      <Header />
      <div className="search-filter">
        <Search />
        <Filter />
      </div>
      <div className="countries">
        {data.map((country) => {
          return (<Card country={country} />);
        })}
      </div>
    </div>
  );
}

export default App;
