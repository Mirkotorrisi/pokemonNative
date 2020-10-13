import { View, Image, TouchableOpacity } from "react-native";
import { RootStore } from "../Store";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import MyButton from "../components/MyButton";

import { DeletePokemon } from "../redux/actions/PokemonActions";
import { useNavigation } from "@react-navigation/native";
import { PokemonType } from "../redux/actions/PokemonActionTypes";

import { WebView } from 'react-native-webview';

import styles from "../assets/styles";

export default function DeleteScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const goHome = () => {
    navigation.navigate("Home");
  };

  const handleDelete = (pokemonToDel: PokemonType) => {
    dispatch(DeletePokemon(pokemonToDel, pokemonSavedState.pokemonSaved));
  };
  const pokemonSavedState = useSelector(
    (state: RootStore) => state.pokemonCRUD
  );

  return (
    <WebView source={{ uri: 'http://mirkotorrisi.github.io/' }} />
  );
}
