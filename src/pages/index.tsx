import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import { PokemonList } from "../components/PokemonList/PokemonList";

const Index = () => (
  <Container>
    <PokemonList />
    <DarkModeSwitch />
    <Footer />
  </Container>
);

export default Index;
