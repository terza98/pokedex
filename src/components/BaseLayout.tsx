import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import PropTypes from "prop-types";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Sidebar } from "./PokemonList/Sidebar";
import { Navbar } from "./PokemonList/Navbar";

export const BaseLayout: React.FC = ({ children }) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Container>
      <Flex
        as="section"
        maxW="1300px"
        w="100%"
        direction={{ base: "column", lg: "row" }}
        bg="bg-canvas"
        overflowY="auto"
      >
        {isDesktop ? <Sidebar /> : <Navbar />}
        {children}
      </Flex>
      <DarkModeSwitch />
      <Footer />
    </Container>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
