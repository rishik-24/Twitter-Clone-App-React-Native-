import { MyColors } from "@/theme/MyColors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NotificationCards = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.CardTitle}>NotificationCards</Text>
    </View>
  );
};

export default NotificationCards;

const styles = StyleSheet.create({
  card: {
    height: 180,
    width: 340,
    backgroundColor: MyColors.dark.background.hover,
    borderRadius: 10,
    marginVertical: 6,
  },

  cardAvatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    margin: 10,
  },
  CardTitle: {
    color: MyColors.dark.text.primary,
    fontSize: 16,
    fontWeight: "600",
    margin: 10,
  },

  cardDescription: {
    color: MyColors.dark.text.secondary,
    fontSize: 14,
    marginHorizontal: 10,
  },
});
