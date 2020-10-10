import { View, TextInput, Text, Button, Image, StyleSheet } from "react-native";
import { RootStore } from "./Store";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import {
  GetPokemon,
  BoostPokemon,
  SavePokemon,
} from "./redux/actions/PokemonActions";
export default function Main() {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(GetPokemon(pokemonName));
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
  const styles = StyleSheet.create({
    pokemon: {
      width: 200,
      height: 200,
    },
    pokemonTiny: {
      width: 100,
      height: 100,
    },
    container: {
      width: "100%",
      flex: 1,
      flexDirection: "row",
    },
  });

  return (
    <View>
      <TextInput
        style={{
          height: 40,
          width: 200,
          marginTop: 100,
          borderColor: "gray",
          borderWidth: 3,
        }}
        onChangeText={(value) => setPokemonName(value)}
        value={pokemonName}
      />
      <Button title="search" onPress={handleSubmit} />
      <Image
        style={styles.pokemon}
        source={{
          uri: `${pokemonState.pokemon?.sprites.front_default}`,
        }}
      />
      <Text>
        {pokemonState.pokemon?.abilities.map(
          (ability) => ability.ability.name + "\n"
        )}
      </Text>
      <Text>
        {pokemonState.pokemon?.stats.map(
          (stat) => stat.stat.name + " - " + stat.base_stat + "\n"
        )}
      </Text>
      <Button title="boost" onPress={handleBoost} />
      <Button title="save pokemon" onPress={handleSave} />
      <View style={styles.container}>
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
      </View>
    </View>
  );
}
