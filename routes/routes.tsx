import DeleteScreen from '../screen/DeleteScreen';
import HomeScreen from '../screen/HomeScreen';
import UpdateScreen from '../screen/UpdateScreen'

export const routes = [
    {
        name: "Home",
        component: HomeScreen
    },
    {
        name: "Delete",
        component: DeleteScreen
    },
    {
        name: "Update",
        component: UpdateScreen
    }]
