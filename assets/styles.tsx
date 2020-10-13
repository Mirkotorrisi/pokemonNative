import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  home__container: {
    backgroundColor: "#c7a008",
    fontFamily: "PokemonSolidNormal",
    width: "100%",
    height: "100%",
    flex: 5,
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  home__search__textInput: {
    height: 40,
    width: "70%",
    borderColor: "#2a75bb",
    borderWidth: 3,
    color: "#2a75bb",
    fontFamily: "notoserif",

    borderRadius: 10,
    paddingLeft: 15,
    marginLeft: 10,
    backgroundColor: "#c7a008",
  },
  home__search: {
    backgroundColor: "#ffcb05",
    borderColor: "#2a75bb",
    borderWidth: 3,
    borderRadius: 12,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  home__main: {
    width: "100%",
    flex: 30,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",

  },
  home__pokeContainer: {
    width: "100%",
    flex: 3,
    justifyContent: "center",
    borderColor: "#2a75bb",
    borderWidth: 3,
    borderRadius: 12,
    zIndex: -1
  },
  home__pokemonName: {
    fontSize: 40,
    color: "#3c5aa6",
    display: "flex",
    borderRadius: 15,
    borderColor: "#2a75bb",
    backgroundColor: "#c7a008",
    fontFamily: "PokemonHollowNormal",
  },
  home__footer: {
    flexDirection: "row",
  },
  home__crudButtons: {

    width: "30%",

    alignItems: "center",
  },
  pokemon: {
    width: "80%",
    height: "70%",
    zIndex: 1
  },
  stats: {
    backgroundColor: "#2a75bb",
    fontFamily: "PokemonHollowNormal",
    color: "white",
    padding: 4,
    borderRadius: 10,
    zIndex: 2
  },
  pokemonTiny: {
    width: 100,
    height: 100,
    zIndex: 5
  },
  container: {
    fontFamily: "PokemonHollowNormal",
    width: "100%",
    height: "100%",
    flex: 5,
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },

  buttons: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    paddingRight: 15
  },

  pokemonSaved: {
    borderColor: "#2a75bb",
    borderWidth: 3,
    borderRadius: 12,
    zIndex: -5
  },

  appButtonContainer: {
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 100,
    height: 100,
    paddingBottom: 20
  },
  crudButtonContainer: {
    borderRadius: 10,
    borderColor: "#2222",

    paddingHorizontal: 12,
    shadowColor: "#ffcb99",
    width: 100,
    height: 50,
    backgroundColor: "#ffcb05",
    paddingBottom: 25,
    shadowOpacity: 0.8,
    elevation: 6,
    margin: 5,
    shadowRadius: 5,
    shadowOffset: { width: 156, height: 50 },
    borderWidth: 2,
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
