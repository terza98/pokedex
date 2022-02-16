import {
  Box,
  Center,
  Flex,
  FlexProps,
  Icon,
  Stack,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

interface NotificationProps extends FlexProps {
  primaryAction: React.ReactNode;
  secondaryAction?: React.ReactNode;
  color?: string;
}

export const Notification = (props: NotificationProps) => {
  const { primaryAction, secondaryAction, children, color, ...flexProps } =
    props;
  return (
    <Flex
      width="md"
      boxShadow="lg"
      borderRadius="base"
      overflow="hidden"
      position="fixed"
      top={20}
      right={10}
      zIndex={9}
      bg={useColorModeValue("white", "gray.700")}
      {...flexProps}
    >
      <Center
        bg={useColorModeValue(color, "blue.300")}
        px="4"
        display={{ base: "none", sm: "flex" }}
      >
        <Icon
          as={FiInfo}
          color={useColorModeValue("white", "gray.900")}
          boxSize="9"
        />
      </Center>
      <Stack
        direction={{ base: "column", sm: "row" }}
        divider={<StackDivider />}
        spacing="0"
      >
        <Box px="4" py="3">
          {children}
        </Box>
        <Stack
          direction={{ base: "row", sm: "column" }}
          height="full"
          divider={<StackDivider />}
          spacing="0"
        >
          {primaryAction}
          {secondaryAction}
        </Stack>
      </Stack>
    </Flex>
  );
};
