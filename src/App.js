
import CountryDetail from "./components/countryDetail.js";
import Home from "./components/home.js";


import { BrowserRouter , Routes, Route } from "react-router-dom";



function App() {


  return (
      <BrowserRouter>
        <Routes>
            <Route path="/country/:name" element={<CountryDetail />} />
            <Route path="/" element={<Home />} />
            <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
