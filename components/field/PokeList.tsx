import { View, Text } from "react-native";

import React, { useState } from "react";

import { FlatList } from "react-native-gesture-handler";
import styles from "../../assets/styles";
import ListButton from "../buttons/ListButton";
import { useDispatch } from "react-redux";
import { GetPokemon } from "../../redux/actions/PokemonActions";

export default function PokeList() {
  const pokedex = [];
  for (const iterator of require("pokemon").all()) {
    const obj = { name: iterator };
    pokedex.push(obj);
  }
  const dispatch = useDispatch();
  const handleSubmit = (pokemonName: string) => {
    dispatch(GetPokemon(pokemonName));
  };
  return (
    <View style={styles.pokedex__list}>
      <FlatList
        data={pokedex}
        numColumns={2}
        renderItem={({ item }) => (
          <ListButton
            key={item.name}
            onPress={() => handleSubmit(item.name)}
            title={item.name}
          />
        )}
      />
    </View>
  );
}
