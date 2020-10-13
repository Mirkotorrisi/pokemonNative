import { View, ScrollView, TextInput, Text, Image } from "react-native";
import { RootStore } from "../Store";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MyButton from "../components/MyButton";
import CrudButton from "../components/CrudButton";
import {
  GetPokemon,
  BoostPokemon,
  SavePokemon,
} from "../redux/actions/PokemonActions";
import styles from "../assets/styles";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(GetPokemon(pokemonName));
  };
  const navigation = useNavigation();
  const goDelete = () => {
    navigation.navigate("Delete");
  };
  const goUpdate = () => {
    navigation.navigate("Update");
  };
  const goCredits = () => {
    navigation.navigate("Credits");
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
    <View style={styles.home__container}>
      <View style={styles.home__search}>
        <TextInput
          style={styles.home__search__textInput}
          onChangeText={(value) => setPokemonName(value)}
          value={pokemonName}
        />
        <MyButton title="search" onPress={handleSubmit} />
      </View>
      {pokemonState.pokemon &&
        <View style={styles.home__main}>
          <View style={styles.home__pokeContainer}>
            <Image
              style={styles.pokemon}
              source={{
                uri: `${pokemonState.pokemon?.sprites.front_default}`,
              }}
            />
            <Text style={styles.stats}>
              <Text style={styles.home__pokemonName}> {pokemonName}</Text>

              {pokemonState.pokemon?.stats.map(
                (stat) => "\n" + stat.stat.name + " - " + stat.base_stat
              )}
            </Text>

          </View>
          <View style={styles.buttons}>
            <MyButton title="boost" onPress={handleBoost} />
            <MyButton title="save" onPress={handleSave} />
          </View>
        </View>
      }
      <View style={styles.home__footer}>
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
        <View style={styles.home__crudButtons}>
          <CrudButton title="Credits" onPress={goCredits} />
          <CrudButton title="Delete" onPress={goDelete} />
          <CrudButton title="Update" onPress={goUpdate} />
        </View>
      </View>
    </View>
  );
}
