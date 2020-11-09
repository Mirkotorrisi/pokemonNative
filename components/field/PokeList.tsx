import { View } from "react-native";

import React, { useRef } from "react";
import { FlatList } from "react-native";
import styles from "../../assets/styles";
import SmallButton from "../buttons/SmallButton";
import pokedex from "../../assets/pokemons";
import MySwipeable from "../buttons/MySwipeable";

const PokeList = () => {
  console.log("tutta la flatlist-----------------");

  const flatListRef = useRef<FlatList<{ name: string }>>(null);
  const scrollList = (index: number) => {
    if (flatListRef.current)
      flatListRef.current.scrollToIndex({ index: index });
  };
  const keyExtractor = (item: any) => `key-${item.name}`;
  const renderItem = (item: any) => {
    return (
      <MySwipeable pokeNumber={item.index + 1} pokeName={item.item.name} />
    );
  };
  return (
    <View style={styles.pokedex__list}>
      <FlatList
        data={pokedex}
        ref={flatListRef}
        renderItem={renderItem}
        keyExtractor={(item) => keyExtractor(item)}
        style={styles.pokedex__list__pokemons}
        onScrollToIndexFailed={() => alert("something went wrong")}
        getItemLayout={(data, index) => ({
          length: 100,
          offset: 100 * index,
          index,
        })}
      />
      <View style={{ flexDirection: "column", marginTop: 20 }}>
        <SmallButton onPress={() => scrollList(0)} title="Kanto" />
        <SmallButton onPress={() => scrollList(150)} title="Jhoto" />
        <SmallButton onPress={() => scrollList(250)} title="Hoenn" />
        <SmallButton onPress={() => scrollList(385)} title="Sinnoh" />
        <SmallButton onPress={() => scrollList(493)} title="Unova" />
        <SmallButton onPress={() => scrollList(648)} title="Kalos" />
        <SmallButton onPress={() => scrollList(720)} title="Alola" />
        <SmallButton onPress={() => scrollList(808)} title="Galar" />
      </View>
    </View>
  );
};
export default PokeList;
