import {
  Box,
  Button,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { ALL_POKEMONS } from "../api/queries";
import { BaseLayout } from "../components/BaseLayout";
import { CardGrid } from "../components/PokemonList/CardGrid";
import { Pokemon } from "../types/pokemon";

const Index = () => {
  const { loading, data } = useQuery(ALL_POKEMONS);

  const [pokemons, setPokemons] = useState<Array<Pokemon>>();
  const [username, setUsername] = useState<string>("");

  const handleUsernameChange = (): void => {
    localStorage.setItem("username", username);
  };

  useEffect(() => {
    setPokemons(data?.pokemon_v2_pokemon);
  }, [loading]);

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, []);

  return (
    <BaseLayout>
      <Box w="100%" py="8" maxW="100%" px={10}>
        <Heading fontSize={18}>Your username:</Heading>
        <Box>
          <InputGroup maxW="350px" w="100%">
            <InputLeftElement pointerEvents="none">
              <Icon as={FiUser} color="muted" boxSize="5" />
            </InputLeftElement>
            <Input
              placeholder="Username"
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
              variant={useColorModeValue("outline", "filled")}
            />
            <Button ml={4} onClick={handleUsernameChange}>
              Save
            </Button>
          </InputGroup>
        </Box>
        <Heading fontSize={18}>Your favorite pokemons:</Heading>
        <CardGrid pokemons={pokemons} isFavoritePage />
      </Box>
    </BaseLayout>
  );
};

export default Index;
