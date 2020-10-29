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
            label="Home"
            style={styles.drawerLink}
            icon={() => (
              <Avatar.Image
                source={{
                  uri:
                    "data:image/png;base64,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",
                }}
                size={65}
                style={styles.avatar}
              />
            )}
            onPress={() => {
              props.navigation.navigate("Home");
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
            label="Update a Pokemon"
            style={styles.drawerLink}
            icon={() => (
              <Avatar.Image
                source={{
                  uri:
                    "data:image/png;base64,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",
                }}
                size={65}
                style={styles.avatar}
              />
            )}
            onPress={() => {
              props.navigation.navigate("Update");
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
