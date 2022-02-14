import { Select, SelectProps, useColorModeValue } from "@chakra-ui/react";
import { useContext } from "react";
import { FilterContext } from "../PokemonList/PokemonList";

const sortByOptions = {
  defaultValue: "name-az",
  options: [
    { label: "Name (A-Z)", value: "name-az" },
    { label: "Name (Z-A)", value: "name-za" },
    { label: "Type (A-Z)", value: "type-az" },
    { label: "Type(Z-A)", value: "type-za" },
  ],
};

export const SortbySelect = (props: SelectProps) => {
  const filterContext = useContext(FilterContext);

  return (
    <Select
      size="sm"
      aria-label="Sort by"
      defaultValue={sortByOptions.defaultValue}
      focusBorderColor={useColorModeValue("blue.500", "blue.200")}
      rounded="md"
      onChange={(e) =>
        filterContext.sort((e.target as HTMLSelectElement).value)
      }
      {...props}
    >
      {sortByOptions.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};
