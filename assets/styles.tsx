import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: 200,
    marginTop: 10,
    borderColor: "#FF6655",
    borderWidth: 3,
  },
  pokemon: {
    width: 200,
    height: 200,
  },
  pokemonTiny: {
    width: 100,
    height: 100,
  },
  container: {
    width: "100%",
    height: "100%",
    flex: 5,
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },

  pokeContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttons: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  stats: {
    backgroundColor: "#FF6655",
  },
  pokemonSaved: {
    backgroundColor: "#FF6655",
    height: 0,
  },
  search: {
    flexDirection: "row",
    justifyContent: "center",
  },
  appButtonContainer: {
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 100,
    height: 100,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  appButtonText: {
    top: "60%",
    fontSize: 18,
    position: "absolute",
    color: "#FF6655",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
export default styles;
