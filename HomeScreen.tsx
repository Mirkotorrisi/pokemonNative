import { View, ScrollView, TextInput, Text, Image } from "react-native";
import { RootStore } from "./Store";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MyButton from "./components/MyButton";
import {
  GetPokemon,
  BoostPokemon,
  SavePokemon,
} from "./redux/actions/PokemonActions";
import styles from "./assets/styles";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(GetPokemon(pokemonName));
  };
  const navigation = useNavigation();
  const goDelete = () => {
    navigation.navigate("Delete");
  };
  const handleBoost = () => {
    if (pokemonState.pokemon) dispatch(BoostPokemon(pokemonState.pokemon));
  };
  const handleSave = () => {
    if (pokemonState.pokemon)
      dispatch(
        SavePokemon(pokemonState.pokemon, pokemonSavedState.pokemonSaved)
      );
  };
  const [pokemonName, setPokemonName] = useState("");
  const pokemonState = useSelector((state: RootStore) => state.pokemon);
  const pokemonSavedState = useSelector(
    (state: RootStore) => state.pokemonCRUD
  );

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.textInput}
          onChangeText={(value) => setPokemonName(value)}
          value={pokemonName}
        />
        <MyButton title="search" onPress={handleSubmit} />
      </View>
      <View style={styles.pokeContainer}>
        <Image
          style={styles.pokemon}
          source={{
            uri: `${pokemonState.pokemon?.sprites.front_default}`,
          }}
        />
        <Text style={styles.stats}>
          {pokemonState.pokemon?.stats.map(
            (stat) => stat.stat.name + " - " + stat.base_stat + "\n"
          )}
        </Text>
      </View>
      <View style={styles.buttons}>
        <MyButton title="boost" onPress={handleBoost} />
        <MyButton title="save" onPress={handleSave} />
      </View>
      <ScrollView horizontal={true} style={styles.pokemonSaved}>
        {pokemonSavedState.pokemonSaved.map((newPokemon) => {
          return (
            <Image
              key={pokemonSavedState.pokemonSaved.indexOf(newPokemon)}
              style={styles.pokemonTiny}
              source={{
                uri: `${newPokemon.sprites.front_default}`,
              }}
            />
          );
        })}
      </ScrollView>
      <MyButton title="Delete" onPress={goDelete} />
    </View>
  );
}
