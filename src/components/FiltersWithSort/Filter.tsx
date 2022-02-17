import { Popover } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../PokemonList/PokemonList";
import { CheckboxFilter } from "./CheckboxFilter";
import { FilterPopoverButton, FilterPopoverContent } from "./FilterPopover";
import { useFilterState } from "../../hooks/useFilterState";
import { Ablity } from "../../types/ability";
import { getPokemonFilters } from "../../utils/helpers";

export const Filter = () => {
  const filterContext = useContext(FilterContext);
  const [filterOptions, setFilterOptions] = useState<Array<Ablity>>();

  useEffect(() => {
    setFilterOptions(getPokemonFilters(filterContext.pokemons));
  }, [filterContext.pokemons]);

  const state = useFilterState({
    defaultValue: [""],
    onSubmit: filterContext.filter,
  });
  return (
    <Popover placement="bottom-start">
      <FilterPopoverButton label="Type" />
      <FilterPopoverContent
        isCancelDisabled={!state.canCancel}
        onClickApply={state.onSubmit}
        onClickCancel={state.onReset}
      >
        <CheckboxFilter
          hideLabel
          value={state.value}
          onChange={(v) => state.onChange(v)}
          options={filterOptions}
        />
      </FilterPopoverContent>
    </Popover>
  );
};
