import Container from "react-bootstrap/Container";

import Header from "./components/header/Header";
import CharacterContainer from "./components/characters/CharacterContainer";

function App() {
  return (
    <Container className= "text-center mt-5"  >
   <Header/>
   <CharacterContainer/>
    </Container>
  );
}

export default App;
