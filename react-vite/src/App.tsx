import React, { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow( !show )
  }

  return (
    <div> 
      <button onClick={handleClick}>{show ? 'Ocultar' : 'Mostrar'}</button>

      {show && 
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi eaque sequi, tempore qui, libero ad temporibus alias hic placeat a inventore dolorum labore in ab nemo earum. Illo, culpa in.
      </div>
      }
    </div>
    
  );
}

export default App;
