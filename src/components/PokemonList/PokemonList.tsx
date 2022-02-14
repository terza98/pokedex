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
import { FiSearch } from "react-icons/fi";
import { Card } from "./Card";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const PokemonList = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
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
          <Container py="8">
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
                  <Card />
                  <Card />
                  <Card />
                </SimpleGrid>
              </Stack>
              <Card minH="sm" />
            </Stack>
          </Container>
        </Box>
      </Box>
    </Flex>
  );
};
