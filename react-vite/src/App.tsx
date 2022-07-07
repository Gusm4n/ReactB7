import { useState } from "react";

const App = () => {

const [numero, setNumero] = useState(0)
const [name, setName] = useState('Felipe')

  const handleButtonClick = () => {
    alert('O botão foi clicado! :D')
  }

  const handleName = () => {
    setName('Felipe Gusmão')
  }

  return (
    <div>
      Meu nome é: {name}.
      <button onClick={ handleName }>Clique aqui!</button>
    </div>
  );
}

export default App;
