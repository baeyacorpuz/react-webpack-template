import React, { useState } from "react";
import "./App.scss";

const App = () => {
  const [traveler, setTraveler] = useState('traveler')

  const handleChange = (e) => {
    setTraveler(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ad astra, abyssosque!</h1>
        <p>Hi, {traveler}!</p>
        <input
          name="traveler"
          type="text"
          placeholder="Enter traveler name" 
          onChange={handleChange}
        />
        <p>
          Edit <code>App.js</code> and save to test updates.
        </p>
      </header>
    </div>
  )
};

export default App;
