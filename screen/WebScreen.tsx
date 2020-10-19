import { RootStore } from "../Store";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";

import { WebView } from "react-native-webview";

export default function WebScreen() {
  const pokemonSavedState = useSelector(
    (state: RootStore) => state.pokemonCRUD
  );
  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pokemon1: pokemonSavedState.pokemonSaved[0].sprites.front_default,
        pokemon2: pokemonSavedState.pokemonSaved[1].sprites.front_default,
        pokemon3: pokemonSavedState.pokemonSaved[2].sprites.front_default,
      }),
    };
    const postPokemonSaved = async () => {
      await fetch("https://pokemon-mirko-server.herokuapp.com", requestOptions);
    };
    postPokemonSaved();
  }, []);

  return (
    <WebView source={{ uri: "https://pokemon-mirko-server.herokuapp.com/" }} />
  );
}
