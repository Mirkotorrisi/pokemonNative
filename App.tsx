import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./Store";
import "react-native-gesture-handler";
import Index from "./routes/Index";
import * as Font from "expo-font";
import { AppLoading } from "expo";

export default function App() {
  const [loaded, setloaded] = useState(false);
  const fetchFonts = () =>
    Font.loadAsync({
      PokemonSolidNormal: require("./assets/fonts/PokemonSolidNormal.ttf"),

      PokemonHollowNormal: require("./assets/fonts/PokemonHollowNormal.ttf"),
    });
  if (loaded) {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  } else {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setloaded(true);
        }}
        onError={console.warn}
      />
    );
  }
}
