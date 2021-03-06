import { routes } from "./routes";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerContent from "../components/containers/DrawerContent";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();
export default function Index() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        {routes.map((route) => {
          return (
            <Drawer.Screen
              name={route.name}
              component={route.component}
              key={route.name}
            />
          );
        })}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
