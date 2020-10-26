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

const VerticalButton: React.FC<IButtonProps> = ({
  children,
  title,
  onPress = () => {},
  ...props
}) => {
  const animatedValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(animatedValue, {
      toValue: 0.5,
      useNativeDriver: true,
    }).start();
  };
  const handlePressOut = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      friction: 0,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View style={styles.button___vertical__Container}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          {/* fill space at the top */}
          <View style={{ flex: 1, justifyContent: "flex-start" }} />

          <View style={{ flex: 1 }}>
            <Animated.Text style={[styles.button___vertical__Text]}>
              {title}
            </Animated.Text>
          </View>

          {/* fill space at the bottom*/}
          <View style={{ flex: 1, justifyContent: "flex-end" }} />
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default VerticalButton;
