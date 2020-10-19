import DeleteScreen from "../screen/DeleteScreen";
import HomeScreen from "../screen/HomeScreen";
import UpdateScreen from "../screen/UpdateScreen";
import WebScreen from "../screen/WebScreen";

export const routes = [
  {
    name: "Home",
    component: HomeScreen,
  },
  {
    name: "Delete",
    component: DeleteScreen,
  },
  {
    name: "Update",
    component: UpdateScreen,
  },
  {
    name: "Web",
    component: WebScreen,
  },
];
