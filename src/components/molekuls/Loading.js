import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const Loading = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color="white" />
      <Text style={styles.title}>Loading... </Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.50)",
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "800",
  },
});
