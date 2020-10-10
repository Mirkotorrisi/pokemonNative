import React from "react";
import { Provider } from "react-redux";
import store from "./Store";
import HomeScreen from "./HomeScreen";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DeleteScreen from "./DeleteScreen";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Delete" component={DeleteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
