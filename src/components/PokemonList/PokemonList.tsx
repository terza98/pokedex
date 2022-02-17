import { useQuery } from "@apollo/client";
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
import { ALL_POKEMONS } from "../../api/queries";
import { PokemonApi } from "../../types/pokemon";
import { FiltersWithSort } from "../FiltersWithSort/FiltersWithSort";
import Loading from "../Loading";
import { NotificationWithSeparator } from "../Notifications/NotificationWithSeparator";
import { CardGrid } from "./CardGrid";

export const PokemonList = () => {
  const { loading, error, data } = useQuery(ALL_POKEMONS);
  const [isNotificationOpen, setNotification] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<PokemonApi>();

  useEffect(() => {
    setPokemons(data?.pokemon_v2_pokemon);
  }, [loading]);

  useEffect(() => {
    if (error) setNotification(true);
  }, [error]);

  const handleSearch = (query: string): void => {
    setPokemons(
      data?.pokemon_v2_pokemon.filter(
        (pokemon) =>
          pokemon.name.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
          pokemon.id.toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  };

  const handleFilter = (types: Array<string>): void => {
    setPokemons(
      types.length > 1
        ? data.pokemon_v2_pokemon.filter((pokemon) =>
            pokemon.pokemon_v2_pokemonabilities.some((ability) =>
              types.includes(ability.pokemon_v2_ability.name)
            )
          )
        : data.pokemon_v2_pokemon
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
          : value === "experience-asc"
          ? a.base_experience > b.base_experience
            ? 1
            : b.base_experience > a.base_experience
            ? -1
            : 0
          : value === "experience-desc" && a.base_experience < b.base_experience
          ? 1
          : b.base_experience < a.base_experience
          ? -1
          : 0
      )
    );
  };

  const handleFilterContextValue: AppContextInterface = {
    pokemons: data?.pokemon_v2_pokemon,
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
          <NotificationWithSeparator
            isOpen={isNotificationOpen}
            onClose={() => setNotification(false)}
            title="There has been a problem"
            description={
              error?.message ||
              "Unexpected problem has occured. Please contact us"
            }
            color="red"
          />
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
            <Loading loading={loading} />
            <CardGrid pokemons={pokemons} />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

interface AppContextInterface {
  pokemons: PokemonApi;
  filter: (types: Array<string>) => void;
  sort: (value: string) => void;
}

export const FilterContext = createContext<AppContextInterface | null>(null);
