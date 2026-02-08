import { MyColors } from "@/theme/MyColors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const following = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text
        style={{
          fontSize: 20,
          color: MyColors.brand.primary,
        }}>
        This is "Following" Page
      </Text>
    </View>
  );
};

export default following;

const styles = StyleSheet.create({});
