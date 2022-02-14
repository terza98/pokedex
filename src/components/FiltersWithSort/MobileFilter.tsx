import {
  Flex,
  HStack,
  Icon,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { MdFilterList } from "react-icons/md";
import { CheckboxFilter } from "./CheckboxFilter";
import { FilterDrawer } from "./FilterDrawer";
import { SortbySelect } from "./SortBySelect";
import { blueFilters } from "./_data";

export const MobileFilter = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
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
          <CheckboxFilter label="Type" options={blueFilters.options} />
        </Stack>
      </FilterDrawer>
    </>
  );
};
