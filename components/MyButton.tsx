import React from "react";
import { GestureResponderEvent } from "react-native";
import { TouchableOpacity, Text, Image } from "react-native";

import styles from "../assets/styles";

export interface IButtonProps {
  children?: React.ReactNode;
  props?: any;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  title: string;
}

const MyButton: React.FC<IButtonProps> = ({
  children,
  title,
  onPress = () => {},
  ...props
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Image source={require("../assets/pokeball.png")} style={styles.img} />
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};
export default MyButton;
