import { View, Image, TouchableOpacity } from "react-native";
import { RootStore } from "../Store";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import PokeBallButton from "../components/buttons/PokeBallButton";

import { DeletePokemon } from "../redux/actions/PokemonActions";
import { useNavigation } from "@react-navigation/native";
import { PokemonType } from "../redux/actions/PokemonActionTypes";

import styles from "../assets/styles";

export default function DeleteScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const goHome = () => {
    navigation.navigate("Home");
  };

  const handleDelete = (pokemonToDel: PokemonType) => {
    dispatch(DeletePokemon(pokemonToDel, pokemonSavedState.pokemonSaved));
  };
  const pokemonSavedState = useSelector(
    (state: RootStore) => state.pokemonCRUD
  );

  return (
    <View style={styles.home__main}>
      <View style={styles.container}>
        {pokemonSavedState.pokemonSaved.map((newPokemon) => {
          return (
            <TouchableOpacity onPress={() => handleDelete(newPokemon)}>
              <Image
                key={pokemonSavedState.pokemonSaved.indexOf(newPokemon)}
                style={styles.pokemonTiny}
                source={{
                  uri: `${newPokemon.sprites.front_default}`,
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <PokeBallButton title="Home" onPress={goHome} />
    </View>
  );
}
