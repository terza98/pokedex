import {
  Box,
  Container,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Pokemon } from "../../types/pokemon";
import { FiltersWithSort } from "../FiltersWithSort/FiltersWithSort";
import { CardGrid } from "./CardGrid";
import { mockApi } from "./_data";

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState<Array<Pokemon>>();

  useEffect(() => {
    setPokemons(
      mockApi.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
    );
  }, []);

  const handleSearch = (query: string): void => {
    setPokemons(
      mockApi.filter(
        (pokemon) =>
          pokemon.name.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
          pokemon.id.toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  };

  const handleFilter = (types: Array<string>): void => {
    setPokemons(
      types.length > 1
        ? mockApi.filter((pokemon) =>
            pokemon.types.some((type) => types.includes(type.toLowerCase()))
          )
        : mockApi
    );
  };

  const handleSort = (value: string): void => {
    const newPokemons = [...pokemons];
    setPokemons(
      newPokemons.sort((a, b) =>
        value === "name-az"
          ? a.name > b.name
            ? 1
            : b.name > a.name
            ? -1
            : 0
          : value === "name-za"
          ? a.name < b.name
            ? 1
            : b.name < a.name
            ? -1
            : 0
          : value === "type-az"
          ? a.types > b.types
            ? 1
            : b.types > a.types
            ? -1
            : 0
          : value === "type-za" && a.types < b.types
          ? 1
          : b.types < a.types
          ? -1
          : 0
      )
    );
  };

  const handleFilterContextValue: AppContextInterface = {
    filter: handleFilter,
    sort: handleSort,
  };

  return (
    <Box bg="bg-surface" pt={{ base: "0", lg: "3" }} flex="1">
      <Box
        bg="bg-canvas"
        borderTopLeftRadius={{ base: "none", lg: "2rem" }}
        height="full"
      >
        <Container py="8" maxW="100%" px={10}>
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
                onKeyUp={(e) =>
                  handleSearch((e.target as HTMLTextAreaElement).value)
                }
                variant={useColorModeValue("outline", "filled")}
              />
            </InputGroup>
            <FilterContext.Provider value={handleFilterContextValue}>
              <FiltersWithSort />
            </FilterContext.Provider>
            <CardGrid pokemons={pokemons} />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

interface AppContextInterface {
  filter: (types: Array<string>) => void;
  sort: (value: string) => void;
}

export const FilterContext = createContext<AppContextInterface | null>(null);
