import NotifiTabBar from "@/components/TabBarOptions/NotifiTabBar";
import { MyColors } from "@/theme/MyColors";
import React from "react";
import { StyleSheet } from "react-native";

const notification = () => {
  return (
    <>
      <NotifiTabBar />
    </>
  );
};

export default notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: MyColors.dark.background.secondary,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: MyColors.dark.text.primary,
  },
});
