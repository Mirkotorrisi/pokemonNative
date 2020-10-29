import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  home__container: {
    backgroundColor: "#ffcb05",
    fontFamily: "PokemonSolidNormal",
    width: "100%",
    height: "100%",
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
    flex: 0.3,
    borderRadius: 12,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  home__main: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  home__pokeContainer: {
    width: "100%",
    flex: 3,
    justifyContent: "center",
    borderRadius: 12,
    zIndex: -1,
    shadowColor: "#ffdc54",
    shadowOpacity: 1.8,
    shadowRadius: 0.84,
    elevation: 3,
    shadowOffset: { width: 1, height: 5 },
  },
  home__pokemonName: {
    fontSize: 40,
    color: "#3c5aa6",
    borderRadius: 55,
    borderColor: "#2a75bb",
    backgroundColor: "#ffcb05",
    fontFamily: "PokemonHollowNormal",
  },
  home__footer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  home__footer__pokemonSaved: {
    flex: 1,
    marginTop: 20,
    flexDirection: "row",
  },
  home__footer__pokemonSaved__list: {
    zIndex: -5,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: -5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 2,
  },
  home__footer__crudButtons: {
    position: "absolute",
    width: "30%",
    left: "70%",
    alignItems: "center",
  },
  pokemon: {
    transform: [{ translateY: 40 }, { translateX: -10 }],
    height: "90%",
    zIndex: 1,
  },
  stats: {
    backgroundColor: "#2a75bb",
    fontFamily: "PokemonHollowNormal",
    color: "white",
    padding: 4,
    borderRadius: 10,
    zIndex: 2,
  },
  pokemonTiny: {
    width: 100,
    height: 100,
    zIndex: 5,
  },
  container: {
    fontFamily: "PokemonHollowNormal",
    width: "100%",
    height: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },

  buttons: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    paddingRight: 15,
  },

  button___pokeBall__Container: {
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 100,
    height: 100,
    paddingBottom: 20,
  },
  button__switch: {
    top: -60,
  },
  button___nav__Container: {
    borderRadius: 10,
    borderColor: "#dbae00",
    paddingHorizontal: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 100,
    height: 50,
    backgroundColor: "#ffcb05",
    paddingBottom: 25,
    margin: 5,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 2,
    borderTopWidth: 2,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  button___pokeBall__Text: {
    top: "60%",
    fontSize: 18,
    position: "absolute",
    color: "#3c5aa6",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },

  button__list__container: {
    backgroundColor: "#ffcb05",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 150,
    height: 50,
  },
  button__list__text: {
    fontFamily: "PokemonSolidNormal",
    fontSize: 20,
    color: "#2a75bb",
  },
  button___vertical__Container: {
    shadowRadius: 3.84,
    margin: 0,
    alignItems: "center",
    borderTopEndRadius: 14,
    borderBottomEndRadius: 14,
    shadowColor: "#3c5aa6",
    backgroundColor: "#2a75bb",
    shadowOpacity: 0.5,
    elevation: 3,
    shadowOffset: { width: 3, height: 2 },
  },
  button___vertical__Text: {
    color: "#ffcb05",
    transform: [{ rotate: "90deg" }],
  },
  pokedex__list: {
    display: "flex",
    justifyContent: "center",
    flex: 0.3,
  },
  team__container: {
    backgroundColor: "#2a75bb",
    marginVertical: 5,
    width: "100%",
  },
  team__pokemons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  team__pokemon: {
    display: "flex",
    flexDirection: "column",
  },
  team__date: {
    fontSize: 15,
    fontStyle: "italic",
    color: "#ffcb05",
  },
  team__user: {
    fontSize: 20,

    color: "#ffcb05",
    fontFamily: "PokemonSolidNormal",
  },
  team__stat: {
    fontSize: 10,
    color: "#ffcb05",
  },
  ///////
  //
  ///
  ///
  //DRAWER-CONTENT STYLES
  drawerContent: {
    backgroundColor: "#ffcb05",
    flex: 1,
  },
  drawerLink: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#2a75bb",
    color: "white",
  },
  avatar: {
    borderColor: "#ffcb05",
    borderWidth: 5,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default styles;
