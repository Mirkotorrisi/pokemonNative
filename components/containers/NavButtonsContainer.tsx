import { View, Alert } from "react-native";
import { RootStore } from "../../Store";
import { useSelector } from "react-redux";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import CrudButton from "../../components/buttons/CrudButton";
import styles from "../../assets/styles";

export default function NavButtonsContainer() {
  const navigation = useNavigation();
  const goDelete = () => {
    navigation.navigate("Delete");
  };
  const goUpdate = () => {
    navigation.navigate("Update");
  };
  const goTeams = () => {
    navigation.navigate("Teams");
  };
  const goSubmit = () => {
    if (pokemonSavedState.pokemonSaved.length !== 3) {
      Alert.alert(
        "Forbidden",
        "U must have no more and no less than 3 pokemon saved"
      );
    } else {
      navigation.navigate("Submit");
    }
  };
  const pokemonSavedState = useSelector(
    (state: RootStore) => state.pokemonCRUD
  );
  return (
    <View style={styles.home__footer__crudButtons}>
      <CrudButton title="Submit" onPress={goSubmit} />
      <CrudButton title="Delete" onPress={goDelete} />
      <CrudButton title="Update" onPress={goUpdate} />
      <CrudButton title="Teams" onPress={goTeams} />
    </View>
  );
}
