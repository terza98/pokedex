import { Flex, Stack, useColorModeValue } from "@chakra-ui/react";
import { FiBarChart2, FiHelpCircle, FiHome, FiUsers } from "react-icons/fi";
import { NavButton } from "./NavButton";

export const Sidebar = () => (
  <Flex as="section" minH="100vh" bg="bg-canvas">
    <Flex
      flex="1"
      bg="bg-surface"
      overflowY="auto"
      boxShadow={useColorModeValue("md", "sm-dark")}
      maxW={{ base: "full", sm: "xs" }}
      py={{ base: "6", sm: "8" }}
      px={{ base: "4", sm: "6" }}
    >
      <Stack justify="space-between" spacing="1">
        <Stack spacing={{ base: "5", sm: "6" }} shouldWrapChildren>
          <Stack spacing="1">
            <NavButton label="Home" icon={FiHome} />
            <NavButton
              label="Dashboard"
              icon={FiBarChart2}
              aria-current="page"
            />
            <NavButton label="Profile" icon={FiUsers} />
          </Stack>
        </Stack>
        <Stack spacing={{ base: "5", sm: "6" }}>
          <Stack spacing="1">
            <NavButton label="Help" icon={FiHelpCircle} />
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  </Flex>
);
