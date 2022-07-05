import Header from "./components/Header";

const App = () => {
  let link: string = 'https://google.com.br';

  return (
    <div>
      <Header />
      Link para o site <br/>
      <a href={link}>Clique aqui!</a>
    </div>
  );
}

export default App;

// JSX nada mais é que um pseudo HTML, que são comandos HTML que são interpretados pelo compilador Babel e assim, transformados em JavaScript.