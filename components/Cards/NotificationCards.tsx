import { MyColors } from "@/theme/MyColors";
import Entypo from "@expo/vector-icons/Entypo";
import Octicons from "@expo/vector-icons/Octicons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const NotificationCards = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.card}>
      {/* Left icon */}
      <View style={styles.leftIcon}>
        <Octicons
          name="north-star"
          size={24}
          color={MyColors.brand.primary}
        />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.header}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/63.jpg" }}
            style={styles.avatar}
          />

          <Text style={styles.username}>Abhijit Iyer-Mitra</Text>

          <Entypo
            name="dots-three-vertical"
            size={14}
            color="#8b98a5"
            style={{ marginLeft: "auto" }}
          />
        </View>

        <Text
          style={styles.text}
          numberOfLines={3}>
          What kind of BS is this @dpradhanbjp??? Dear @PMOIndia Mr Pradhan is
          actively promoting a naxalite agenda on taxpayer money. How can any
          government mandate any citizen to “...
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCards;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    paddingVertical: 14,
    paddingHorizontal: 12,
  },

  leftIcon: {
    marginRight: 10,
    marginTop: 4,
  },

  content: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },

  username: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },

  text: {
    color: "#8b98a5",
    fontSize: 14,
    lineHeight: 20,
  },
});
