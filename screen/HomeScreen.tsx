import { Button, View } from "react-native";
import { RootStore } from "../Store";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";

import styles from "../assets/styles";
import PokeContainer from "../components/containers/PokeContainer";
import Searchbar from "../components/field/Searchbar";
import TabListScreen from "../screen/TabListScreen";
import TabSearchScreen from "../screen/TabSearchScreen";
import PokemonSavedContainer from "../components/containers/PokemonSavedContainer";
import HeaderButton from "../components/buttons/HeaderButton";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen(props: any) {
  const pokemonState = useSelector((state: RootStore) => state.pokemon);
  const Tab = createBottomTabNavigator();
  useEffect(() => {
    console.log("home loaded");
    return () => {
      console.log("home deleted");
    };
  });
  return (
    <View style={styles.home__container}>
      <HeaderButton navigation={props.navigation} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = "";
            if (route.name === "Search") {
              iconName = "ios-search";
            } else if (route.name === "List") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#2a75bb",
          inactiveTintColor: "#ffcb05",
        }}
      >
        <Tab.Screen name="Search" component={TabSearchScreen} />
        <Tab.Screen name="List" component={TabListScreen} />
      </Tab.Navigator>
      <View style={styles.home__footer}>
        <PokemonSavedContainer navigation={props.navigation} />
      </View>
    </View>
  );
}
