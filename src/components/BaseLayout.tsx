import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import PropTypes from "prop-types";

export const BaseLayout: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
      <DarkModeSwitch />
      <Footer />
    </Container>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
