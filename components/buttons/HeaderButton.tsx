import React from "react";
import { View } from "react-native";
import { TouchableWithoutFeedback, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../../assets/styles";

const HeaderButton = ({ navigation }: any) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
      <View style={styles.button___header__Container}>
        <Ionicons name={"ios-menu"} size={30} color={"#2a75bb"} />
        <Text style={styles.button___header__Text}>Pokemon Teams</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HeaderButton;
