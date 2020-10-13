import DeleteScreen from '../screen/DeleteScreen';
import HomeScreen from '../screen/HomeScreen';
import UpdateScreen from '../screen/UpdateScreen';
import CreditScreen from '../screen/CreditScreen';

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
    },
    {
        name: "Credits",
        component: CreditScreen
    },
]
