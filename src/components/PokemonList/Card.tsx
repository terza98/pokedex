import {
  BoxProps,
  Flex,
  Box,
  Image,
  Text,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { FiHeart } from "react-icons/fi";

const traitStyles = {
  p: "2px 10px",
  borderRadius: 5,
};

export const Card = (props: BoxProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Flex
      minH="3xs"
      bg="bg-surface"
      alignItems="center"
      justify="center"
      flexDir="column"
      position="relative"
      boxShadow={useColorModeValue("sm", "sm-dark")}
      borderRadius="lg"
      border="1px solid"
      borderColor="grey"
      {...props}
    >
      <IconButton
        aria-label="favorite"
        position="absolute"
        top={0}
        right={0}
        bg="transparent"
        _hover={{
          bg: "transparent",
        }}
        _active={{
          bg: "transparent",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        icon={<FiHeart fill={isHovered ? "red" : "transparent"} color="red" />}
      />
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
        <Text fontSize={20} mt={2}>
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
};
