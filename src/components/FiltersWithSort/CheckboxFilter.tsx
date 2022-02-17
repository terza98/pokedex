import {
  Checkbox,
  CheckboxGroup,
  CheckboxGroupProps,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  StackProps,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

type CheckboxFilterProps = Omit<CheckboxGroupProps, "onChange"> & {
  hideLabel?: boolean;
  options: Array<{ name: string; id: number }>;
  label?: string;
  onChange?: (value: string[]) => void;
  spacing?: StackProps["spacing"];
  showSearch?: boolean;
};

export const CheckboxFilter = (props: CheckboxFilterProps) => {
  const {
    options,
    label,
    hideLabel,
    spacing = "2",
    showSearch,
    ...rest
  } = props;

  return (
    <Stack as="fieldset" spacing={spacing}>
      {!hideLabel && (
        <FormLabel fontWeight="semibold" as="legend" mb="0">
          {label}
        </FormLabel>
      )}
      {showSearch && (
        <InputGroup size="md" pb="1">
          <Input
            placeholder="Search..."
            rounded="md"
            focusBorderColor={mode("blue.500", "blue.200")}
          />
          <InputRightElement
            pointerEvents="none"
            color="gray.400"
            fontSize="lg"
          >
            <FiSearch />
          </InputRightElement>
        </InputGroup>
      )}
      <CheckboxGroup {...rest}>
        {options?.map((option) => (
          <Checkbox key={option.id} value={option.name} colorScheme="blue">
            <span>{option.name}</span>
          </Checkbox>
        ))}
      </CheckboxGroup>
    </Stack>
  );
};
