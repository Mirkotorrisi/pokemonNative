import { View, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import PokeBallButton from "../../components/buttons/PokeBallButton";
import { GetPokemon } from "../../redux/actions/PokemonActions";
import styles from "../../assets/styles";

export default function Searchbar() {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(GetPokemon(pokemonName));
  };
  const [pokemonName, setPokemonName] = useState("");

  return (
    <View style={styles.home__search}>
      <TextInput
        style={styles.home__search__textInput}
        onChangeText={(value) => setPokemonName(value)}
        value={pokemonName}
      />
      <PokeBallButton title="search" onPress={handleSubmit} />
    </View>
  );
}
