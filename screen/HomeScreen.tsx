import { Button, View } from "react-native";
import { RootStore } from "../Store";
import { useSelector } from "react-redux";
import React from "react";

import styles from "../assets/styles";
import PokeContainer from "../components/containers/PokeContainer";
import Searchbar from "../components/field/Searchbar";
import PokemonSavedContainer from "../components/containers/PokemonSavedContainer";
import HeaderButton from "../components/buttons/HeaderButton";

export default function HomeScreen(props: any) {
  const pokemonState = useSelector((state: RootStore) => state.pokemon);
  return (
    <View style={styles.home__container}>
      <HeaderButton navigation={props.navigation} />
      <Searchbar />
      {pokemonState.pokemon && <PokeContainer />}

      <View style={styles.home__footer}>
        <PokemonSavedContainer navigation={props.navigation} />
      </View>
    </View>
  );
}
