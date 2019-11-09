import React from 'react';
import './App.css';
import {Hamburger, TotalPrice, Drink} from "./components";


function App() {
  return (
      <div>
        <Hamburger />
        <TotalPrice />
        <Drink/>
      </div>
  );
}

export default App;
