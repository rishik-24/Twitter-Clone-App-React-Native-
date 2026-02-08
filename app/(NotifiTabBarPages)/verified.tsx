import { MyColors } from "@/theme/MyColors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const verified = () => {
  return (
    <View
      style={{ flex: 1, backgroundColor: MyColors.dark.background.secondary }}>
      <Text>verified</Text>
    </View>
  );
};

export default verified;

const styles = StyleSheet.create({});
