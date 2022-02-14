import {
  Box,
  Flex,
  HStack,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { SortbySelect } from "./SortBySelect";
import { CheckboxFilterPopover } from "./Filter";
import { MobileFilter } from "./MobileFilter";

export const FiltersWithSort = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{ base: "4", md: "8", lg: "12" }}
    py={{ base: "6", md: "8", lg: "12" }}
  >
    <Flex
      justify="space-between"
      align="center"
      display={{ base: "none", md: "flex" }}
    >
      <HStack spacing="6">
        <Text
          color={mode("gray.600", "gray.400")}
          fontWeight="medium"
          fontSize="sm"
        >
          Filter by
        </Text>
        <SimpleGrid display="inline-grid" spacing="4" columns={4}>
          <CheckboxFilterPopover />
        </SimpleGrid>
      </HStack>

      <HStack flexShrink={0}>
        <Text
          as="label"
          htmlFor="sort-by"
          color={mode("gray.600", "gray.400")}
          fontWeight="medium"
          fontSize="sm"
          whiteSpace="nowrap"
        >
          Sort by
        </Text>
        <SortbySelect />
      </HStack>
    </Flex>

    <MobileFilter />
  </Box>
);
