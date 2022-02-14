import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { BaseLayout } from "../components/BaseLayout";
import { Container } from "../components/Container";

const Index = () => (
  <BaseLayout>
    <Container w="100%">
      <Flex
        alignItems="center"
        justify="center"
        flexDir="column"
        w="100%"
        h="100%"
      >
        <Text px={10}>
          If you have any problems or concerns about the website feel free to
          contact me @:{" "}
          <Link href="mailto:mladen@mladenterzic.com">
            <Text as="span" color="blue">
              mladen@mladenterzic.com
            </Text>
          </Link>
        </Text>
      </Flex>
    </Container>
  </BaseLayout>
);

export default Index;
