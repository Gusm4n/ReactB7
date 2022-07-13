import { Container } from "./components/Container";
import { Botao } from "./components/Container";

const App = () => {


  return(
    <div> 
      <Container>
        Texto do componente
        <Botao>
          Clique aqui mesmo.
        </Botao>
      </Container>
    </div>
    
  );
  

}


export default App;
