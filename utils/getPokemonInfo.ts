import { pokeApi } from "../api";
import { Pokemon } from "../interfaces/pokemon-info";

export const getPokemonInfo = async (x: string) => {
  const { data } = await pokeApi.get<Pokemon>(`pokemon/${x}`);

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};
