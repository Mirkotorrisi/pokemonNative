import { RootStore } from "../Store";
import { useSelector } from "react-redux";
import React, { useState } from "react";

import { WebView } from "react-native-webview";
import CrudButton from "../components/buttons/CrudButton";

export default function SubmitScreen() {
  const [key, setkey] = useState(0);
  const [uri, setUri] = useState("https://pokemon-team-server.herokuapp.com/");
  const pokemonSavedState = useSelector(
    (state: RootStore) => state.pokemonCRUD
  );
  const submitTeam = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pokemon1: {
          hp: pokemonSavedState.pokemonSaved[0].stats[0].base_stat,
          attack: pokemonSavedState.pokemonSaved[0].stats[1].base_stat,
          defense: pokemonSavedState.pokemonSaved[0].stats[2].base_stat,
          special_attack: pokemonSavedState.pokemonSaved[0].stats[3].base_stat,
          special_defense: pokemonSavedState.pokemonSaved[0].stats[4].base_stat,
          speed: pokemonSavedState.pokemonSaved[0].stats[5].base_stat,
          type1: pokemonSavedState.pokemonSaved[0].types[0].type.name,
          type2: pokemonSavedState.pokemonSaved[0].types[1].type.name,
          sprite: pokemonSavedState.pokemonSaved[0].sprites.front_default,
        },
        pokemon2: {
          hp: pokemonSavedState.pokemonSaved[1].stats[0].base_stat,
          attack: pokemonSavedState.pokemonSaved[1].stats[1].base_stat,
          defense: pokemonSavedState.pokemonSaved[1].stats[2].base_stat,
          special_attack: pokemonSavedState.pokemonSaved[1].stats[3].base_stat,
          special_defense: pokemonSavedState.pokemonSaved[1].stats[4].base_stat,
          speed: pokemonSavedState.pokemonSaved[1].stats[5].base_stat,
          type1: pokemonSavedState.pokemonSaved[1].types[0].type.name,
          type2: pokemonSavedState.pokemonSaved[1].types[1].type.name,
          sprite: pokemonSavedState.pokemonSaved[1].sprites.front_default,
        },
        pokemon3: {
          hp: pokemonSavedState.pokemonSaved[2].stats[0].base_stat,
          attack: pokemonSavedState.pokemonSaved[2].stats[1].base_stat,
          defense: pokemonSavedState.pokemonSaved[2].stats[2].base_stat,
          special_attack: pokemonSavedState.pokemonSaved[2].stats[3].base_stat,
          special_defense: pokemonSavedState.pokemonSaved[2].stats[4].base_stat,
          speed: pokemonSavedState.pokemonSaved[2].stats[5].base_stat,
          type1: pokemonSavedState.pokemonSaved[2].types[0].type.name,
          type2: pokemonSavedState.pokemonSaved[2].types[1].type.name,
          sprite: pokemonSavedState.pokemonSaved[2].sprites.front_default,
        },
      }),
    };
    await fetch(
      "https://pokemon-team-server.herokuapp.com",
      requestOptions
    ).then((res) => {
      if (res.status == 403) {
        alert("Log in to submit your team!");
        setUri(uri + "/login");
      } else if (res.status == 405) {
        alert(
          "You already posted your team, delete it to post another one (All it's progress will be lost)"
        );
      } else {
        setkey(key + 1);
      }
    });
  };
  return (
    <>
      <CrudButton onPress={submitTeam} title="Submit" />
      <WebView
        key={key}
        source={{
          uri: uri,
        }}
      />
    </>
  );
}
