import { MyColors } from "@/theme/MyColors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const mentions = () => {
  return (
    <View
      style={{ flex: 1, backgroundColor: MyColors.dark.background.secondary }}>
      <Text>mentions</Text>
    </View>
  );
};

export default mentions;

const styles = StyleSheet.create({});
