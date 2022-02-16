type ability = {
  pokemon_v2_ability: {
    name: string;
    id: number;
  };
};
export interface Pokemon {
  id: string;
  experience?: number;
  name: string;
  imageUrl: string;
  url: string;
  types: Array<ability>;
}
