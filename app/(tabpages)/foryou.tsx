import FabGroupBTN from "@/components/Button/FabGroupBTN";
import { MyColors } from "@/theme/MyColors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const foryou = () => {
  return (
    <>
      <FabGroupBTN />

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
          For You Page
        </Text>
      </View>
    </>
  );
};

export default foryou;

const styles = StyleSheet.create({});
