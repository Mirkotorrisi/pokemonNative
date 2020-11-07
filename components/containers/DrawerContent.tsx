import React from "react";
import { View } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Avatar, Drawer } from "react-native-paper";
import styles from "../../assets/styles";

export default function DrawerContent(props: any) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Drawer.Item
            label="Search by Name"
            style={styles.drawerLink}
            icon={() => (
              <Avatar.Image
                source={{
                  uri:
                    "https://cdn2.iconfinder.com/data/icons/apple-inspire-white/100/Apple-31-512.png",
                }}
                size={65}
                style={styles.avatar}
              />
            )}
            onPress={() => {
              props.navigation.navigate("Search");
            }}
          />
          <Drawer.Item
            label="Delete a Pokemon"
            style={styles.drawerLink}
            icon={() => (
              <Avatar.Image
                source={{
                  uri:
                    "https://w7.pngwing.com/pngs/616/37/png-transparent-trash-can-illustration-computer-icons-icon-design-delete-button-miscellaneous-text-rectangle.png",
                }}
                size={65}
                style={styles.avatar}
              />
            )}
            onPress={() => {
              props.navigation.navigate("Delete");
            }}
          />
          <Drawer.Item
            label="Pokedex"
            style={styles.drawerLink}
            icon={() => (
              <Avatar.Image
                source={{
                  uri:
                    "https://img.rankedboost.com/wp-content/uploads/2016/07/Pokemon-Go-Pok%C3%A9dex-300x229.png",
                }}
                size={65}
                style={styles.avatar}
              />
            )}
            onPress={() => {
              props.navigation.navigate("Pokedex");
            }}
          />
          <Drawer.Item
            label="Submit your Team"
            style={styles.drawerLink}
            icon={() => (
              <Avatar.Image
                source={{
                  uri:
                    "https://e7.pngegg.com/pngimages/801/890/png-clipart-airplane-paper-plane-submit-button-cdr-angle.png",
                }}
                size={65}
                style={styles.avatar}
              />
            )}
            onPress={() => {
              props.navigation.navigate("Submit");
            }}
          />
          <Drawer.Item
            label="Show all Teams"
            style={styles.drawerLink}
            icon={() => (
              <Avatar.Image
                source={{
                  uri:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRutLVRnlsalg9l4coYi-w8lTZetMEj4b9qUg&usqp=CAU",
                }}
                size={65}
                style={styles.avatar}
              />
            )}
            onPress={() => {
              props.navigation.navigate("Teams");
            }}
          />
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <Drawer.Item label="sign out" />
      </Drawer.Section>
    </View>
  );
}
