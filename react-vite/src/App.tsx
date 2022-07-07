import { useState } from "react";

const App = () => {
  const [numero, setNumero] = useState(0)

  const handleMinus = () => {
    if(numero < 1){
      return 0
    }
    else{
      setNumero(numero - 1)
    }
  }

  const handlePlus = () => {
    setNumero(numero + 1)
  }

  return (
    <div> 
      <button onClick={handleMinus}>-</button>
      <div>{numero}</div>
      <button onClick={handlePlus}>+</button>

    </div>
  );
}

export default App;
