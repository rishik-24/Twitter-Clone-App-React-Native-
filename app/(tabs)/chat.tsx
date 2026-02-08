import { MyColors } from "@/theme/MyColors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const chat = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: MyColors.dark.background.secondary,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text style={styles.titleStyle}>All Chats here!</Text>
      </View>
    </View>
  );
};

export default chat;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 24,
    fontWeight: "bold",
    color: MyColors.brand.primary,
  },
});
