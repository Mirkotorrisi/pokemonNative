import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: 200,
    borderColor: "#2a75bb",
    borderWidth: 3,
    color: "#2a75bb",
    borderRadius: 12,
    paddingLeft: 15,
    backgroundColor: "#c7a008",
  },
  search: {
    backgroundColor: "#ffcb05",
    fontFamily: "Pokemon Hollow",
    borderColor: "#2a75bb",
    borderWidth: 3,
    borderRadius: 12,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
    fontFamily: "Pokemon-Hollow",
    width: "100%",
    height: "100%",
    flex: 5,
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },

  pokeContainer: {
    width: "100%",
    flex: 3,
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
    backgroundColor: "#2a75bb",
    fontFamily: "Roboto",
    color: "white",
    padding: 4,
    borderRadius: 12,
  },
  pokemonSaved: {
    borderRadius: 12,
    height: 10,
    backgroundColor: "#2a75bb",
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
    color: "#3c5aa6",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
export default styles;
