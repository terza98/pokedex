import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Card } from "./Card";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

//mock API
const pokemons = [
  {
    name: "Bulbasaur",
    id: "#001",
    traits: ["Grass", "Poison"],
    url: "#",
    imageUrl:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
  },
  {
    name: "Ivysaur",
    id: "#002",
    traits: ["Grass", "Poison"],
    url: "#",

    imageUrl:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
  },
  {
    name: "Venusaur",
    id: "#003",
    url: "#",
    traits: ["Grass", "Poison"],
    imageUrl:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
  },
  {
    name: "Charmander",
    id: "#004",
    url: "#",
    traits: ["Fire"],
    imageUrl:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
  },
];

export const PokemonList = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const [favorites, setFavorites] = useState<Array<string>>();

  useEffect(() => {
    //check favorites from localstorage
    setFavorites(JSON.parse(localStorage.getItem("favorites")));
  }, []);

  return (
    <Flex
      as="section"
      maxW="1300px"
      w="100%"
      direction={{ base: "column", lg: "row" }}
      bg="bg-canvas"
      overflowY="auto"
    >
      {isDesktop ? <Sidebar /> : <Navbar />}
      <Box bg="bg-surface" pt={{ base: "0", lg: "3" }} flex="1">
        <Box
          bg="bg-canvas"
          borderTopLeftRadius={{ base: "none", lg: "2rem" }}
          height="full"
        >
          <Container py="8" maxW="100%">
            <Stack spacing={{ base: "8", lg: "6" }}>
              <Stack
                spacing="4"
                direction={{ base: "column", lg: "row" }}
                justify="space-between"
                align={{ base: "start", lg: "center" }}
              >
                <Stack spacing="1">
                  <Heading
                    size={useBreakpointValue({ base: "xs", lg: "sm" })}
                    fontWeight="medium"
                  >
                    Pokèdex
                  </Heading>
                  <Text color="muted">
                    Search for a Pokémon by name or using its National Pokédex
                    number.
                  </Text>
                </Stack>
              </Stack>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={FiSearch} color="muted" boxSize="5" />
                </InputLeftElement>
                <Input
                  placeholder="Search"
                  variant={useColorModeValue("outline", "filled")}
                />
              </InputGroup>
              <Stack spacing={{ base: "5", lg: "6" }}>
                <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
                  {pokemons?.map((pokemon) => (
                    <Card
                      key={pokemon.name}
                      id={pokemon.id}
                      traits={pokemon.traits}
                      name={pokemon.name}
                      url={pokemon.url}
                      imageUrl={pokemon.imageUrl}
                      isFavoriteInStorage={
                        favorites?.includes(pokemon.id) ? true : false
                      }
                      minH="sm"
                    />
                  ))}
                </SimpleGrid>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Flex>
  );
};
