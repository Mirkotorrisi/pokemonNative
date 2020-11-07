import { View, Text, Image } from "react-native";
import { RootStore } from "../../Store";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import PokeBallButton from "../buttons/PokeBallButton";

import { SavePokemon } from "../../redux/actions/PokemonActions";
import styles from "../../assets/styles";

export default function PokeContainer() {
  const pokemonState = useSelector((state: RootStore) => state.pokemon);
  const dispatch = useDispatch();
  const pokemonSavedState = useSelector(
    (state: RootStore) => state.pokemonCRUD
  );

  const handleSave = () => {
    if (pokemonState.pokemon)
      dispatch(
        SavePokemon(pokemonState.pokemon, pokemonSavedState.pokemonSaved)
      );
  };
  return (
    <View style={styles.home__main}>
      <View style={styles.home__pokeContainer}>
        <Image
          style={styles.pokemon}
          source={{
            uri: `${pokemonState.pokemon?.sprites.front_default}`,
          }}
        />
        <Text style={styles.stats}>
          {pokemonState.pokemon?.stats.map(
            (stat) => "\n" + stat.stat.name + " - " + stat.base_stat
          )}
        </Text>
      </View>
      <View style={styles.buttons}>
        <PokeBallButton title="save" onPress={handleSave} />
      </View>
    </View>
  );
}
