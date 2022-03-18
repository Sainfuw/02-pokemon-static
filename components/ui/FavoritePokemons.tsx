import { Grid } from "@nextui-org/react";
import React from "react";
import { NextPage } from "next";
import { FavoriteCardPokemon } from "../pokemon";

interface Props {
  pokemons: number[];
}

export const FavoritePokemons: NextPage<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavoriteCardPokemon key={id} pokemonId={id} />
      ))}
    </Grid.Container>
  );
};
