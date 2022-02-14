import { Popover } from "@chakra-ui/react";
import { CheckboxFilter } from "./CheckboxFilter";
import { FilterPopoverButton, FilterPopoverContent } from "./FilterPopover";
import { useFilterState } from "./useFilterState";
import { blueFilters } from "./_data";

export const CheckboxFilterPopover = () => {
  const state = useFilterState({
    defaultValue: blueFilters.defaultValue,
    onSubmit: console.log,
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
