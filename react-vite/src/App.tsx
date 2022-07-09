import React, { useState } from "react";

const App = () => {

  let list = [
    'A3',
    'A4',
    'A5',
    'Q3',
    'TT'
  ]

  return (
    <div> 
      <h2>Lista de carros nacionais da AUDI</h2>
      <ul>
        {list.map((item, index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
