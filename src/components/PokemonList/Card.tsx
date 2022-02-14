import {
  BoxProps,
  Flex,
  Box,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

const traitStyles = {
  p: "2px 10px",
  borderRadius: 5,
};

export const Card = (props: BoxProps) => (
  <Flex
    minH="3xs"
    bg="bg-surface"
    alignItems="center"
    justify="center"
    flexDir="column"
    boxShadow={useColorModeValue("sm", "sm-dark")}
    borderRadius="lg"
    border="1px solid"
    borderColor="grey"
    {...props}
  >
    <Link href="#">
      <Image
        cursor="pointer"
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
      />
    </Link>
    <Flex
      flexDir="column"
      alignItems="flex-start"
      w="100%"
      maxW="150px"
      mb="10px"
    >
      <Text color="grey" fontSize={12} fontWeight="bold">
        #303
      </Text>
      <Text color="black" fontSize={20}>
        Bulbasaur
      </Text>
      <Flex gap="5px">
        <Box bg="green" {...traitStyles}>
          <Text color="white">Grass</Text>
        </Box>
        <Box bg="purple" {...traitStyles}>
          <Text color="white">Poison</Text>
        </Box>
      </Flex>
    </Flex>
  </Flex>
);
