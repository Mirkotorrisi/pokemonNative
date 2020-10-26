import { View, ScrollView, Image, Animated } from "react-native";
import { RootStore } from "../../Store";
import { useSelector } from "react-redux";
import React, { useRef, useState } from "react";

import VerticalButton from "../../components/buttons/VerticalButton";
import styles from "../../assets/styles";

export default function PokemonSavedContainer() {
  const pokemonSavedState = useSelector(
    (state: RootStore) => state.pokemonCRUD
  );
  const actionBarX = useRef(new Animated.Value(0)).current;
  const [showPokedex, setShowPokedex] = useState(false);

  const handleShowPokedex = () => {
    setShowPokedex(!showPokedex);
    if (!showPokedex) {
      Animated.timing(actionBarX, {
        toValue: 200,
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
        >
          {pokemonSavedState.pokemonSaved.map((newPokemon: any) => {
            return (
              <Image
                key={pokemonSavedState.pokemonSaved.indexOf(newPokemon)}
                style={styles.pokemonTiny}
                source={{
                  uri: `${newPokemon.sprites.front_default}`,
                }}
              />
            );
          })}
        </ScrollView>
      </Animated.View>

      <VerticalButton title={"TEAM"} onPress={handleShowPokedex} />
    </View>
  );
}
