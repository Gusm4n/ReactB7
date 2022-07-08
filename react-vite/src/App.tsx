import React, { useState } from "react";
import { Botao } from "./components/Botao";

const App = () => {

  const botaoEvento = () => {
    alert("Frase do app!")
  }

  return (
    <div> 
      <Botao text="Clique no botão!" clickFn={botaoEvento}/>
    </div>
  );
}

export default App;
