import { gql } from "@apollo/client";
import { ITEM_LIMIT } from "../constants";

export const ALL_POKEMONS = gql`
  query allPokemons($limit: Int = ${ITEM_LIMIT}) {
    pokemon_v2_pokemon(limit: $limit) {
      id
      name
      base_experience
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          id
          name
        }
      }
    }
  }
`;
