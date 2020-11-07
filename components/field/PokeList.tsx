import { View } from "react-native";

import React, { useRef } from "react";
import { FlatList } from "react-native";
import styles from "../../assets/styles";
import SmallButton from "../buttons/SmallButton";
import {
  kanto,
  jhoto,
  hoenn,
  sinnoh,
  unova,
  kalos,
  alola,
  galar,
} from "../../assets/pokemons";
import MySwipeable from "../buttons/MySwipeable";

const PokeList = () => {
  const pokedex: { name: string }[] = [];
  const regions = [kanto, jhoto, hoenn, sinnoh, unova, kalos, alola, galar];
  for (const region of regions) {
    for (const iterator of region) {
      const obj = { name: iterator };
      pokedex.push(obj);
    }
  }

  const flatListRef = useRef<FlatList<{ name: string }>>(null);
  const scrollList = (index: number) => {
    if (flatListRef.current)
      flatListRef.current.scrollToIndex({ index: index });
  };
  const keyExtractor = (item: any) => `${item.name}`;
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
        keyExtractor={keyExtractor}
        style={styles.pokedex__list__pokemons}
        onScrollToIndexFailed={() => alert("something went wrong")}
        getItemLayout={(data, index) => ({
          length: 200,
          offset: 100 * index,
          index,
        })}
        renderItem={renderItem}
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
