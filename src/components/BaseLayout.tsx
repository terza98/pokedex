import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import PropTypes from "prop-types";
import { Flex } from "@chakra-ui/react";
import { Sidebar } from "./PokemonList/Sidebar";
import { Navbar } from "./PokemonList/Navbar";
import useWindowDimensions from "../hooks/useWindowDimenzions";

export const BaseLayout: React.FC = ({ children }) => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <Flex
        maxW="1300px"
        w="100%"
        direction={{ base: "column", lg: "row" }}
        bg="bg-canvas"
        overflowY="auto"
      >
        {width > 769 ? <Sidebar /> : <Navbar />}
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
