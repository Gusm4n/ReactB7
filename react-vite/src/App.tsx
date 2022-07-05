import Header from "./components/Header";
import { Photo } from "./components/Photo";

const App = () => {
  let link: string = 'https://google.com.br';

  return (
    <div>
      <Header title="Exemplito" />
      Link para o site <br/>
      <a href={link}>Clique aqui!</a>

      <Photo url="https://www.google.com.br/google.jpg"/>
    </div>
  );
}

export default App;

// JSX nada mais é que um pseudo HTML, que são comandos HTML que são interpretados pelo compilador Babel e assim, transformados em JavaScript.