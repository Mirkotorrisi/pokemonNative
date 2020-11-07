import {
  View,
  ScrollView,
  Image,
  Animated,
  TouchableHighlight,
} from "react-native";
import { RootStore } from "../../Store";
import { useSelector } from "react-redux";
import React, { useRef, useState } from "react";

import VerticalButton from "../../components/buttons/VerticalButton";
import styles from "../../assets/styles";
import { Ionicons } from "@expo/vector-icons";
import { PokemonType } from "../../redux/actions/PokemonActionTypes";

export default function PokemonSavedContainer({ navigation }: any) {
  const pokemonSavedState = useSelector(
    (state: RootStore) => state.pokemonCRUD
  );
  const actionBarX = useRef(new Animated.Value(0)).current;
  const [showPokedex, setShowPokedex] = useState(false);

  const handleShowPokedex = () => {
    setShowPokedex(!showPokedex);
    if (!showPokedex) {
      Animated.timing(actionBarX, {
        toValue: 320,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(actionBarX, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  };
  return (
    <View style={styles.home__footer__pokemonSaved}>
      <Animated.View
        style={{
          width: actionBarX, // Bind opacity to animated value
        }}
      >
        <ScrollView
          horizontal={true}
          style={[styles.home__footer__pokemonSaved__list]}
          contentContainerStyle={{
            alignItems: "center",
            paddingRight: 15,
          }}
        >
          {pokemonSavedState.pokemonSaved.map((newPokemon: PokemonType) => {
            return (
              <Image
                key={newPokemon.sprites.front_default.substring(73)}
                style={styles.pokemonTiny}
                source={{
                  uri: `${newPokemon.sprites.front_default}`,
                }}
              />
            );
          })}
          <TouchableHighlight onPress={() => navigation.navigate("Delete")}>
            <Ionicons name={"ios-trash"} size={50} color={"#2a75bb"} />
          </TouchableHighlight>
        </ScrollView>
      </Animated.View>

      <VerticalButton title={"TEAM"} onPress={handleShowPokedex} />
    </View>
  );
}
