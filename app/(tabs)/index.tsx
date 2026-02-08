import TabBarPages from "@/components/TabBarOptions/TabBarPages";
import { MyColors } from "@/theme/MyColors";
import React from "react";
import { StyleSheet, View } from "react-native";

const index = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: MyColors.dark.background.secondary,
        }}>
        <TabBarPages />
      </View>
    </>
  );
};

export default index;

const styles = StyleSheet.create({});
