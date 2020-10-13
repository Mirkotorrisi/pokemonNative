import React from "react";
import { Provider } from "react-redux";
import store from "./Store";
import "react-native-gesture-handler";
import Index from './routes/Index';
import * as Font from 'expo-font'

export default function App() {
  const [loaded] = Font.useFonts({
    PokemonSolidNormal: require('./assets/fonts/PokemonSolidNormal.ttf'),

    PokemonHollowNormal: require('./assets/fonts/PokemonHollowNormal.ttf'),
  });
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}
