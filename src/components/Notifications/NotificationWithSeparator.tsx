import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MouseEventHandler } from "react";
import { Notification } from "./Notification";
import { NotificationButton } from "./NotificationButton";

interface NotificationButtonProps {
  isOpen: boolean;
  onClose: MouseEventHandler<HTMLButtonElement>;
  title: string;
  description: string;
  color: string;
}

export const NotificationWithSeparator = ({
  isOpen,
  onClose,
  title,
  description,
  color,
}: NotificationButtonProps) => {
  if (isOpen)
    return (
      <Box
        as="section"
        pt="8"
        pb="20"
        px={{ base: "4", md: "8" }}
        bg={useColorModeValue("gray.50", "inherit")}
        position="fixed"
        zIndex={9}
      >
        <Flex direction="row-reverse">
          <Notification
            color={color}
            primaryAction={
              <NotificationButton colorScheme="blue" onClick={onClose}>
                Close
              </NotificationButton>
            }
          >
            <Stack spacing="1">
              <Heading as="h3" fontSize="md">
                {title}
              </Heading>
              <Text fontSize="sm">{description}</Text>
            </Stack>
          </Notification>
        </Flex>
      </Box>
    );
  return null;
};
