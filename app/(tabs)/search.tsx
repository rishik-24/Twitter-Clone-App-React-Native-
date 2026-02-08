import SearchTabBar from "@/components/TabBarOptions/SearchTabBar";
import { MyColors } from "@/theme/MyColors";
import React from "react";
import { StyleSheet, View } from "react-native";

const search = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: MyColors.dark.background.secondary,
      }}>
      <SearchTabBar />
    </View>
  );
};

export default search;

const styles = StyleSheet.create({});
