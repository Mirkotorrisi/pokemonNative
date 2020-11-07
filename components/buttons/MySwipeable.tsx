import React from "react";
import { Animated, Text, View, Image } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import styles from "../../assets/styles";
export interface MySwipeProps {
  children?: React.ReactNode;
  props?: any;
  pokeName: string;
  pokeNumber: number;
}
const MySwipeable: React.FC<MySwipeProps> = ({
  children,
  pokeName,
  pokeNumber,
  ...props
}) => {
  console.log(pokeNumber, pokeName);

  const renderLeftActions = () => {
    return <Animated.View></Animated.View>;
  };

  return (
    <Swipeable renderLeftActions={renderLeftActions}>
      <View style={styles.button__list__container}>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeNumber}.png`,
          }}
          style={styles.pokemonTiny}
        />
        <Text style={styles.button__list__text}>{pokeName}</Text>
      </View>
    </Swipeable>
  );
};

export default MySwipeable;
