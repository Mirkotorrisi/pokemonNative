import DeleteScreen from "../screen/DeleteScreen";
import HomeScreen from "../screen/HomeScreen";
import SubmitScreen from "../screen/SubmitScreen";
import TeamsScreen from "../screen/TeamsScreen";
import PokedexScreen from "../screen/PokedexScreen";

export const routes = [
  {
    name: "Search",
    component: HomeScreen,
  },
  {
    name: "Pokedex",
    component: PokedexScreen,
  },
  {
    name: "Delete",
    component: DeleteScreen,
  },
  {
    name: "Submit",
    component: SubmitScreen,
  },
  {
    name: "Teams",
    component: TeamsScreen,
  },
];
