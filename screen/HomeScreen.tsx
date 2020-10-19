import {
  View,
  ScrollView,
  TextInput,
  Text,
  Image,
  Animated,
} from "react-native";
import { RootStore } from "../Store";
import { useSelector, useDispatch } from "react-redux";
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MyButton from "../components/MyButton";
import CrudButton from "../components/CrudButton";
import VerticalButton from "../components/VerticalButton";
import {
  GetPokemon,
  BoostPokemon,
  SavePokemon,
} from "../redux/actions/PokemonActions";
import styles from "../assets/styles";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(GetPokemon(pokemonName));
  };
  const navigation = useNavigation();
  const goDelete = () => {
    navigation.navigate("Delete");
  };
  const goUpdate = () => {
    navigation.navigate("Update");
  };
  const goCredits = () => {
    navigation.navigate("Credits");
  };
  const handleBoost = () => {
    if (pokemonState.pokemon) dispatch(BoostPokemon(pokemonState.pokemon));
  };
  const handleSave = () => {
    if (pokemonState.pokemon)
      dispatch(
        SavePokemon(pokemonState.pokemon, pokemonSavedState.pokemonSaved)
      );
  };
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
  const [pokemonName, setPokemonName] = useState("");
  const [showPokedex, setShowPokedex] = useState(false);
  const pokemonState = useSelector((state: RootStore) => state.pokemon);
  const pokemonSavedState = useSelector(
    (state: RootStore) => state.pokemonCRUD
  );
  const actionBarX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.home__container}>
      <View style={styles.home__search}>
        <TextInput
          style={styles.home__search__textInput}
          onChangeText={(value) => setPokemonName(value)}
          value={pokemonName}
        />
        <MyButton title="search" onPress={handleSubmit} />
      </View>
      {pokemonState.pokemon && (
        <View style={styles.home__main}>
          <View style={styles.home__pokeContainer}>
            <Image
              style={styles.pokemon}
              source={{
                uri: `${pokemonState.pokemon?.sprites.front_default}`,
              }}
            />
            <Text style={styles.stats}>
              <Text style={styles.home__pokemonName}> {pokemonName}</Text>

              {pokemonState.pokemon?.stats.map(
                (stat) => "\n" + stat.stat.name + " - " + stat.base_stat
              )}
            </Text>
          </View>
          <View style={styles.buttons}>
            <MyButton title="boost" onPress={handleBoost} />
            <MyButton title="save" onPress={handleSave} />
          </View>
        </View>
      )}
      <View style={styles.home__footer}>
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
              {pokemonSavedState.pokemonSaved.map((newPokemon) => {
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

          <VerticalButton title={"POKDEX"} onPress={handleShowPokedex} />
        </View>
        <View style={styles.home__footer__crudButtons}>
          <CrudButton title="Credits" onPress={goCredits} />
          <CrudButton title="Delete" onPress={goDelete} />
          <CrudButton title="Update" onPress={goUpdate} />
        </View>
      </View>
    </View>
  );
}
