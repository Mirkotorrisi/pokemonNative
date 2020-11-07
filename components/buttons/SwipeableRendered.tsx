import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import styles from "../../assets/styles";
import { GetPokemon, SavePokemon } from "../../redux/actions/PokemonActions";
import { RootStore } from "../../Store";
import PokeBallButton from "./PokeBallButton";

const SwipeableRendered = (pokemonName: string) => {
  const pokemonState = useSelector((state: RootStore) => state.pokemon);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
  }, []);
  const pokemonSavedState = useSelector(
    (state: RootStore) => state.pokemonCRUD
  );

  const handleSave = () => {
    if (pokemonState.pokemon)
      dispatch(
        SavePokemon(pokemonState.pokemon, pokemonSavedState.pokemonSaved)
      );
  };
  console.log(pokemonName);
  return (
    <View style={{ flexDirection: "row" }}>
      <PokeBallButton title="save" onPress={handleSave} />
      <Text style={styles.stats}>
        {pokemonState.pokemon?.stats.map(
          (stat) => "\n" + stat.stat.name + " - " + stat.base_stat
        )}
      </Text>
      )
    </View>
  );
};

export default SwipeableRendered;
