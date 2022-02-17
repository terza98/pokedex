import {
  Flex,
  HStack,
  Icon,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { MdFilterList } from "react-icons/md";
import { Ablity } from "../../types/ability";
import { getPokemonFilters } from "../../utils/helpers";
import { FilterContext } from "../PokemonList/PokemonList";
import { CheckboxFilter } from "./CheckboxFilter";
import { FilterDrawer } from "./FilterDrawer";
import { SortbySelect } from "./SortBySelect";

export const MobileFilter = () => {
  const filterContext = useContext(FilterContext);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [filterOptions, setFilterOptions] = useState<Array<Ablity>>();

  useEffect(() => {
    setFilterOptions(getPokemonFilters(filterContext.pokemons));
  }, [filterContext.pokemons]);

  return (
    <>
      <Flex
        width="full"
        justify="space-between"
        display={{ base: "flex", md: "none" }}
      >
        <HStack
          as="button"
          fontSize="sm"
          type="button"
          px="3"
          py="1"
          onClick={onOpen}
          borderWidth="1px"
          rounded="md"
        >
          <Icon as={MdFilterList} />
          <Text>Filters</Text>
        </HStack>
        <SortbySelect width="120px" defaultValue="23" placeholder="Sort" />
      </Flex>
      <FilterDrawer isOpen={isOpen} onClose={onClose}>
        <Stack spacing="6" divider={<StackDivider />}>
          <CheckboxFilter label="Type" options={filterOptions} />
        </Stack>
      </FilterDrawer>
    </>
  );
};
