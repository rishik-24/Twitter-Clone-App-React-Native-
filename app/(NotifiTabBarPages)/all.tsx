import NotificationCards from "@/components/Cards/NotificationCards";
import { MyColors } from "@/theme/MyColors";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const all = () => {
  return (
    <ScrollView style={styles.Container}>
      <View style={styles.cardPosition}>
        <NotificationCards />
      </View>
    </ScrollView>
  );
};

export default all;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: MyColors.dark.background.secondary,
    paddingTop: 6,
  },

  cardPosition: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
