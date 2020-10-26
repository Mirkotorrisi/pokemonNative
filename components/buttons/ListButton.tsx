import React from "react";
import { Animated, GestureResponderEvent, View } from "react-native";
import { TouchableWithoutFeedback, Text, Image } from "react-native";

import styles from "../../assets/styles";

export interface IButtonProps {
  children?: React.ReactNode;
  props?: any;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  title: string;
}

const ListButton: React.FC<IButtonProps> = ({
  children,
  title,
  onPress = () => {},
  ...props
}) => {
  const animatedValue = new Animated.Value(1);

  const animatedStyle = {
    transform: [{ scale: animatedValue }],
  };

  const handlePressIn = () => {
    Animated.spring(animatedValue, {
      toValue: 0.8,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };
  const handlePressOut = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      friction: 3,
      tension: 0,
      useNativeDriver: true,
    }).start();
  };
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <View style={styles.button__list__container}>
        <Animated.Text style={[styles.button__list__text, animatedStyle]}>
          {title}
        </Animated.Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListButton;
