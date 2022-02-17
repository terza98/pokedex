// export interface Pokemon {
//   id: number;
//   experience?: number;
//   name: string;
//   imageUrl: string;
//   url: string;
//   types: [
//     {
//       pokemon_v2_ability: {
//         id: number;
//         name: string;
//       };
//     }
//   ];
// }
export type Pokemon = {
  id: number;
  name: string;
  base_experience?: number;
  pokemon_v2_pokemonabilities: [
    {
      pokemon_v2_ability: {
        id: number;
        name: string;
      };
    }
  ];
};
export type PokemonApi = Array<Pokemon>;
