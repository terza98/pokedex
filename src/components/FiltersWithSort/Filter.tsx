import { Popover } from "@chakra-ui/react";
import { useContext } from "react";
import { FilterContext } from "../PokemonList/PokemonList";
import { CheckboxFilter } from "./CheckboxFilter";
import { FilterPopoverButton, FilterPopoverContent } from "./FilterPopover";
import { useFilterState } from "./useFilterState";
import { blueFilters } from "./_data";

export const Filter = () => {
  const filterContext = useContext(FilterContext);

  const state = useFilterState({
    defaultValue: blueFilters.defaultValue,
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
          options={blueFilters.options}
        />
      </FilterPopoverContent>
    </Popover>
  );
};
