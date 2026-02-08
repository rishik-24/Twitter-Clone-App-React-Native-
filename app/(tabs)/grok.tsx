import React from "react";
import { StyleSheet, Text, View } from "react-native";

const grok = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#15202b",
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text style={{ color: "#FFF", fontSize: 24, fontWeight: "bold" }}>
          Following's Post
        </Text>
      </View>
    </View>
  );
};

export default grok;

const styles = StyleSheet.create({});
