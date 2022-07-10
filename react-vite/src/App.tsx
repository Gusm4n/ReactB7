import React, { useState } from "react";

const App = () => {
  const [clicado, setClicado] = useState(false)

  const handleClick = () => {
    setClicado(!clicado)
  }

  return (
    <div> 
      <button 
      onClick={handleClick}
      style={
        {backgroundColor: 
        clicado ?
        '#ff0000'
        :
        '#CCC000', 
        color:'#fff', 
        border: '0'}
        }>Clique aqui!</button>
    </div>
    
  );
}

export default App;
