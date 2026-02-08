import { MyColors } from "@/theme/MyColors";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Tabs } from "expo-router";
import React from "react";

import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Layout = () => {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            height: 100,
            paddingBottom: 20,
            paddingTop: 10,
            borderTopWidth: 0.5,
            borderTopColor: "#363636",
            backgroundColor: MyColors.dark.background.secondary,
          },
          headerLeft: () => (
            <TouchableOpacity
              hitSlop={30}
              style={{ marginLeft: 16 }}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop",
                }}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                }}
              />
            </TouchableOpacity>
          ),

          tabBarShowLabel: false,
          tabBarActiveTintColor: colorScheme === "dark" ? "white" : "black",
          headerTransparent: false,
          headerShadowVisible: false,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "",
            headerStyle: {
              backgroundColor: MyColors.dark.background.secondary,
            },
            headerTitle: () => (
              <AntDesign
                name="x"
                size={24}
                color="#FFF"
              />
            ),

            headerTitleAlign: "center",

            headerRight: () => (
              <>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 16,
                    gap: 20,
                  }}>
                  <TouchableOpacity hitSlop={30}>
                    <Text
                      style={{
                        color: MyColors.dark.text.primary,
                        fontWeight: "bold",
                        fontSize: 15,
                      }}>
                      Upgrade
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity hitSlop={30}>
                    <SimpleLineIcons
                      name="options-vertical"
                      size={22}
                      color="#FFF"
                    />
                  </TouchableOpacity>
                </View>
              </>
            ),

            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={26}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "",
            tabBarIcon({ color }) {
              return (
                <Feather
                  name="search"
                  size={26}
                  color={color}
                />
              );
            },
            headerStyle: {
              backgroundColor: MyColors.dark.background.secondary,
            },
            headerTitle: () => (
              <TextInput
                style={styles.input}
                placeholder="Search X"
                placeholderTextColor={MyColors.dark.text.secondary}
              />
            ),

            headerTitleAlign: "center",

            headerRight: () => (
              <>
                <TouchableOpacity
                  hitSlop={30}
                  style={{ marginRight: 16 }}>
                  <Ionicons
                    name="settings-outline"
                    size={24}
                    color={MyColors.dark.text.primary}
                  />
                </TouchableOpacity>
              </>
            ),
          }}
        />
        <Tabs.Screen
          name="grok"
          options={{
            title: "Grok",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "planet" : "planet-outline"}
                size={26}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="notification"
          options={{
            title: "Notifications",
            headerTitleStyle: {
              paddingLeft: 30,
            },
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome
                name={focused ? "bell" : "bell-o"}
                size={26}
                color={color}
              />
            ),
            headerStyle: {
              backgroundColor: MyColors.dark.background.secondary,
            },
            headerRight: () => (
              <TouchableOpacity
                hitSlop={30}
                style={{ marginRight: 16 }}>
                <Ionicons
                  name="settings-outline"
                  size={24}
                  color={MyColors.dark.text.primary}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            title: "Chat",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "mail" : "mail-outline"}
                size={26}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    width: 210,
    backgroundColor: MyColors.dark.background.secondary,
    borderColor: MyColors.dark.background.border,
  },
});
