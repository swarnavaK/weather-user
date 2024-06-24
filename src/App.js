import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Traveller from "./components/traveller/Traveller";
import Farmer from "./components/farmer/Farmer";
import Navbar from "./components/navbar";

function App() {
  const [selectedOption, setSelectedOption] = useState("traveller");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <Router>
      <div className='App'>
        <Navbar
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />
        <Routes>
          <Route path='/' element={<Traveller />} />
          <Route path='/traveller' element={<Traveller />} />
          <Route path='/farmer' element={<Farmer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
