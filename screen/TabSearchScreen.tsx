import { View } from "react-native";
import { RootStore } from "../Store";
import { useSelector } from "react-redux";
import React from "react";

import styles from "../assets/styles";
import PokeContainer from "../components/containers/PokeContainer";
import Searchbar from "../components/field/Searchbar";

export default function TabSearchScreen() {
  const pokemonState = useSelector((state: RootStore) => state.pokemon);

  return (
    <View style={styles.home__container}>
      <Searchbar />
      {pokemonState.pokemon && <PokeContainer />}
    </View>
  );
}
