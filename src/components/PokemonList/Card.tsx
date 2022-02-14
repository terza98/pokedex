import {
  Flex,
  Box,
  Image,
  Text,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { FiHeart } from "react-icons/fi";
import { Pokemon } from "../../types/pokemon";
import { getRandomColor, setFavoriteToLocalStorage } from "../../utils/helpers";

const typeStyles = {
  p: "2px 10px",
  borderRadius: 5,
};

interface CardProps extends Pokemon {
  isFavoriteInStorage: boolean;
}
export const Card = (props: CardProps) => {
  const { id, name, imageUrl, types, url, isFavoriteInStorage } = { ...props };
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(isFavoriteInStorage);

  const addToFavorite = (id: string) => {
    setFavoriteToLocalStorage(id);
    setIsFavorite(isFavorite ? false : true);
  };

  useEffect(() => {
    setIsFavorite(isFavoriteInStorage);
  }, [isFavoriteInStorage]);

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
        onClick={() => addToFavorite(id)}
        icon={
          <FiHeart
            fill={isFavorite || isHovered ? "red" : "transparent"}
            color="red"
          />
        }
      />
      <Link href={url}>
        <Image w="100%" cursor="pointer" src={imageUrl} />
      </Link>
      <Flex flexDir="column" alignItems="flex-start" w="100%" px={8} mb="10px">
        <Text color="grey" fontSize={12} fontWeight="bold">
          {id}
        </Text>
        <Text fontSize={20} mt={2}>
          {name}
        </Text>
        <Flex gap="5px">
          {types?.map((type) => (
            <Box
              key={type}
              bg={useMemo(() => getRandomColor(), [0])}
              {...typeStyles}
            >
              <Text color="white">{type}</Text>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
