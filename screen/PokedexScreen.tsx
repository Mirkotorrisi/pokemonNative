import { Button, View } from "react-native";

import React from "react";

import styles from "../assets/styles";
import PokemonSavedContainer from "../components/containers/PokemonSavedContainer";
import PokeList from "./TabListScreen";
import HeaderButton from "../components/buttons/HeaderButton";

export default function HomeScreen(props: any) {
  return (
    <View style={styles.home__container}>
      <HeaderButton navigation={props.navigation} />

      <PokeList />

      <View style={styles.home__footer}>
        <PokemonSavedContainer navigation={props.navigation} />
      </View>
    </View>
  );
}
