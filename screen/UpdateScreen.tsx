import { View, Image, TouchableOpacity } from "react-native";
import { RootStore } from "../Store";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import MyButton from "../components/MyButton";

import { UpdatePokemon } from "../redux/actions/PokemonActions";
import { useNavigation } from "@react-navigation/native";
import { PokemonType } from "../redux/actions/PokemonActionTypes";

import styles from "../assets/styles";

export default function UpdateScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const goHome = () => {
    navigation.navigate("Home");
  };

  const handleUpdate = (pokemonToDel: PokemonType) => {
    if (pokemonState.pokemon)
      dispatch(
        UpdatePokemon(
          pokemonToDel,
          pokemonState.pokemon,
          pokemonSavedState.pokemonSaved
        )
      );
  };
  const pokemonSavedState = useSelector(
    (state: RootStore) => state.pokemonCRUD
  );
  const pokemonState = useSelector((state: RootStore) => state.pokemon);

  return (
    <>
      <View style={styles.pokeContainer}>
        <Image
          style={styles.pokemon}
          source={{
            uri: `${pokemonState.pokemon?.sprites.front_default}`,
          }}
        />
      </View>
      <View style={styles.container}>
        {pokemonSavedState.pokemonSaved.map((pokemonToDel) => {
          return (
            <TouchableOpacity onPress={() => handleUpdate(pokemonToDel)}>
              <Image
                key={pokemonSavedState.pokemonSaved.indexOf(pokemonToDel)}
                style={styles.pokemonTiny}
                source={{
                  uri: `${pokemonToDel.sprites.front_default}`,
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <MyButton title="Home" onPress={goHome} />
    </>
  );
}
