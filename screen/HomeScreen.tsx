import { Switch, View } from "react-native";
import { RootStore } from "../Store";
import { useSelector } from "react-redux";
import React, { useState } from "react";

import styles from "../assets/styles";
import PokeContainer from "../components/containers/PokeContainer";
import Searchbar from "../components/field/Searchbar";
import PokemonSavedContainer from "../components/containers/PokemonSavedContainer";
import NavButtonsContainer from "../components/containers/NavButtonsContainer";
import PokeList from "../components/field/PokeList";

export default function HomeScreen() {
  const pokemonState = useSelector((state: RootStore) => state.pokemon);
  const [listMode, setListMode] = useState(false);
  const toggleSwitch = () => setListMode((previousState) => !previousState);
  return (
    <View style={styles.home__container}>
      {listMode ? <Searchbar /> : <PokeList />}
      {pokemonState.pokemon && <PokeContainer />}
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={listMode ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={listMode}
        style={styles.button__switch}
      />
      <View style={styles.home__footer}>
        <PokemonSavedContainer />
        <NavButtonsContainer />
      </View>
    </View>
  );
}
