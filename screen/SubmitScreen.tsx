import { RootStore } from "../Store";
import { useSelector } from "react-redux";
import React, { useState } from "react";

import { WebView } from "react-native-webview";
import CrudButton from "../components/buttons/CrudButton";
import HeaderButton from "../components/buttons/HeaderButton";
import { Alert, View } from "react-native";
import PokemonSavedContainer from "../components/containers/PokemonSavedContainer";
import styles from "../assets/styles";

export default function SubmitScreen(props: any) {
  const [key, setkey] = useState(0);
  const [uri, setUri] = useState("https://pokemon-team-server.herokuapp.com/");
  const pokemonSavedState = useSelector(
    (state: RootStore) => state.pokemonCRUD
  );
  let pokemonsToSend: any[] = [];
  for (const pokemon of pokemonSavedState.pokemonSaved) {
    if (pokemon.types.length > 1) {
      pokemonsToSend.push({
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        special_attack: pokemon.stats[3].base_stat,
        special_defense: pokemon.stats[4].base_stat,
        speed: pokemon.stats[5].base_stat,
        type1: pokemon.types[0].type.name,
        type2: pokemon.types[1].type.name,
        sprite: pokemon.sprites.front_default,
      });
    } else {
      pokemonsToSend.push({
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        special_attack: pokemon.stats[3].base_stat,
        special_defense: pokemon.stats[4].base_stat,
        speed: pokemon.stats[5].base_stat,
        type1: pokemon.types[0].type.name,
        type2: pokemon.types[0].type.name,
        sprite: pokemon.sprites.front_default,
      });
    }
  }
  const submitTeam = async () => {
    if (pokemonSavedState.pokemonSaved.length !== 3) {
      Alert.alert(
        "Forbidden",
        "U must have no more and no less than 3 pokemon saved"
      );
    } else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pokemon1: pokemonsToSend[0],
          pokemon2: pokemonsToSend[1],
          pokemon3: pokemonsToSend[2],
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
    }
  };
  return (
    <View style={styles.home__container}>
      <HeaderButton navigation={props.navigation} />

      <CrudButton onPress={submitTeam} title="Submit Your Team!" />
      <WebView
        key={key}
        source={{
          uri: uri,
        }}
      />
      <PokemonSavedContainer navigation={props.navigation} />
    </View>
  );
}
